# SCOP Full End User Manual — Phase A Discovery Record

**Date of discovery:** 21 August 2026
**Application:** `http://localhost:1701/` · database `b2b` · Odoo 17.0
**Source of truth:** running implementation, verified against addon source and the canonical state-machine specification.

This file records what was found, so that the Coverage Matrix and the manual itself
can be audited against a fixed inventory rather than against memory.

---

## A1 · Installed SCOP modules

Queried from `ir_module_module` on `b2b`.

| Module | State | Version | Contributes |
| --- | --- | --- | --- |
| `scop_base` | installed | 17.0.1.1.0 | Menus, roles, business-rule registry, reason codes, catalogues, domain events, state-machine engine |
| `scop_locations` | installed | 17.0.1.0.0 | Planning nodes, opening windows, travel matrix, location import |
| `scop_fleet` | installed | 17.0.1.0.0 | Vehicle capacity/availability/cost, driver qualifications, resource assignments |
| `scop_shipment` | installed | 17.0.1.1.0 | Demand, ownership, shipment, readiness, loading tasks, commitments, onboarding |
| `scop_trip` | installed | 17.0.1.1.0 | Trips, stops, loads, routes, stop activities, capacity curve, execution events |
| `scop_exception` | installed | 17.0.1.1.0 | Operational exceptions, categories, SLA and escalation |
| `scop_planning` | installed | 17.0.1.1.0 | Daily plans, planning runs, unplanned demand, decision providers, pilot scope, releases |
| `scop_driver` | installed | 17.0.1.1.0 | Driver surface — My Trips, My Stops, proof of delivery |
| `scop_report` | installed | 17.0.1.1.0 | Eleven reports plus the SCOP dashboard |
| `scop_locations_portal_branch` | **uninstalled** | — | Optional portal-branch bridge. **Out of Release 1 documentation scope.** |
| `scop_report_kdn` | **uninstalled** | — | Dashboard Ninja bridge, deliberately not installable pending licence confirmation. **Out of scope.** |

---

## A2 · Menu inventory

The live menu tree was read from `ir_ui_menu` and matches the addon source exactly.
**69 menu entries** under two roots.

```text
SCOP  (group_scop_user, group_scop_driver)
├── Dashboard                     client action           Planner, Management
├── My Work                                               Driver
│   ├── My Trips                  scop.trip (driver views)
│   └── My Stops                  scop.trip.stop (driver views)
├── Operations                                            SCOP User
│   ├── Demands                   scop.demand
│   ├── Shipments                 scop.shipment
│   ├── Warehouse Readiness       scop.warehouse.readiness      Warehouse
│   ├── Loading Tasks             scop.loading.task             Warehouse
│   ├── Allocations               scop.allocation
│   ├── Trips                     scop.trip          (hidden from Driver)
│   ├── Stops                     scop.trip.stop     (hidden from Driver)
│   ├── Loads                     scop.load
│   ├── Resource Assignments      scop.resource.assignment      Planner
│   └── Exceptions                scop.exception
├── Planning                                              Planner
│   ├── Generate a Plan           scop.planning.wizard
│   ├── Daily Plans               scop.plan
│   ├── Planning Runs             scop.plan.run
│   └── Unplanned Demand          scop.unplanned.demand
├── Master Data                                           SCOP User
│   ├── Locations                 scop.location
│   ├── Import Locations          scop.location.import          Administrator
│   ├── Routes                    scop.route                    Planner
│   ├── Stop Activities           scop.stop.activity            Planner
│   ├── Service Commitments       scop.service.commitment
│   ├── Supplier Commitments      scop.supplier.commitment      Procurement
│   ├── Capacity Profiles         scop.capacity.profile
│   ├── Handling Profiles         scop.handling.profile
│   ├── Compatibility Groups      scop.compatibility.group
│   ├── Shelf-Life Profiles       scop.shelf.life.profile
│   ├── Qualification Types       scop.qualification.type
│   ├── Driver Qualifications     scop.driver.qualification
│   ├── Vehicle Availability      scop.vehicle.availability     Planner
│   ├── Driver Availability       scop.driver.availability      Planner
│   └── Onboarding                                               Administrator
│       ├── 1 · Consignment Partners   scop.consignment.partner.import
│       ├── 2 · Inventory Ownership    scop.quant.ownership.import
│       └── 3 · Pilot Readiness        scop.pilot.readiness      Management
├── Governance                                            SCOP User
│   ├── Business Rules            scop.business.rule
│   ├── Rule Evaluations          scop.rule.evaluation
│   ├── Rule Exemptions           scop.rule.exemption           Planner
│   ├── Reason Codes              scop.reason
│   ├── Objective Profiles        scop.objective.profile        Planner
│   ├── Approval Authorities      scop.approval.authority       Administrator
│   ├── Feature Flags             scop.feature.flag             Administrator
│   └── Exception Categories      scop.exception.category
├── Reporting                                             SCOP User
│   ├── Plan Coverage             scop.report.plan.coverage     Planner
│   ├── Unplanned Demand          scop.unplanned.demand         Planner
│   ├── Vehicle Utilization       scop.trip.capacity.snapshot   Planner
│   ├── OTIF                      scop.report.otif
│   ├── Trip Planned vs Actual    scop.trip
│   ├── Exception Ageing          scop.report.exception.ageing
│   ├── Decision Quality          scop.plan                     Planner
│   ├── Operation Timeline        scop.timeline.wizard
│   ├── Failed Projections        scop.event.log                Administrator
│   ├── Orphan Moves              stock.move                    Administrator
│   └── Ownership Data Quality    scop.report.ownership
└── Technical                                             Administrator
    ├── Domain Events             scop.event.log
    ├── Sequence Counters         scop.sequence.counter
    ├── Execution Events          scop.execution.event
    ├── Capacity Snapshots        scop.trip.capacity.snapshot
    ├── Travel Matrix             scop.travel.matrix
    ├── Pilot Scope               scop.pilot.scope
    └── Releases                  scop.release
```

**58 window actions** plus **1 client action** (Dashboard) target SCOP models.

---

## A3 · Model inventory

**91 models** declare a `_name` beginning `scop.`. They fall into four bands.

### Band 1 — User-facing operational objects (documented in full)

`scop.demand`, `scop.demand.line`, `scop.shipment`, `scop.shipment.line`,
`scop.warehouse.readiness`, `scop.allocation`, `scop.loading.task`,
`scop.plan`, `scop.plan.run`, `scop.unplanned.demand`,
`scop.trip`, `scop.trip.stop`, `scop.trip.stop.line`, `scop.load`, `scop.load.line`,
`scop.exception`, `scop.resolution.action`,
`scop.service.commitment`, `scop.supplier.commitment`

### Band 2 — User-facing configuration and master data (documented for the roles that own them)

`scop.location`, `scop.location.window`, `scop.location.constraint`, `scop.travel.matrix`,
`scop.route`, `scop.route.stop`, `scop.stop.activity`,
`scop.capacity.profile`, `scop.capacity.dimension`, `scop.handling.profile`,
`scop.compatibility.group`, `scop.shelf.life.profile`,
`scop.qualification.type`, `scop.driver.qualification`,
`scop.vehicle.availability`, `scop.driver.availability`, `scop.resource.assignment`,
`scop.vehicle.compartment`, `scop.vehicle.restriction`,
`scop.pilot.scope`, `scop.release`,
`scop.business.rule`, `scop.rule.evaluation`, `scop.rule.exemption`,
`scop.reason`, `scop.objective.profile`, `scop.objective.level`,
`scop.approval.authority`, `scop.feature.flag`, `scop.exception.category`

### Band 3 — Wizards and reports (documented as screens, not as objects)

`scop.planning.wizard`, `scop.planning.wizard.line`, `scop.timeline.wizard`,
`scop.location.import`, `scop.consignment.partner.import`,
`scop.quant.ownership.import`, `scop.pilot.readiness`,
`scop.report.plan.coverage`, `scop.report.otif`, `scop.report.exception.ageing`,
`scop.report.ownership`, `scop.report.timeline`, `scop.trip.capacity.snapshot`,
`scop.dashboard`

### Band 4 — Technical / not user-facing (named only where an Administrator must read them)

`scop.event.log`, `scop.execution.event`, `scop.sequence.counter`,
`scop.ownership` (abstract derivation service), `scop.rule.engine`,
`scop.planning.builder`, all `scop.mixin.*`, all `scop.service.*` providers,
`scop.report.mixin`, `scop.import.mixin`, `scop.plan.approval`, `scop.shipment.constraint`.

`scop.ownership` has **no database table** — it is an abstract derivation service.
The manual therefore documents ownership as a *property of a demand line*, never as a record.

---

## A4 · Lifecycle specification

The canonical authority is `scop_base/data/state_machines.json`
(`SCOP_IMPLEMENTATION_PLAN_V3.md` Appendix A). A drift test compares every model's
transitions against it. **Twelve governed machines** exist:

| # | Model | Field | States | Terminal states |
| --- | --- | --- | --- | --- |
| 1 | `scop.demand` | `state` | 12 | completed, failed, rejected, cancelled |
| 2 | `scop.demand` | `return_state` | 5 | closed |
| 3 | `scop.shipment` | `state` | 6 | completed, cancelled |
| 4 | `scop.plan` | `state` | 6 | released |
| 5 | `scop.plan.run` | `state` | 7 | closed, cancelled |
| 6 | `scop.trip` | `state` | 13 | completed, partially_completed, cancelled |
| 7 | `scop.trip.stop` | `status` | 6 | completed, failed, skipped |
| 8 | `scop.trip.stop` | `outcome` | 5 | all terminal (classification, not a lifecycle) |
| 9 | `scop.load` | `state` | 8 | closed, cancelled |
| 10 | `scop.exception` | `state` | 10 | closed, cancelled |
| 11 | `scop.business.rule` | `state` | 11 | retired, cancelled |
| 12 | `scop.execution.event` | `state` | 3 | reconciled |

**Not governed state machines** — these carry a plain status field and must not be drawn
as governed lifecycles:

- `scop.loading.task.status` — `pending → in_progress → done`, plus `cancelled`
- `scop.warehouse.readiness.state` — **computed from evidence**, five values, never transitioned by a user
- `scop.loading.task.state` — an unrelated inherited field (`open / received / cancelled`); not shown to users

---

## A5 · Business-rule registry (live on `b2b`)

All six rules are in state **active**.

| Code | Ver | Name | Severity | Type | Subject | Fires at | On unable |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `BR-INV-002` | 1.0 | Ownership must be resolved and consistent | blocking | ownership | `scop.demand` | `demand_validate` | block |
| `BR-PLN-001` | 1.0 | Approval must be separated from creation | blocking | approval | `scop.plan` | `plan_approve`, `plan_release` | block |
| `BR-PLN-002` | 1.0 | A blocked trip must not be released with its plan | blocking | validation | `scop.plan` | `plan_release` | block |
| `BR-RTE-001` | 1.0 | Sequence must be feasible at every point | blocking | capacity | `scop.trip` | `trip_approve`, `trip_release`, `load_confirm` | block |
| `BR-RTE-002` | 1.0 | Vehicle utilisation should not be wasteful | **warning** | capacity | `scop.trip` | `trip_approve`, `trip_release` | skip |
| `BR-EXE-001` | 1.0 | A failed or partial stop must carry an outcome reason | blocking | validation | `scop.trip` | `trip_complete` | block |

**Two rules were not named in the project brief and must be documented:** `BR-PLN-002`
and `BR-RTE-001`/`BR-RTE-002`. All are user-facing: a user meets them as a refusal dialog.

Named gates found in the specification: `demand_validate`, `demand_eligible`,
`plan_approve`, `plan_release`, `trip_approve`, `trip_release`, `trip_depart`,
`trip_complete`, `load_confirm`, `stop_complete`.

---

## A6 · Roles

Ten SCOP groups exist in the `SCOP` module category, with this inheritance ladder:

```text
base.group_user
 ├── SCOP User ──┬── Warehouse User ─────┐
 │               ├── Procurement User    │
 │               ├── Customer Service User
 │               ├── Finance User        │
 │               ├── Planner / Dispatcher ┤
 │               └── Management ──────────┼──┐
 │                                        │  │
 │                   Operations Manager ──┘  │
 │                     (= Planner + Warehouse)│
 │                            └── Administrator
 └── Driver   (standalone — does NOT imply SCOP User)
```

`Driver` deliberately does not inherit `SCOP User`. That is the whole basis of the driver
security model and must be stated plainly in the manual.

**Finance User** carries a group but has **no menu of its own** in Release 1. This is a
genuine finding — see the Open Questions section below.

### Approval authorities seeded on `b2b`

| Subject | Action | Required group | Self-approval forbidden |
| --- | --- | --- | --- |
| `scop.plan` | approve | Operations Manager | **Yes** |
| `scop.plan` | release | Operations Manager | **Yes** |
| `scop.trip` | approve | Operations Manager | No |
| `scop.trip` | release | Operations Manager | No |
| `scop.trip` | depart | Planner / Dispatcher | No |
| `scop.trip` | cancel | Planner / Dispatcher | No |
| `scop.demand` | plan / replan / cancel | Planner / Dispatcher | No |
| `scop.shipment` | cancel | Planner / Dispatcher | No |
| `scop.load` | cancel | Warehouse User | No |

### Odoo groups SCOP does not grant but needs

Carried forward from the approved Quick Start and to be re-verified:
**Fleet / Administrator** and **Employees / Officer** for planners;
**Inventory / User** for planners and for whoever validates transfers.
No Sales permission at any point.

---

## A7 · Vocabularies

**51 active reason codes** in six categories — the manual documents each category as a
picklist the user will actually meet:

| Category | Count | Met when |
| --- | --- | --- |
| `unplanned_demand` | 12 | Reading why a demand was not planned |
| `override` | 9 | Modifying a recommended plan |
| `exception_root_cause` | 11 | Classifying an exception |
| `stop_outcome` | 7 | Failing or skipping a stop |
| `next_action` | 7 | Recording what to do about unplanned demand |
| `return_disposition` | 5 | Dispositioning returned goods |

**12 exception categories** seeded, each with a default severity and an SLA in hours
(2 h for vehicle breakdown up to 48 h for an invalid KPI result).

**9 objective levels** in one profile (`SCOP-STD`), ranked
safety/legal/ownership → feasibility → customer commitments → priority → coverage →
resource availability → utilisation → efficiency → preferences.

---

## A8 · Reports

Eleven reporting menu entries. Verified backing models and default filters:

| Report | Model | Views | Default filter |
| --- | --- | --- | --- |
| Plan Coverage | `scop.report.plan.coverage` | tree, pivot | — |
| Unplanned Demand | `scop.unplanned.demand` | pivot, graph, tree | group by reason |
| Vehicle Utilization | `scop.trip.capacity.snapshot` | pivot, tree | group by vehicle |
| OTIF | `scop.report.otif` | tree, pivot | `has_commitment` |
| Trip Planned vs Actual | `scop.trip` | pivot, tree | completed + partially completed |
| Exception Ageing | `scop.report.exception.ageing` | tree, pivot | — |
| Decision Quality | `scop.plan` | pivot, tree | group by modified |
| Operation Timeline | `scop.timeline.wizard` → `scop.report.timeline` | wizard → tree | correlation reference |
| Failed Projections | `scop.event.log` | tree, form | `state = failed` |
| Orphan Moves | `stock.move` | tree | `scop_is_orphan = True` |
| Ownership Data Quality | `scop.report.ownership` | tree, pivot | group by resolution |

Plus the **SCOP Dashboard**, an OWL client action (`scop_report.dashboard`) for
Planner and Management.

---

## A9 · Current data on `b2b`

Row counts taken at discovery. This is the Quick Start's demo story, and it is the
starting point — not the finishing point — for the Full Manual's demo data.

| Object | Rows | Note |
| --- | --- | --- |
| Demands | 9 | `DMD-2026-000001` … `-000011`, two numbers absent |
| Demand lines | 11 | |
| Shipments | 5 | including `SHP-2026-000006`, the consolidated one |
| Shipment lines | 11 | |
| Warehouse readiness | 5 | |
| Daily plans | 5 | all released |
| Planning runs | 5 | |
| Trips | 5 | 3 completed, 1 partially completed, 1 in progress |
| Trip stops | 11 | |
| Loading tasks | 5 | |
| Service commitments | 9 | |
| Planning nodes | 2 | `QSD-WH`, `QS-CUST-01` |
| Location windows | 10 | |
| Reason codes | 51 | |
| Exception categories | 12 | |
| Rule evaluations | 45 | |
| Pilot scope | 1 | 4 operation types in scope, QS Demo Warehouse |

**Empty tables that the manual must populate to document honestly:**

`scop_exception` (0), `scop_execution_event` (0), `scop_load` (0), `scop_load_line` (0),
`scop_unplanned_demand` (0), `scop_route` (0), `scop_route_stop` (0),
`scop_trip_capacity_snapshot` (0), `scop_rule_exemption` (0), `scop_release` (0),
`scop_compatibility_group` (0), `scop_handling_profile` (0), `scop_shelf_life_profile` (0),
`scop_supplier_commitment` (0), `scop_feature_flag` (0), `scop_vehicle_compartment` (0),
`scop_vehicle_restriction` (0), `scop_location_constraint` (0), `scop_pilot_readiness` (0),
`scop_consignment_partner_import` (0), `scop_quant_ownership_import` (0).

Chapters covering these areas **must not be written from source code alone**. Each one
needs a scenario built on `b2b` first.

---

## A10 · Open items carried into Phase B

1. **Login credentials are not available to the documentation session.** Screenshot
   capture and live UI verification are blocked until a browser session is authenticated.
   Discovery so far is from the addon source and direct reads of the `b2b` database,
   both of which are authoritative for structure but not for rendering.
2. **`Finance User` group has no menu.** Either it is a placeholder for a later release,
   or a menu is missing. To be resolved against the Release 1 boundary before the Roles
   chapter is written.
3. **`scop.trip` `depart` authority is `Planner / Dispatcher`,** yet the approved Quick
   Start states that a Driver departs their own trip. Both can be true if departure runs
   on the system's behalf. To be confirmed in implementation before the Driver chapter
   is written.
4. **Two demand numbers and one shipment number are absent** from the sequence on `b2b`.
   Harmless if they were test records that were deleted; to be confirmed so that no
   screenshot implies a gap in the audit trail.
5. **Staged % display defect** is recorded in the approved Release 1 Boundaries and is
   still expected to be present. To be re-verified, not assumed.
