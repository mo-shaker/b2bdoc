# SCOP Full End User Manual — Coverage Matrix

**Purpose:** to guarantee that no user-facing part of SCOP Release 1 is accidentally omitted.
**Baseline:** every menu entry, wizard, report and lifecycle object found in Phase A discovery.
**Application:** `http://localhost:1701/` · database `b2b`.

## How to read the columns

| Column | Meaning |
| --- | --- |
| **Screenshot Needed** | `Yes` = the chapter cannot be understood without it · `Reuse` = an accurate Quick Start capture exists · `No` = prose and tables suffice |
| **Tested on b2b** | `Structure` = verified from the live database and addon source · `UI` = exercised in the running application · `Scenario` = a purpose-built record was created and driven through the flow |
| **Status** | `Not started` · `Data needed` (no record exists to document) · `Drafted` · `Verified` · `Complete` |

**Revision 2 — an authenticated Administrator session is now available.** Scenario data has
been built on `b2b` through the real ORM, the business rules have been exercised, and 63
screenshots have been captured. Rows reachable as the Administrator have moved to `UI` or
`Scenario`.

**What is still blocked:** anything requiring a *different* user identity — plan approval
and release by a second person, and the role-specific screens (Driver `My Work`, and the
per-role menu visibility captures). See *Blocking dependency* at the foot of this file.

---

## 1 · Navigation and access

| Area | Screen / Object | Role | Manual Chapter | Screenshot | Tested on b2b | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Access | Sign-in, database selection | All | `getting-started/accessing-scop` | Yes | Structure | Not started |
| Navigation | `SCOP` root menu | All | `getting-started/navigating-scop` | Yes | Structure | Not started |
| Navigation | Menu visibility per role (10 groups) | All | `getting-started/navigating-scop` | Yes | Structure | Not started |
| Navigation | List / form / kanban / pivot / graph / calendar | All | `getting-started/working-with-lists-and-forms` | Yes | Structure | Not started |
| Navigation | Search, filters, Group By, favourites | All | `getting-started/searching-filtering-grouping` | Yes | Structure | Not started |
| Navigation | Chatter, activities, followers | All | `getting-started/searching-filtering-grouping` | Yes | Structure | Not started |
| Dashboard | `SCOP → Dashboard` (OWL client action) | Planner, Management | `reporting/the-dashboard` | Yes | Structure | Data needed |

---

## 2 · Roles

| Area | Screen / Object | Role | Manual Chapter | Screenshot | Tested on b2b | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Roles | SCOP User | All | `roles/roles-overview` | No | Structure | Not started |
| Roles | Customer Service User | Customer Service | `roles/customer-service` | Yes | Structure | Not started |
| Roles | Warehouse User | Warehouse | `roles/warehouse` | Yes | Structure | Not started |
| Roles | Planner / Dispatcher | Planner | `roles/planner-dispatcher` | Yes | Structure | Not started |
| Roles | Operations Manager | Ops Manager | `roles/operations-manager` | Yes | Structure | Not started |
| Roles | Driver | Driver | `roles/driver` | Yes | Structure | Not started |
| Roles | Procurement User | Procurement | `roles/procurement` | No | Structure | Not started |
| Roles | Management | Management | `roles/management` | Yes | Structure | Not started |
| Roles | Administrator | Administrator | `roles/administrator` | No | Structure | Not started |
| Roles | **Finance User** | Finance | `roles/permissions-reference` | No | Structure | **Open question — no menu** |
| Roles | Required Odoo groups (Fleet/Admin, Employees/Officer, Inventory/User) | Planner, Warehouse | `roles/permissions-reference` | Yes | Structure | Not started |
| Roles | Approval authorities (11 seeded rows) | Ops Manager, Admin | `concepts/the-governance-model` | Yes | Structure | Not started |

---

## 3 · Core concepts

| Area | Screen / Object | Role | Manual Chapter | Screenshot | Tested on b2b | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Concepts | Object model and relationships | All | `concepts/the-object-model` | No (diagram) | Structure | Not started |
| Concepts | Business IDs (`DMD-`, `SHP-`, `PLN-`, `TRP-`) | All | `concepts/identity-and-traceability` | Reuse | Structure | Not started |
| Concepts | Correlation reference | All | `concepts/identity-and-traceability` | Yes | Structure | Not started |
| Concepts | Domain events (`scop.event.log`) | Administrator | `concepts/identity-and-traceability` | Yes | Structure | Not started |
| Concepts | Business rules, gates, severities | All | `concepts/the-governance-model` | Yes | Structure | Not started |
| Concepts | Reason codes (51, six categories) | All | `concepts/the-governance-model` | Yes | Structure | Not started |
| Concepts | Objective profile and nine levels | Planner | `planning/planning-overview` | Yes | Structure | Not started |

---

## 4 · Demand management

| Area | Screen / Object | Role | Manual Chapter | Screenshot | Tested on b2b | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Demand | `Operations → Demands` list | All | `demand/demand-management` | Reuse | Structure | Not started |
| Demand | Demand kanban (grouped by status) | Planner | `demand/demand-management` | Yes | Structure | Not started |
| Demand | Demand form | All | `demand/demand-management` | Reuse | Structure | Not started |
| Demand | `scop.demand.line` | All | `demand/demand-management` | Yes | Structure | Not started |
| Demand | Source Document (model + name, no Sales rights) | Customer Service | `demand/how-demands-are-created` | Yes | Structure | Not started |
| Demand | Automatic generation from in-scope transfer | — | `demand/how-demands-are-created` | Yes | Structure | Not started |
| Demand | 12 states + `return_state` (5) | All | `demand/demand-lifecycle` | No (diagram) | Structure | Not started |
| Demand | `Submit` | Customer Service | `demand/demand-lifecycle` | No | Structure | Not started |
| Demand | `Validate` (gate `demand_validate`, BR-INV-002) | Planner | `demand/planning-eligibility` | Reuse | Structure | Not started |
| Demand | `Mark Eligible` (gate `demand_eligible`) | Planner | `demand/planning-eligibility` | Reuse | Structure | Not started |
| Demand | `Reject` (reason required) | Planner | `demand/demand-lifecycle` | Yes | Structure | **Data needed** |
| Demand | `Cancel` | Planner | `demand/demand-lifecycle` | No | Structure | **Data needed** |
| Demand | `Replan` / `Unplan` | Planner | `demand/demand-lifecycle` | Yes | Structure | **Data needed** |
| Demand | `Create Shipment` (re-run only) | Planner | `shipments/formation-and-consolidation` | No | Structure | Not started |
| Demand | `Resolve Ownership` | Planner | `ownership/correcting-ownership` | Reuse | Structure | Not started |
| Demand | Completed / Partially Completed / Failed | — | `demand/demand-completion` | Yes | Structure | Not started |
| Demand | Follow-up demand (`is_follow_up`) | Planner | `demand/demand-completion` | Yes | Structure | **Data needed** |
| Demand | Return sub-lifecycle (5 states, disposition) | Warehouse | `demand/demand-completion` | Yes | Structure | **Data needed** |
| Demand | `Operations → Allocations` | Planner | `demand/planning-eligibility` | Yes | Structure | Not started |
| Demand | Diagnostics — stuck demand | Planner | `demand/demand-diagnostics` | Yes | Structure | Not started |

---

## 5 · Inventory ownership

| Area | Screen / Object | Role | Manual Chapter | Screenshot | Tested on b2b | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Ownership | Five ownership sources | Planner | `ownership/inventory-ownership` | No | Structure | Not started |
| Ownership | `BR-INV-002` refusal dialog | Planner | `ownership/inventory-ownership` | Reuse | Structure | Not started |
| Ownership | Ownership on the demand line | Planner | `ownership/inventory-ownership` | Reuse | Structure | Not started |
| Ownership | Unresolved ownership → readiness `Blocked` | Warehouse | `ownership/correcting-ownership` | Yes | Structure | **Data needed** |
| Ownership | Consignment ownership from a flagged partner | Planner | `ownership/inventory-ownership` | Yes | Structure | **Data needed** |
| Ownership | `Reporting → Ownership Data Quality` | All | `reporting/data-quality-reports` | Yes | Structure | Not started |
| Ownership | Onboarding `1 · Consignment Partners` | Administrator | `configuration/onboarding-and-migration` | Yes | Structure | **Data needed** |
| Ownership | Onboarding `2 · Inventory Ownership` | Administrator | `configuration/onboarding-and-migration` | Yes | Structure | **Data needed** |

---

## 6 · Shipments and the physical visit

| Area | Screen / Object | Role | Manual Chapter | Screenshot | Tested on b2b | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Shipment | `Operations → Shipments` list | All | `shipments/shipment-management` | Reuse | Structure | Not started |
| Shipment | Shipment form | All | `shipments/shipment-management` | Reuse | Structure | Not started |
| Shipment | `scop.shipment.line` | All | `shipments/shipment-management` | Yes | Structure | Not started |
| Shipment | Origin / destination node, weight, volume, dates | Planner | `shipments/shipment-management` | Reuse | Structure | Not started |
| Shipment | 6 states | All | `shipments/shipment-management` | No (diagram) | Structure | Not started |
| Shipment | Automatic formation on `Eligible` | — | `shipments/formation-and-consolidation` | Reuse | Structure | Not started |
| Shipment | Consolidation — same route + required date | Planner | `shipments/formation-and-consolidation` | Reuse | Structure | Not started |
| Shipment | One consolidated shipment → one Stop | Planner | `shipments/the-physical-visit` | Yes | Structure | Not started |
| Shipment | Demand traceability inside a shared Stop | Planner | `shipments/the-physical-visit` | Yes | Structure | Not started |
| Shipment | `Unplan` | Planner | `shipments/shipment-management` | Yes | Structure | **Data needed** |
| Shipment | `Cancel` | Planner | `shipments/shipment-management` | No | Structure | **Data needed** |
| Shipment | `Refresh Readiness`, `Stage Everything` | Warehouse | `readiness/warehouse-readiness` | Reuse | Structure | Not started |

---

## 7 · Warehouse readiness

| Area | Screen / Object | Role | Manual Chapter | Screenshot | Tested on b2b | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Readiness | `Operations → Warehouse Readiness` list | Warehouse | `readiness/warehouse-readiness` | Reuse | Structure | Not started |
| Readiness | Readiness form — computed, override, evidence | Warehouse | `readiness/warehouse-readiness` | Reuse | Structure | Not started |
| Readiness | `Ready` | Warehouse | `readiness/warehouse-readiness` | Reuse | Structure | Not started |
| Readiness | `Conditionally Ready` | Warehouse | `readiness/warehouse-readiness` | Reuse | Structure | Not started |
| Readiness | `Partially Ready` | Warehouse | `readiness/warehouse-readiness` | Yes | Structure | **Data needed** |
| Readiness | `Not Ready` | Warehouse | `readiness/warehouse-readiness` | Yes | Structure | **Data needed** |
| Readiness | `Blocked` | Warehouse | `readiness/warehouse-readiness` | Yes | Structure | **Data needed** |
| Readiness | Staged percentage and the known display defect | Warehouse | `readiness/warehouse-readiness` | Yes | Structure | Not started |
| Readiness | `Apply Override` / `Clear Override` + reason | Warehouse | `readiness/warehouse-readiness` | Yes | Structure | **Data needed** |
| Readiness | `is_plannable` | Planner | `readiness/warehouse-readiness` | No | Structure | Not started |

---

## 8 · Planning

| Area | Screen / Object | Role | Manual Chapter | Screenshot | Tested on b2b | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Planning | Inputs and prerequisites | Planner | `planning/planning-overview` | No | Structure | Not started |
| Planning | Objective profile `SCOP-STD`, nine levels | Planner | `planning/planning-overview` | Yes | Structure | Not started |
| Planning | Deterministic baseline provider vs manual provider | Planner | `planning/planning-overview` | No | Structure | Not started |
| Planning | `Planning → Generate a Plan` wizard | Planner | `planning/generate-a-plan` | Reuse | Structure | Not started |
| Planning | Wizard lines (`scop.planning.wizard.line`) | Planner | `planning/generate-a-plan` | Yes | Structure | Not started |
| Planning | `Planning → Planning Runs` list and form | Planner | `planning/planning-runs` | Reuse | Structure | Not started |
| Planning | Run 7 states, request/response evidence | Planner | `planning/planning-runs` | Yes | Structure | Not started |
| Planning | `Replay`, `Retry`, `Cancel` | Planner | `planning/planning-runs` | Yes | Structure | **Data needed** |
| Planning | Failed run (`error_class`, `error_message`) | Planner | `planning/planning-runs` | Yes | Structure | **Data needed** |
| Planning | `Planning → Daily Plans` list | Planner | `planning/the-daily-plan` | Reuse | Structure | Not started |
| Planning | Daily plan form, recommended trips | Planner | `planning/the-daily-plan` | Reuse | Structure | Not started |
| Planning | 6 plan states | Planner | `planning/the-daily-plan` | No (diagram) | Structure | Not started |
| Planning | `Submit` → Under Review | Planner | `planning/the-daily-plan` | Reuse | Structure | Not started |
| Planning | `Modify` + override reason | Planner | `planning/the-daily-plan` | Yes | Structure | **Data needed** |
| Planning | `Reject` + reject reason, then `Replan` | Planner | `planning/the-daily-plan` | Yes | Structure | **Data needed** |
| Planning | `Approve` (gate `plan_approve`, BR-PLN-001) | Ops Manager | `planning/plan-governance` | Reuse | Structure | Not started |
| Planning | Self-approval refusal, incl. Administrator | Ops Manager | `planning/plan-governance` | Reuse | Structure | Not started |
| Planning | `Release` (gate `plan_release`, BR-PLN-002) | Ops Manager | `planning/plan-governance` | Reuse | Structure | Not started |
| Planning | Frozen approved plan, `approved_by` / `approved_at` | Ops Manager | `planning/plan-governance` | Yes | Structure | Not started |
| Planning | `Planning → Unplanned Demand` list | Planner | `planning/unplanned-demand` | Reuse | Structure | **Data needed** |
| Planning | 12 unplanned reasons + next action | Planner | `planning/unplanned-demand` | Yes | Structure | **Data needed** |
| Planning | `Operations → Resource Assignments` | Planner | `execution/trips` | Yes | Structure | Not started |
| Planning | `Governance → Rule Exemptions` | Planner | `concepts/the-governance-model` | Yes | Structure | **Data needed** |

---

## 9 · Execution

| Area | Screen / Object | Role | Manual Chapter | Screenshot | Tested on b2b | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Trip | `Operations → Trips` list, kanban, calendar | Planner | `execution/trips` | Reuse | Structure | Not started |
| Trip | Trip form — vehicle, driver, stops, capacity | Planner | `execution/trips` | Reuse | Structure | Not started |
| Trip | 13 trip states | Planner | `execution/trip-lifecycle` | No (diagram) | Structure | Not started |
| Trip | Lifecycle propagation from plan release | Planner | `execution/trip-lifecycle` | Yes | Structure | Not started |
| Trip | `Estimate Cost`, cost rate version | Planner | `execution/trips` | Yes | Structure | Not started |
| Trip | Capacity feasibility, `BR-RTE-001` | Planner | `execution/trips` | Yes | Structure | **Data needed** |
| Trip | Utilisation warning `BR-RTE-002` | Planner | `execution/trips` | Yes | Structure | **Data needed** |
| Trip | `Raise Exception` / `Resume` | Planner | `exceptions/exception-management` | Yes | Structure | **Data needed** |
| Trip | `Cancel` | Planner | `execution/trip-lifecycle` | No | Structure | **Data needed** |
| Trip | `Technical → Capacity Snapshots` | Administrator | `execution/trips` | Yes | Structure | **Data needed** |
| Loading | `Operations → Loading Tasks` | Warehouse | `execution/loading-operations` | Reuse | Structure | Not started |
| Loading | One task per shipment on the trip | Warehouse | `execution/loading-operations` | Yes | Structure | Not started |
| Loading | `Start` / `Done` / `Cancel`, durations | Warehouse | `execution/loading-operations` | Reuse | Structure | Not started |
| Loading | Departure gate — open task holds the vehicle | Warehouse | `execution/loading-operations` | Yes | Structure | Not started |
| Loading | `Operations → Loads`, 8 load states | Warehouse | `execution/loading-operations` | Yes | Structure | **Data needed** |
| Stop | `Operations → Stops` list and form | Planner | `execution/stops` | Yes | Structure | Not started |
| Stop | `scop.trip.stop.line` | Planner | `execution/stops` | Yes | Structure | Not started |
| Stop | 6 stop statuses + 5 outcomes | Planner | `execution/stops` | No (diagram) | Structure | Not started |
| Stop | Planned vs actual arrival, service, departure | Planner | `execution/stops` | Yes | Structure | Not started |
| Driver | `My Work → My Trips` (kanban + form) | Driver | `execution/driver-delivery` | Reuse | Structure | Not started |
| Driver | `My Work → My Stops` (kanban + form) | Driver | `execution/driver-delivery` | Reuse | Structure | Not started |
| Driver | `Depart` | Driver | `execution/driver-delivery` | Reuse | Structure | Not started |
| Driver | `I Have Arrived` | Driver | `execution/driver-delivery` | Reuse | Structure | Not started |
| Driver | `Start Unloading` | Driver | `execution/driver-delivery` | Reuse | Structure | Not started |
| Driver | `Delivered` (gate `stop_complete`) | Driver | `execution/driver-delivery` | Reuse | Structure | Not started |
| Driver | `Could Not Deliver` + `BR-EXE-001` | Driver | `execution/failed-delivery` | Reuse | Structure | Not started |
| Driver | `Skip` + reason | Driver | `execution/stops` | Yes | Structure | **Data needed** |
| Driver | Goods and actual quantities panel | Driver | `execution/odoo-delivery-validation` | Reuse | Structure | Not started |
| Driver | What a Driver cannot reach | Driver | `execution/driver-security-model` | Yes | Structure | Not started |
| POD | Signed By, signature | Driver | `execution/proof-of-delivery` | Reuse | Structure | Not started |
| POD | Photographs | Driver | `execution/proof-of-delivery` | Yes | Structure | Not started |
| POD | Coordinates, capture-failure reason, HTTPS | Driver | `execution/proof-of-delivery` | Yes | Structure | Not started |
| Odoo | Validate the Odoo transfer | Warehouse | `execution/odoo-delivery-validation` | Reuse | Structure | Not started |
| Odoo | SCOP reads back actual quantities | — | `execution/odoo-delivery-validation` | Reuse | Structure | Not started |
| Odoo | Backorder created by Odoo | Warehouse | `execution/partial-deliveries-and-backorders` | Yes | Structure | **Data needed** |
| Odoo | Demand A completed + Demand B partial, one visit | Planner | `execution/partial-deliveries-and-backorders` | Yes | Structure | **Data needed** |
| Odoo | "No quantity yet" vs genuine failure | Driver | `execution/failed-delivery` | Reuse | Structure | Not started |
| Trip end | `Complete` → completed vs partially completed | Planner | `execution/trip-lifecycle` | Yes | Structure | Not started |
| Trip end | `Technical → Execution Events` | Administrator | `concepts/identity-and-traceability` | Yes | Structure | **Data needed** |

---

## 10 · Exceptions

| Area | Screen / Object | Role | Manual Chapter | Screenshot | Tested on b2b | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Exception | `Operations → Exceptions` list (default filter: open) | All | `exceptions/exception-management` | Yes | Structure | **Data needed** |
| Exception | Exception form | All | `exceptions/exception-management` | Yes | Structure | **Data needed** |
| Exception | 10 states | All | `exceptions/exception-management` | No (diagram) | Structure | Not started |
| Exception | `Classify` → category + severity | Ops Manager | `exceptions/exception-management` | Yes | Structure | **Data needed** |
| Exception | `Assign` → owner, mail activity | Ops Manager | `exceptions/exception-management` | Yes | Structure | **Data needed** |
| Exception | `Investigate` → `Define Resolution` → `Start` → `Resolve` → `Close` | Ops Manager | `exceptions/exception-management` | Yes | Structure | **Data needed** |
| Exception | `scop.resolution.action` | Ops Manager | `exceptions/exception-management` | Yes | Structure | **Data needed** |
| Exception | `Escalate`, SLA breach cron, escalation count | Ops Manager | `exceptions/exception-management` | Yes | Structure | **Data needed** |
| Exception | 12 seeded categories, severity, SLA hours | Administrator | `exceptions/exception-management` | Yes | Structure | Not started |
| Exception | `Governance → Exception Categories` | Administrator | `exceptions/exception-management` | Yes | Structure | Not started |
| Exception | 11 root-cause reason codes | Ops Manager | `reference/reason-codes` | No | Structure | Not started |

---

## 11 · Configuration

| Area | Screen / Object | Role | Manual Chapter | Screenshot | Tested on b2b | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Nodes | `Master Data → Locations` | Planner, Admin | `configuration/planning-nodes` | Yes | Structure | Not started |
| Nodes | Location form — type, coordinates, timezone | Administrator | `configuration/planning-nodes` | Yes | Structure | Not started |
| Nodes | Opening windows (`scop.location.window`) | Administrator | `configuration/planning-nodes` | Yes | Structure | Not started |
| Nodes | Service duration, mode, dock count | Administrator | `configuration/planning-nodes` | Yes | Structure | Not started |
| Nodes | Access constraints (`scop.location.constraint`) | Administrator | `configuration/planning-nodes` | Yes | Structure | **Data needed** |
| Nodes | `Master Data → Import Locations` wizard | Administrator | `configuration/planning-nodes` | Yes | Structure | **Data needed** |
| Nodes | `Technical → Travel Matrix` | Administrator | `configuration/planning-nodes` | Yes | Structure | Not started |
| Nodes | Missing node → `DemandGenerationSkipped` | Administrator | `configuration/missing-node-diagnostics` | Yes | Structure | **Data needed** |
| Pilot | `Technical → Pilot Scope` | Administrator | `configuration/pilot-scope` | Yes | Structure | Not started |
| Pilot | Operation types in scope, go-live, `Apply` | Administrator | `configuration/pilot-scope` | Yes | Structure | Not started |
| Pilot | `Technical → Releases` | Administrator | `configuration/pilot-scope` | Yes | Structure | **Data needed** |
| Pilot | Onboarding `3 · Pilot Readiness` | Management | `configuration/onboarding-and-migration` | Yes | Structure | **Data needed** |
| Fleet | Vehicle capacity, weight, volume | Planner | `configuration/fleet-and-vehicles` | Yes | Structure | Not started |
| Fleet | `Master Data → Vehicle Availability` | Planner | `configuration/fleet-and-vehicles` | Yes | Structure | Not started |
| Fleet | Cost rates as planning estimates | Planner | `configuration/fleet-and-vehicles` | Yes | Structure | Not started |
| Fleet | `scop.vehicle.compartment` | Planner | `configuration/fleet-and-vehicles` | No | Structure | **Data needed** |
| Fleet | `scop.vehicle.restriction` | Planner | `configuration/fleet-and-vehicles` | No | Structure | **Data needed** |
| Fleet | Double booking / assignment states | Planner | `configuration/fleet-and-vehicles` | Yes | Structure | Not started |
| Drivers | Driver ↔ employee ↔ user link | Administrator | `configuration/drivers` | Yes | Structure | Not started |
| Drivers | `Master Data → Driver Availability` | Planner | `configuration/drivers` | Yes | Structure | Not started |
| Drivers | `Master Data → Driver Qualifications` | Planner | `configuration/drivers` | Yes | Structure | Not started |
| Drivers | `Master Data → Qualification Types` | Administrator | `configuration/drivers` | No | Structure | Not started |
| Drivers | Trip with no driver | Planner | `configuration/drivers` | Yes | Structure | Not started |
| Commit. | `Master Data → Service Commitments` | Customer Service | `configuration/service-commitments` | Yes | Structure | Not started |
| Commit. | Capture-once, date vs window, no commitment | Customer Service | `configuration/service-commitments` | Yes | Structure | Not started |
| Commit. | `Master Data → Supplier Commitments` | Procurement | `configuration/service-commitments` | Yes | Structure | **Data needed** |
| Routes | `Master Data → Routes`, `scop.route.stop` | Planner | `configuration/routes-and-stop-activities` | Yes | Structure | **Data needed** |
| Routes | `Master Data → Stop Activities` | Planner | `configuration/routes-and-stop-activities` | Yes | Structure | Not started |
| Cat. | `Master Data → Capacity Profiles` + dimensions | Planner | `configuration/catalogues` | Yes | Structure | Not started |
| Cat. | `Master Data → Handling Profiles` | Planner | `configuration/catalogues` | Yes | Structure | **Data needed** |
| Cat. | `Master Data → Compatibility Groups` | Planner | `configuration/catalogues` | Yes | Structure | **Data needed** |
| Cat. | `Master Data → Shelf-Life Profiles` | Planner | `configuration/catalogues` | Yes | Structure | **Data needed** |
| Gov. | `Governance → Business Rules` | All | `reference/business-rules` | Yes | Structure | Not started |
| Gov. | `Governance → Rule Evaluations` | All | `concepts/the-governance-model` | Yes | Structure | Not started |
| Gov. | `Governance → Reason Codes` | All | `reference/reason-codes` | Yes | Structure | Not started |
| Gov. | `Governance → Objective Profiles` | Planner | `planning/planning-overview` | Yes | Structure | Not started |
| Gov. | `Governance → Approval Authorities` | Administrator | `concepts/the-governance-model` | Yes | Structure | Not started |
| Gov. | `Governance → Feature Flags` | Administrator | `roles/administrator` | Yes | Structure | **Data needed** |
| Tech. | `Technical → Domain Events` | Administrator | `concepts/identity-and-traceability` | Yes | Structure | Not started |
| Tech. | `Technical → Sequence Counters` | Administrator | `roles/administrator` | No | Structure | Not started |

---

## 12 · Reporting

Every report is documented to the §38 standard: purpose, audience, navigate to, filters,
dimensions, measures, how to read it, example, common interpretation mistakes.

| Area | Screen / Object | Role | Manual Chapter | Screenshot | Tested on b2b | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Report | Which report answers which question | All | `reporting/reporting-overview` | No | Structure | Not started |
| Report | Plan Coverage | Planner | `reporting/plan-coverage` | Reuse | Structure | Not started |
| Report | Unplanned Demand (pivot + graph) | Planner | `reporting/unplanned-demand-report` | Reuse | Structure | **Data needed** |
| Report | Vehicle Utilization | Planner | `reporting/vehicle-utilization` | Yes | Structure | **Data needed** |
| Report | OTIF | All | `reporting/otif` | Reuse | Structure | Not started |
| Report | Trip Planned vs Actual | All | `reporting/trip-planned-vs-actual` | Yes | Structure | Not started |
| Report | Exception Ageing | All | `reporting/exception-ageing` | Reuse | Structure | **Data needed** |
| Report | Decision Quality | Planner | `reporting/decision-quality` | Reuse | Structure | Not started |
| Report | Operation Timeline (wizard → results) | All | `reporting/operation-timeline` | Reuse | Structure | Not started |
| Report | Failed Projections | Administrator | `reporting/data-quality-reports` | Yes | Structure | Not started |
| Report | Orphan Moves | Administrator | `reporting/data-quality-reports` | Yes | Structure | Not started |
| Report | Ownership Data Quality | All | `reporting/data-quality-reports` | Yes | Structure | Not started |
| Report | SCOP Dashboard | Planner, Mgmt | `reporting/the-dashboard` | Yes | Structure | Not started |

---

## 13 · Reference and troubleshooting

| Area | Screen / Object | Role | Manual Chapter | Screenshot | Tested on b2b | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Rules | `BR-INV-002` | Planner | `reference/business-rules` | Reuse | Structure | Not started |
| Rules | `BR-PLN-001` | Ops Manager | `reference/business-rules` | Reuse | Structure | Not started |
| Rules | `BR-PLN-002` | Ops Manager | `reference/business-rules` | Yes | Structure | **Data needed** |
| Rules | `BR-RTE-001` | Planner | `reference/business-rules` | Yes | Structure | **Data needed** |
| Rules | `BR-RTE-002` (warning) | Planner | `reference/business-rules` | Yes | Structure | **Data needed** |
| Rules | `BR-EXE-001` | Driver | `reference/business-rules` | Reuse | Structure | Not started |
| Lifecycle | 12 governed machines as Mermaid diagrams | All | `reference/lifecycle-reference` | No | Structure | Not started |
| Lifecycle | Loading task status (not governed) | Warehouse | `reference/lifecycle-reference` | No | Structure | Not started |
| Lifecycle | Readiness (computed, not governed) | Warehouse | `reference/lifecycle-reference` | No | Structure | Not started |
| Reference | 51 reason codes by category | All | `reference/reason-codes` | No | Structure | Not started |
| Reference | Every state label, one line each | All | `reference/status-glossary` | No | Structure | Not started |
| Trouble | Symptom index (15+ symptoms) | All | `troubleshooting/troubleshooting-index` | No | Structure | Not started |
| Trouble | No demand created | Customer Service | `troubleshooting/demand-problems` | Yes | Structure | Not started |
| Trouble | Demand cannot validate | Planner | `troubleshooting/demand-problems` | Reuse | Structure | Not started |
| Trouble | Demand cannot become eligible | Planner | `troubleshooting/demand-problems` | Yes | Structure | Not started |
| Trouble | Demand does not complete | Planner | `troubleshooting/demand-problems` | Yes | Structure | Not started |
| Trouble | No shipment formed / shipment not ready | Warehouse | `troubleshooting/readiness-and-shipment-problems` | Yes | Structure | Not started |
| Trouble | No feasible vehicle | Planner | `troubleshooting/planning-problems` | Yes | Structure | **Data needed** |
| Trouble | Plan cannot submit / approve | Ops Manager | `troubleshooting/planning-problems` | Reuse | Structure | Not started |
| Trouble | Loading tasks missing | Warehouse | `troubleshooting/execution-problems` | Yes | Structure | Not started |
| Trouble | Trip cannot depart | Planner | `troubleshooting/execution-problems` | Yes | Structure | Not started |
| Trouble | Driver sees no trips | Driver | `troubleshooting/execution-problems` | Yes | Structure | Not started |
| Trouble | Stop cannot complete / actual qty is zero | Driver | `troubleshooting/execution-problems` | Reuse | Structure | Not started |
| Trouble | OTIF missing a delivery | Management | `troubleshooting/reporting-problems` | Yes | Structure | Not started |

---

## 14 · Scenarios

| Area | Scenario | Roles | Manual Chapter | Screenshot | Tested on b2b | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Scenario | Standard full delivery | CS → Planner → Ops → WH → Driver | `scenarios/standard-full-delivery` | Reuse | Structure | Not started |
| Scenario | Two orders consolidated into one visit | Planner | `scenarios/two-orders-one-visit` | Yes | Structure | Not started |
| Scenario | Partial delivery with backorder | Driver, Warehouse | `scenarios/partial-delivery-with-backorder` | Yes | Structure | **Data needed** |
| Scenario | Failed delivery | Driver | `scenarios/failed-delivery-scenario` | Reuse | Structure | Not started |
| Scenario | Unresolved ownership | Planner | `scenarios/unresolved-ownership-scenario` | Yes | Structure | **Data needed** |
| Scenario | Demand with missing planning node | Administrator | `scenarios/missing-planning-node-scenario` | Yes | Structure | **Data needed** |
| Scenario | No feasible vehicle | Planner | `scenarios/no-feasible-vehicle-scenario` | Yes | Structure | **Data needed** |
| Scenario | Plan modification before approval | Planner, Ops | `scenarios/plan-modification-before-approval` | Yes | Structure | **Data needed** |
| Scenario | Loading delay | Warehouse | `scenarios/loading-delay-scenario` | Yes | Structure | **Data needed** |

---

## Coverage summary

| Dimension | Total in Release 1 | Covered by the matrix | Gap |
| --- | --- | --- | --- |
| Menu entries | 69 | 69 | **0** |
| Window actions | 58 | 58 | **0** |
| Client actions | 1 | 1 | **0** |
| Wizards | 6 | 6 | **0** |
| User-facing models (bands 1–2) | 49 | 49 | **0** |
| Governed lifecycles | 12 | 12 | **0** |
| Non-governed status fields | 2 | 2 | **0** |
| Business rules | 6 | 6 | **0** |
| Reports | 11 + dashboard | 12 | **0** |
| SCOP roles | 10 | 10 | **1 open question — Finance User** |
| Reason-code categories | 6 | 6 | **0** |
| Exception categories | 12 | 12 | **0** |

**Deliberately excluded, with reason:**

| Excluded | Reason |
| --- | --- |
| `scop_locations_portal_branch` | Uninstalled on `b2b`; not part of Release 1 |
| `scop_report_kdn` | Deliberately not installable pending a commercial licence decision |
| `scop.mixin.*`, `scop.service.*`, `scop.rule.engine`, `scop.planning.builder` | Internal implementation; no user-facing screen |
| `scop.plan.approval`, `scop.shipment.constraint` | Written by the system; read through their parent record |
| Generic Odoo behaviour | Documented only where it materially changes SCOP usage (§9 of the brief) |

---

## What was built on `b2b`, and what it proved

All of it created through the real ORM, so every record went through the real state
machines and the real business rules.

| Built | Records | Proved |
| --- | --- | --- |
| Manual demo customer and three branches | 4 partners | — |
| Planning nodes for Branch A and B, with windows | 2 nodes, 10 windows | Branch C left unmapped **on purpose** |
| Small-capacity vehicle profile and van | 1 profile, 1 vehicle | Lets capacity refusals be produced honestly |
| Handling, compatibility and shelf-life catalogues | 5 records | Membership is declared from the handling-profile side |
| Vehicle compartment and restriction, node access constraints | 4 records | — |
| Named route over both branches | 1 route, 2 stops | — |
| Release record, supplier commitment, feature flag | 3 records | — |
| Four delivery transfers | 4 pickings | One to unmapped Branch C |
| Demands | 4 | Three generated; **one correctly skipped** |
| Shipments | 2 | **Consolidation and separation both demonstrated** |
| Planning runs and plans | 2 runs, 2 plans | Both capacity reasons produced |
| Exceptions | 6 | Six different lifecycle states, including escalated and closed |

### Rules exercised, and their verbatim refusals

| Rule | Reproduced | Message |
| --- | --- | --- |
| `BR-INV-002` | Yes | Named the rule, its version, the missing field and **every product at fault** |
| `BR-PLN-001` | Yes, **against the Administrator** | *"…was created by you, so you may not approve it. Separation of duties is the point of the approval step."* |
| Exception guard | Yes | *"…needs at least one resolution action before its resolution can be defined."* |
| `DemandGenerationSkipped` | Yes | Named the unmapped location, the partner, the transfer and **which endpoint failed** |

### Four documentation claims corrected as a result

| Claim as written | Verified truth |
| --- | --- |
| An over-capacity load gives *No feasible vehicle* | It gives **Capacity shortage**. *No feasible vehicle* means no vehicle in the run declares a capacity profile |
| Classify starts the SLA clock | The clock starts at **detection**. A category is required to create an exception, and the deadline follows immediately |
| Resolution actions carry a free description | They carry one of **eleven named operational types** |
| A compatibility group lists its handling profiles | The group carries a **separation level**; membership is declared from the profile side |

Two field labels were also corrected: the demands list shows **Requesting Party** and
**Destination Location**.

---

## Deferred work — now completed

The blocking dependency recorded in revision 2 (no identity switching) was resolved: live
sessions now exist for all five operational logins, so every row below was executed against
`b2b` rather than left open.

| Previously blocked | Outcome |
| --- | --- |
| Validate Branch A's transfers, then complete that stop | **Done.** `QSD/OUT/00013` and `QSD/OUT/00015` validated in full; stop closed; `TRP-2026-000006` closed itself |
| Partial delivery with a backorder | **Done.** `QSD/OUT/00010` validated 6 of 10; Odoo raised backorder `QSD/OUT/00017`; SCOP read 6.0 back on its own |
| Mixed outcomes at one shared stop | **Done.** `DMD-2026-000011` **completed**, `DMD-2026-000010` left partial, from the same arrival |
| `BR-EXE-001` on a **partial**, not only a failure | **Done.** Refused verbatim, then accepted once a reason was set |
| Stop status against stop outcome | **Done.** Status **completed**, outcome **partially_completed** — derived, not chosen |
| **Blocked / Partially Ready / Not Ready** readiness states | **Done.** All five reproduced with their verbatim evidence, and captured — see below |

### What the run confirmed

| Documented claim | Verified on `b2b` |
| --- | --- |
| SCOP reads actual quantities with nobody pressing anything | Stop lines went 0.00 → 6/4/3 the moment the transfers were validated |
| A stop cannot close before validation | *"Stop 1 has no delivered quantity recorded yet…"* — the message offers both paths |
| `BR-EXE-001` covers partials | *"Stop 1 did not deliver everything planned, so it needs a reason before it can be closed."* |
| A shared stop does not merge the demands | Two demands, one arrival, two different final states |
| One demand may be fulfilled by several transfers | `DMD-2026-000010` shows **2** transfers after the backorder |
| The chain closes itself | Stop → trip → shipment → demand → assignments, with no state pushed by hand |

---

## Defect register

Recorded, not written around, per the brief.

| # | Severity | Summary |
| --- | --- | --- |
| 1 | Low | **Compute Capacity** is offered to users who cannot use it — creating `scop.trip.capacity.snapshot` is SCOP/Administrator-only |
| 2 | Cosmetic | `Capacity Feasible` reads `false` when capacity has merely never been computed. Distinguish by `First Breach Sequence = 0` with zero peaks |
| 3 | High | Third-party ACL `stock_return_approval.user` grants **every internal user** RWCU on `stock.picking`. A Driver can list 21,181 transfer headers with customer names and dates. **Not SCOP's** — SCOP grants the Driver group nothing there, and `stock.move` stays protected. The fix is narrowing that module's ACL |
| 4 | **Blocker** | **Every SCOP projection triggered by the Warehouse role fails on an access error** — **FIXED**, see below |
| 5 | Medium | The specification's *"follow-up demand created"* side effect is not implemented. For a partial delivery the Odoo backorder carries the remainder on the **same** demand, which works; for a **total failure** nothing carries it |

### Defect 4 — the Warehouse role cannot drive the demand it is told to drive

> **Fixed on 22 August 2026.** Both projections now run under `sudo()`, in commit
> `ca56445` on branch `fix/warehouse-projection-access` of the addon repository. Verified by
> five new tests and live on `b2b` as `qs.warehouse`. Full record:
> [defect-4-fix.md](./defect-4-fix.md). The manual has been updated to describe the corrected
> behaviour.

**Severity Blocker.** It breaks the manual's central instruction: *"the warehouse validates
the transfer in Odoo, and SCOP reads the result."*

**Expected.** Validating a transfer runs `stock.picking._scop_after_done`, which calls
`demand.action_record_execution()` and advances the demand. Creating a transfer runs
`_scop_generate_demand`.

**Actual.** Both fail whenever the acting user is the **Warehouse** role.

| Model | Warehouse rights |
| --- | --- |
| `stock.picking` | read · write · create |
| `scop.shipment`, `scop.shipment.line` | read · write |
| `scop.warehouse.readiness`, `scop.loading.task` | read · write · create |
| **`scop.demand`** | **read only — no write, no create** |

`_scop_after_done` and `_scop_generate_demand` touch `scop.demand` **without `sudo()`**, unlike
`scop.trip._scop_cascade_complete`, which does use it. So the projection raises, the
non-blocking guard swallows it into `scop.event.log`, and the transfer saves anyway.

**Verbatim, from `Reporting → Failed Projections`:**

```text
PickingDone      failed   stock.picking,21300
You are not allowed to modify 'SCOP Demand' (scop.demand) records.

DemandGenerated  failed   stock.picking,21305
You are not allowed to create 'SCOP Demand' (scop.demand) records.
```

**Scale on `b2b`:** **13 failed against 13 processed** — half the event log. Ten `PickingDone`
and three `DemandGenerated`.

**Two visible consequences**

| What the user sees | Why |
| --- | --- |
| A transfer the **warehouse** creates produces **no demand at all** | `DemandGenerated` failed. There is no `DemandGenerationSkipped` row either, so it does not look like a missing node |
| A validated transfer leaves its demand at **In Execution** | `PickingDone` failed. Quantities *do* appear, because `qty_fulfilled` is computed from the moves — only the **state** is stuck |

That second one is the trap: the demand shows the right numbers, so nothing looks wrong.

**Proof the logic itself is sound.** Calling the same method as a role that *can* write
`scop.demand` moved both demands immediately and correctly:

| Demand | Fulfilled | Before | After `action_record_execution` |
| --- | --- | --- | --- |
| `DMD-2026-000010` | 6 of 10 | `in_execution` | **`partially_completed`** |
| `DMD-2026-000013` | 0 of 5 | `in_execution` | **`failed`** |

So this is an access-rights defect, not a state-machine one.

**Reproduction**

| # | Step | Result |
| --- | --- | --- |
| 1 | As `qs.warehouse`, create a delivery transfer and confirm it | No demand. A **failed** `DemandGenerated` row |
| 2 | As `qs.warehouse`, validate a transfer behind an existing demand | Quantities read back; demand stays `in_execution`. A **failed** `PickingDone` row |
| 3 | As `qs.planner`, call `action_record_execution` on that demand | It advances correctly |

**Fix.** Run both projections under `sudo()`, as `_scop_cascade_complete` already does — the
warehouse is not being granted authority over demand, the *system* is doing the projection.

**Recovery today.** `Reporting → Failed Projections` → **Retry**, which needs
**SCOP/Administrator**. Nobody below that can clear the queue.

**Affected chapters** Odoo Delivery Validation · Demand Completion · Warehouse · Partial
Deliveries and Backorders · Failed Delivery · Data Quality Reports · Demand Problems.

### Defect 5 — no follow-up demand is created

**Expected**, from `scop_base/data/state_machines.json`: *"follow-up demand created"*, on the
trip's `in_progress → partially_completed` and on the demand's `in_execution → partially_completed`
and `→ failed`.

**Actual.** Nothing anywhere writes `parent_demand_id`. `scop.demand` has **0** records with
`is_follow_up` set. The field, `root_demand_id`, `is_follow_up` and the **Follow-Up and
Returns** tab all exist and are only ever read.

**But the partial case does not need one, and works.** The code treats the Odoo **backorder**
as the continuation of the *same* demand — its own comment on `partially_completed → completed`
says so. Verified end to end on `b2b`:

| Step | `DMD-2026-000010` |
| --- | --- |
| `QSD/OUT/00010` validated 6 of 10 | `partially_completed`, remaining 4 |
| Odoo raised backorder `QSD/OUT/00017` | — |
| Backorder validated for 4 | **`completed`**, fulfilled 10 of 10, **2 transfers** |

The original demand was never replaced, so OTIF still measures the original promise. That is
the documented design working — with **no child demand involved**.

**The real gap is total failure.** `DMD-2026-000013` is `failed`, terminal, with 5.0 remaining
and its transfer cancelled. There is no backorder, and no follow-up. **Nothing carries that
requirement**, and nobody is told.

**Severity Medium**, not High: the common partial case is covered by the backorder. Only a
complete failure loses the requirement.

**Operational workaround.** After a failed delivery, raise the replacement demand by hand.
`Operations → Demands` filtered to **Failed** with remaining quantity is the list to work.

**Documentation response.** The manual describes the backorder mechanism as what actually
carries a partial remainder, and states plainly that a total failure leaves nothing behind —
rather than promising a follow-up demand that is never created.


---

## Readiness — all five states reproduced

Driven on one clean fixture, `SHP-2026-000010`, so each state is the same shipment under
different evidence. Screenshots `97`–`99`.

| State | How it was produced | Evidence, verbatim | Plannable |
| --- | --- | --- | --- |
| **Ready** | Everything staged | *"Everything is staged."* | **Yes** |
| **Conditionally Ready** | Reserved in full, not staged | *"Stock is reserved for the whole shipment but not yet staged, so it is expected to be available before execution."* | **Yes** |
| **Not Ready** | `do_unreserve` on the transfer | *"Nothing is reserved or staged yet."* | No |
| **Partially Ready** | Reservation cut to 4 of 10 | *"4.0 of 10.0 units are reserved or staged."* | **No** |
| **Blocked** | Shipment-line ownership cleared | *"Ownership is unresolved on 1 line(s): [QS-DEMO-01] QS Demo Chilled Box 10kg."* | No |
| **Blocked** | Every transfer cancelled | *"Every transfer behind this shipment is cancelled."* | No |

Three documented claims confirmed in the process:

| Claim | Confirmed by |
| --- | --- |
| **Partially Ready is eligible but not plannable** | `is_plannable` **false** at 4 of 10, while the demand stayed **Eligible for Planning** |
| **Blocked is tested before any quantity** | The shipment sat at Partially Ready; clearing ownership took it straight to **Blocked**, not to a quantity state |
| **Readiness moves in either direction** | The record's chatter shows Partially Ready → Blocked → Partially Ready as the evidence changed |

One control found that the manual did not describe, now worth knowing:

> Writing an owner onto a shipment line that disagrees with its demand line is refused:
> *"Ownership on shipment line [QS-DEMO-01] QS Demo Chilled Box 10kg does not match the demand
> line it serves."*

Consolidation was also re-confirmed incidentally: three demands created for the same node, type,
company and **required date** formed **one** shipment, `SHP-2026-000009` — even though their
transfers carried three different scheduled dates, because the consolidation key uses the
demand's **required date**, not the picking's schedule.
