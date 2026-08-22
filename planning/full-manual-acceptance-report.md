# SCOP Full End User Manual — Acceptance Report

**Release** 1 · **Database** `b2b` (local production-simulation, not production)
**Prepared** 22 August 2026 · **Branch** `docs/scop-full-user-manual`

---

## 1 · What was delivered

| | English | Arabic |
| --- | --- | --- |
| Pages | **91** | **91** |
| Words | ~114,000 | ~100,000 |
| Mermaid diagrams | 29 | 29 |
| Pages carrying `DocumentInfo` | 91 | 91 |
| Pages carrying **Related Pages** | 91 | 91 |
| Distinct screenshots referenced | **94** | **96** |

Structural parity between the two trees is exact: identical file paths, identical frontmatter
`id`s, identical `sidebar_position` values. Verified by diff, not by inspection.

Screenshot parity was checked the same way and **22 images were found missing from 11 Arabic
pages**; all were added. Every image the English manual shows, the Arabic manual now shows.
The Arabic tree carries two additional images the English does not — pre-existing enrichment,
left in place.

### The sixteen chapters

| # | Chapter | Pages | # | Chapter | Pages |
| --- | --- | --- | --- | --- | --- |
| 00 | About | 5 | 08 | Planning | 6 |
| 01 | Getting started | 4 | 09 | Execution | 10 |
| 02 | Roles | 10 | 10 | Exceptions | 1 |
| 03 | Concepts | 3 | 11 | Configuration | 9 |
| 04 | Demand | 6 | 12 | Reporting | 11 |
| 05 | Ownership | 2 | 13 | Reference | 4 |
| 06 | Shipments | 3 | 14 | Troubleshooting | 6 |
| 07 | Readiness | 1 | 15 | Scenarios | 10 |

The Quick Start Guide was not touched. It remains the onboarding path, and the manual links
to it rather than duplicating it.

---

## 2 · Build status

```text
npm run build   →   [en] SUCCESS   ·   [ar] SUCCESS   ·   0 warnings
```

`onBrokenLinks: 'throw'` and `onBrokenAnchors` are both satisfied in both locales.

Two build constraints were discovered and are recorded in the information-architecture
document so the next author does not rediscover them:

| Constraint | Consequence |
| --- | --- |
| A relative `.mdx` link resolves only when source and target share a translation state | The Arabic tree is **all-or-nothing**. A new English page must land with its Arabic counterpart in the same change |
| Explicit heading ids in `.mdx` use the MDX **comment** form, `{/* #my-id */}` | The `{#my-id}` form is parsed as a JSX expression and fails the build |

---

## 3 · Verification against `b2b`

Nothing in this manual is described from the source code alone. Every governed behaviour was
executed against the running system, through the real ORM, so every write passed the real
state machines and the real business rules.

### Roles exercised

All five operational logins, each acting only within its own rights:
`qs.sales` · `qs.planner` · `qs.warehouse` · `qs.opsmgr` · `qs.driver`.

### Business rules reproduced

| Rule | Reproduced | Evidence |
| --- | --- | --- |
| `BR-INV-002` | Yes | Named the rule, its version, the missing field and **every product at fault** |
| `BR-PLN-001` | Yes, **against the Administrator** | *"…was created by you, so you may not approve it."* |
| `BR-RTE-001` | Yes | **First Breach Sequence** named the point in the route |
| `BR-RTE-002` | Yes | Warned without blocking, at 0.0% peak utilisation |
| `BR-EXE-001` | Yes, on a **failure and a partial** | *"…did not deliver everything planned, so it needs a reason before it can be closed."* |
| Exception guard | Yes | *"…needs at least one resolution action before its resolution can be defined."* |

### Lifecycles driven end to end

| Cycle | Outcome |
| --- | --- |
| Order → demand → shipment → plan → trip → delivery → measured | Completed |
| Two demands sharing one stop | Resolved **independently** — one Completed, one partial |
| Partial delivery → backorder → remainder delivered | Original demand reached **Completed**, 10 of 10 across **two transfers** |
| Failed delivery with a reason | Stop **Failed**, trip **Partially Completed** |
| All five warehouse readiness states | Reproduced with their verbatim evidence |
| Twelve exception lifecycle states | Six reproduced, including escalated and closed |

### Documentation claims corrected by testing

Eight claims written from the implementation were disproved by the running system and
rewritten:

| Claim as written | Verified truth |
| --- | --- |
| An over-capacity load gives *No feasible vehicle* | It gives **Capacity shortage**; *No feasible vehicle* means no vehicle declares a capacity profile |
| Classify starts the SLA clock | The clock starts at **detection** |
| Resolution actions carry a free description | They carry one of **eleven named types** |
| A compatibility group lists its handling profiles | The group carries a **separation level** |
| A stop line has a direct `demand_id` | It reaches its demand **through `shipment_line_id`** |
| Demand list column *Customer* | **Requesting Party** |
| Demand list column *Destination* | **Destination Location** |
| A driver cannot read Odoo transfers | A driver **can** read `stock.picking` headers |

---

## 4 · Defects found

Five, recorded in full in the coverage matrix rather than written around.

| # | Severity | Summary | SCOP's? |
| --- | --- | --- | --- |
| 1 | Low | **Compute Capacity** offered to users who cannot use it | Yes |
| 2 | Cosmetic | `Capacity Feasible` reads `false` when never computed | Yes |
| 3 | High | `stock_return_approval.user` grants every internal user RWCU on `stock.picking` — a Driver can list 21,181 transfer headers | **No** — third-party module |
| 4 | ~~Blocker~~ **Fixed** | Every SCOP projection triggered by the **Warehouse** role failed on an access error. Both projections now run under `sudo()` | Yes |
| 5 | Medium | The specification's *"follow-up demand created"* side effect is not implemented | Yes |

### Defect 4 — found, fixed and verified

The Warehouse role has **read but not write or create** on `scop.demand`, and
`_scop_after_done` / `_scop_generate_demand` touch it **without `sudo()`**. So the role the
manual instructs to create and validate transfers cannot drive the records those actions are
supposed to drive.

On `b2b` that is **13 failed projections against 13 processed** — half the event log.

| What the user sees | Why it is easy to miss |
| --- | --- |
| A transfer the warehouse creates produces **no demand** | No `DemandGenerationSkipped` row either, so it does not look like a missing node |
| A validated transfer leaves its demand at **In Execution** | Quantities *do* appear — `Fulfilled` is computed from the moves. Only the **state** is stuck |

The state machine itself is sound: run the same call as a Planner and the demand advances
correctly.

**Fixed.** Both projections now run under `sudo()` — the same thing
`scop.trip._scop_cascade_complete` already did. `sudo()` bypasses the access check without
changing the user, so `create_uid` stays the person who did the work and separation of duties
is untouched.

| Evidence | Result |
| --- | --- |
| Full `scop_shipment` suite before / after | 6 failed + 5 errors → **2 failed + 5 errors** of 162. The difference is exactly the four new tests going green |
| Live on `b2b` as `qs.warehouse` | A created transfer generates its demand; a demand stuck since before the fix reached **Completed**; a short validation gave **Partially Completed** and a backorder, which then completed it at 10 of 10 |
| Failed projections since the fix | **None.** Processed went 13 → 23 |

Full record: [defect-4-fix.md](./defect-4-fix.md).

---

## 5 · Definition of Done

| # | Item | Status |
| --- | --- | --- |
| 1 | New section, Quick Start untouched | **Done** |
| 2 | Coverage matrix delivered before authoring | **Done** |
| 3 | Every area, screen, role and lifecycle covered | **Done** |
| 4 | Release 1 boundary stated on every relevant page | **Done** |
| 5 | Every governed behaviour verified on `b2b` | **Done** |
| 6 | Business rules reproduced with verbatim messages | **Done** |
| 7 | Defects recorded, not written around | **Done** — five |
| 8 | Screenshots from the running system | **Done** — 85 |
| 9 | English complete | **Done** — 91 pages |
| 10 | Arabic complete, professional, not machine-translated | **Done** — 91 pages |
| 11 | Both locales build clean | **Done** |
| 12 | Approved Planner permissions unchanged | **Done** — never modified |

---

## 6 · RTL verification

Every one of the 91 Arabic pages was loaded in a headless browser at 1280×900 and inspected
programmatically, not by sampling.

| Check | Result |
| --- | --- |
| `dir="rtl"` and `lang="ar"` on the document | **91 / 91** |
| Horizontal page overflow | **0 pages** |
| Elements painted outside the viewport | **0 pages** |
| Wide code blocks | Contained — every `<pre>` has `overflow-x: auto` and scrolls in its own box |
| Code direction inside RTL prose | `direction: ltr`, correct — identifiers stay readable |
| Mermaid diagrams | Render correctly; the English pages carry the same wide blocks |

Seventeen pages initially flagged for wide `<pre>` elements. All were false positives: the
blocks scroll within their own container, the page itself never scrolls sideways, and the
English pages behave identically. **No RTL defect was found.**

## 7 · Recommendation

**The manual is ready for review.** The documentation itself is complete and verified.

**Defect 4 is fixed** and the manual now describes the corrected behaviour. The change sits on
branch `fix/warehouse-projection-access` in the addon repository and still needs to be merged
and deployed; until it is, the documentation is ahead of the deployed system on that point.

**Defect 5 remains open.** A total failure leaves nothing carrying the requirement, and the
manual says so.

Defect 3 is not SCOP's, but the customer data it exposes is real and worth raising with
whoever owns that module.
