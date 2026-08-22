# Defect 4 — fix record

**Severity** Blocker · **Status** Fixed and verified on `b2b` · **22 August 2026**
**Repository** `b2b/b2b` (the SCOP addons), **not** this documentation repository.

---

## The defect

Every SCOP projection triggered by the **Warehouse** role failed on an access error.

The Warehouse role holds **read but not write or create** on `scop.demand`, and both
projection hooks touched it **without `sudo()`**:

| Hook | Fired by | Effect of the failure |
| --- | --- | --- |
| `_scop_generate_demand` | Creating a transfer | **No demand at all**, and no `DemandGenerationSkipped` row either — so it did not even look like a missing planning node |
| `_scop_after_done` | Validating a transfer | The demand never left `in_execution`, while quantities still appeared because `qty_fulfilled` is computed from the moves |

Generation is non-blocking by design, so the error was swallowed into `scop.event.log` and
the transfer saved anyway. Nothing on screen looked wrong. On `b2b` this had produced
**13 failed projections against 13 processed**.

The Warehouse role is precisely the role the manual instructs to create and validate
transfers, which is what made this a Blocker rather than an inconvenience.

---

## The fix

Three edits in `scop_shipment/models/stock_picking.py`.

| # | Location | Change |
| --- | --- | --- |
| 1 | `_scop_generate_demand` | `self.env["scop.demand"]` → `self.env["scop.demand"].sudo()` when opening the operation env |
| 2 | `_scop_after_done` | Read the demands through `picking = self.sudo()` |
| 3 | `_scop_after_done` | Resolve affected shipments through `picking.env` rather than `self.env` |

`scop.trip._scop_cascade_complete` already used `sudo()` for the same reason, so this makes
the two projection paths consistent rather than introducing a new pattern.

### Why `sudo()` and not an ACL grant

Granting the Warehouse group write on `scop.demand` would give the warehouse authority over
demand records — which the design deliberately withholds, and which the manual states as a
rule the warehouse works within. The projection is **the system's own bookkeeping** about a
movement Odoo has already accepted, not an action the user is performing on the demand.

`sudo()` bypasses the access check **without changing the user** — confirmed against this
Odoo's own source: *"The superuser mode does not change the current user, and simply bypasses
access rights checks."* So `create_uid` stays the person who did the work, and
`BR-PLN-001`'s separation-of-duties comparison is untouched. That is asserted by a test.

---

## Verification

### Unit tests

Five new tests in `scop_shipment/tests/test_fulfilment.py`, class
`TestProjectionRunsForTheActingRole`. They act **as** the warehouse user rather than
re-owning a recordset afterwards — generation happens inside `create()`, so switching the env
after the fact proves nothing. The first draft made exactly that mistake and the suite caught
it.

| Run | Result |
| --- | --- |
| Full `scop_shipment` suite, **before** the fix | 6 failed, 5 errors of 162 |
| Full `scop_shipment` suite, **after** the fix | 2 failed, 5 errors of 162 |

The difference is exactly the four new tests going from red to green. **The change breaks
nothing.**

Seven problems are **pre-existing and unrelated** — identical in both runs, and not touched
by this fix:

| Test | Kind |
| --- | --- |
| `TestOwnershipDerivation.test_mixed_owners_on_one_move_resolve_to_nothing` | negative-stock fixture |
| `TestOwnershipDerivation.test_the_chain_refuses_a_contradiction` | negative-stock fixture |
| `TestOwnershipMigration.test_an_existing_owner_is_not_overwritten_by_default` | failure |
| `TestOwnershipMigration.test_ownership_is_written_onto_the_quant` | failure |
| `TestCoexistence.test_the_auto_invoice_is_unaffected_by_scop` | error |
| `TestCommitments.test_a_sale_order_commitment_date_seeds_the_demand_commitment` | error |
| `TestCommitments.test_the_commitment_is_not_re_read_after_generation` | error |

### Live, on `b2b`, entirely as `qs.warehouse`

| # | Test | Result |
| --- | --- | --- |
| 1 | Warehouse creates a transfer | `QSD/OUT/00025` → **`DMD-2026-000293`**, and `create_uid` is **QS Demo — Warehouse** — the audit trail survived the elevation |
| 2 | Warehouse validates a transfer behind a demand stuck since before the fix | `DMD-2026-000004` went `in_execution` → **`completed`**, 8 of 8, **no failed projection** |
| 3 | Warehouse validates short, 3 of 5 | `DMD-2026-000005` → **`partially_completed`**, remaining 2.0, backorder `QSD/OUT/00026` raised |
| 4 | Warehouse validates the backorder | `DMD-2026-000005` → **`completed`**, 5 of 5 across **two transfers** |

Projection counters across the restart:

| | Before | After |
| --- | --- | --- |
| Failed | 10 | **10** — none newer than 12:08, before the fix |
| Processed | 13 | **23** |

Every projection since the fix has succeeded.

---

## What is *not* fixed

**Defect 5 stands.** No follow-up demand is ever created. A partial delivery does not need
one — the Odoo backorder carries the remainder against the same demand, proven above. A
**total failure** does: `DMD-2026-000013` is `failed`, terminal, with 5.0 still owed and
nothing carrying it. That remains a separate, open defect.

---

## Handling note

The addon repository had **211 files already modified and uncommitted** when this work
started. Nothing there was committed, and no pre-existing change was touched. The two files
this fix edits are:

```text
scop_shipment/models/stock_picking.py     (3 edits)
scop_shipment/tests/test_fulfilment.py    (1 new test class)
```

Odoo was stopped and restarted with its original command, `venv/bin/python odoo_src/odoo-bin
-c odoo.conf`, and all six login sessions survived.
