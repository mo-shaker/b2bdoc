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

**As of this revision, no row has reached `UI`.** Discovery was performed against the live
`b2b` database and the addon source, both authoritative for structure. Interactive
verification and screenshot capture are blocked pending an authenticated browser session —
see *Blocking dependency* at the foot of this file.

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

## Blocking dependency

**39 rows are marked `Data needed`.** Each names a screen or a state for which **no record
currently exists on `b2b`**. These chapters cannot be written from source code without
inventing behaviour, which the brief forbids. Each will be produced as a real scenario
before its chapter is drafted.

**Screenshot capture and interactive UI verification require an authenticated browser
session, which this documentation session does not have.** Entering credentials is outside
what this session may do. Once a browser session at `http://localhost:1701/` is signed in
to `b2b`, every row can move from `Structure` to `UI` and then to `Scenario`.

Authoring of the pages that depend only on structure — concepts, lifecycles, business
rules, reason codes, roles, terminology and the reference chapters — proceeds in the
meantime.
