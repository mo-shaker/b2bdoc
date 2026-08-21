# SCOP Full End User Manual — Information Architecture

**Status:** proposed, verified against the running `b2b` application on 21 August 2026.
**Supersedes:** the starting architecture in the project brief, where discovery contradicted it.

The Quick Start Guide is untouched. It remains the fastest onboarding path.
The Full Manual is the authoritative operational reference and links back to it.

---

## Where the files live

| Purpose | Path |
| --- | --- |
| English manual | `docs/user-manual/` |
| Arabic manual | `i18n/ar/docusaurus-plugin-content-docs/current/user-manual/` |
| Screenshots | `static/img/user-manual/` |
| Planning artefacts (this file) | `planning/` — not published to the site |

Sidebar position `2.6`, immediately after the Quick Start Guide at `2.5`.

---

## Changes made to the brief's proposed structure, and why

| Brief proposed | Verified structure | Reason |
| --- | --- | --- |
| Ownership as one chapter | Ownership as two pages inside one chapter | The onboarding wizards (`1 · Consignment Partners`, `2 · Inventory Ownership`) are a separate operational task from resolving one demand's ownership, and belong with the Administrator |
| "Fleet and Vehicles" and "Drivers" as peers of Demand | Both moved under **Configuration** | Neither is an operational flow; both are master data a Planner or Administrator maintains |
| "Planning Nodes", "Pilot Scope", "Missing Node Diagnostics" as three top-level chapters | Grouped under **Configuration** | Same audience, same session of work |
| No chapter for Loads | **Loads folded into Loading Operations** | `scop.load` has a full eight-state lifecycle but no independent menu workflow in Release 1; documenting it as its own chapter would overstate it |
| No chapter for governance vocabularies | **Concepts → The Governance Model** | Business rules, gates, approval authorities, reason codes and overrides are one idea, met repeatedly. Defining it once satisfies the no-duplication rule |
| Reports listed 11 items | Same 11, **grouped 8 + 3** | Failed Projections, Orphan Moves and Ownership Data Quality are Administrator data-quality tools, not operating reports |
| Business rules "BR-INV-002, BR-PLN-001, BR-EXE-001" | **Six rules** | `BR-PLN-002`, `BR-RTE-001` and `BR-RTE-002` are equally active and equally user-facing |

---

## The tree

```text
docs/user-manual/                                  SCOP Full End User Manual
│
├── about/                                         00 · About This Manual
│   ├── introduction.mdx                           What this manual is, who it is for
│   ├── how-to-use-this-manual.mdx                 Page pattern, conventions, path notation
│   ├── scop-and-odoo.mdx                          Division of authority — canonical
│   ├── release-1-scope.mdx                        Available now vs roadmap
│   └── terminology.mdx                            Glossary, EN + AR terms
│
├── getting-started/                               01 · Getting Started
│   ├── accessing-scop.mdx                         Signing in, what you see, what you don't
│   ├── navigating-scop.mdx                        Full menu map by role
│   ├── working-with-lists-and-forms.mdx           List / form / kanban / pivot, status bars
│   └── searching-filtering-grouping.mdx           Search, filters, Group By, favourites, activities
│
├── roles/                                         02 · Roles and Responsibilities
│   ├── roles-overview.mdx                         The ladder, who does what, hand-off map
│   ├── customer-service.mdx
│   ├── warehouse.mdx
│   ├── planner-dispatcher.mdx
│   ├── operations-manager.mdx
│   ├── driver.mdx
│   ├── procurement.mdx
│   ├── management.mdx
│   ├── administrator.mdx
│   └── permissions-reference.mdx                  SCOP groups + required Odoo groups — canonical
│
├── concepts/                                      03 · SCOP Core Concepts
│   ├── the-object-model.mdx                       Every object, one paragraph each, one diagram
│   ├── identity-and-traceability.mdx              Business IDs, correlation reference, domain events
│   └── the-governance-model.mdx                   Rules, gates, authorities, reasons, overrides — canonical
│
├── demand/                                        04 · Demand Management
│   ├── demand-management.mdx                      What a Demand is; list; form; lines — canonical
│   ├── how-demands-are-created.mdx                Automatic generation, pilot scope, source document
│   ├── demand-lifecycle.mdx                       12 states, every action, every gate
│   ├── planning-eligibility.mdx                   Validate → Eligible, what each check reads
│   ├── demand-completion.mdx                      Complete, partial, failed, follow-up, replan
│   └── demand-diagnostics.mdx                     Why a demand is stuck, and where to look
│
├── ownership/                                     05 · Inventory Ownership
│   ├── inventory-ownership.mdx                    Why it matters, five sources, BR-INV-002 — canonical
│   └── correcting-ownership.mdx                   Unresolved ownership, diagnostics, repair
│
├── shipments/                                     06 · Shipment Management
│   ├── shipment-management.mdx                    What a Shipment is; list; form; lines; lifecycle
│   ├── formation-and-consolidation.mdx            One Demand ≠ one Shipment — canonical
│   └── the-physical-visit.mdx                     Stop consolidation, traceability inside a visit
│
├── readiness/                                     07 · Warehouse Readiness
│   └── warehouse-readiness.mdx                    Five states, evidence, staging, override — canonical
│
├── planning/                                      08 · Planning
│   ├── planning-overview.mdx                      Inputs, objectives, what the provider does
│   ├── generate-a-plan.mdx                        The wizard, field by field
│   ├── planning-runs.mdx                          Request, response, replay, failure
│   ├── the-daily-plan.mdx                         Six states, review, modify, submit
│   ├── plan-governance.mdx                        BR-PLN-001, BR-PLN-002, separation of duties — canonical
│   └── unplanned-demand.mdx                       12 reasons and what to do about each
│
├── execution/                                     09 · Execution
│   ├── trips.mdx                                  Trip list, form, capacity, cost estimate
│   ├── trip-lifecycle.mdx                         13 states, propagation from plan
│   ├── loading-operations.mdx                     Loading tasks, loads, the departure gate
│   ├── stops.mdx                                  Stop list, form, lines, sequence, windows
│   ├── driver-delivery.mdx                        My Work, end to end, mobile
│   ├── driver-security-model.mdx                  What a Driver can and cannot reach — canonical
│   ├── proof-of-delivery.mdx                      Signature, photos, coordinates, HTTPS
│   ├── odoo-delivery-validation.mdx               Quantity authority — canonical
│   ├── partial-deliveries-and-backorders.mdx      Short delivery, backorder, mixed outcomes
│   └── failed-delivery.mdx                        Could Not Deliver, BR-EXE-001, no-quantity-yet
│
├── exceptions/                                    10 · Exceptions
│   └── exception-management.mdx                   10 states, 12 categories, SLA, escalation
│
├── configuration/                                 11 · Configuration
│   ├── planning-nodes.mdx                         Locations, coordinates, timezone, windows — canonical
│   ├── missing-node-diagnostics.mdx               DemandGenerationSkipped, resolve and retry
│   ├── pilot-scope.mdx                            Operation types, go-live, apply
│   ├── fleet-and-vehicles.mdx                     Capacity, availability, cost rates, restrictions
│   ├── drivers.mdx                                Employee link, qualifications, availability
│   ├── service-commitments.mdx                    Capture-once, date vs window, no commitment
│   ├── routes-and-stop-activities.mdx             Route master, activity types, service duration
│   ├── catalogues.mdx                             Capacity, handling, compatibility, shelf-life profiles
│   └── onboarding-and-migration.mdx               The three Onboarding wizards, in order
│
├── reporting/                                     12 · Reporting
│   ├── reporting-overview.mdx                     Which report answers which question
│   ├── the-dashboard.mdx
│   ├── plan-coverage.mdx
│   ├── unplanned-demand-report.mdx
│   ├── vehicle-utilization.mdx
│   ├── otif.mdx                                   Canonical OTIF explanation
│   ├── trip-planned-vs-actual.mdx
│   ├── exception-ageing.mdx
│   ├── decision-quality.mdx
│   ├── operation-timeline.mdx                     Canonical investigation tool
│   └── data-quality-reports.mdx                   Failed Projections, Orphan Moves, Ownership
│
├── reference/                                     13 · Reference
│   ├── business-rules.mdx                         All six, user-facing — canonical
│   ├── lifecycle-reference.mdx                    Every governed machine as a diagram
│   ├── reason-codes.mdx                           All 51, by category
│   └── status-glossary.mdx                        Every state label, one line each
│
├── troubleshooting/                               14 · Troubleshooting
│   ├── troubleshooting-index.mdx                  Symptom → page, one table
│   ├── demand-problems.mdx
│   ├── readiness-and-shipment-problems.mdx
│   ├── planning-problems.mdx
│   ├── execution-problems.mdx
│   └── reporting-problems.mdx
│
└── scenarios/                                     15 · Operational Scenarios
    ├── scenarios-overview.mdx
    ├── standard-full-delivery.mdx
    ├── two-orders-one-visit.mdx
    ├── partial-delivery-with-backorder.mdx
    ├── failed-delivery-scenario.mdx
    ├── unresolved-ownership-scenario.mdx
    ├── missing-planning-node-scenario.mdx
    ├── no-feasible-vehicle-scenario.mdx
    ├── plan-modification-before-approval.mdx
    └── loading-delay-scenario.mdx
```

**Total: 16 chapters, 72 English pages, 72 Arabic pages.**

---

## Canonical pages — defined once, referenced everywhere

The no-duplication rule is enforced by naming, in advance, the one page that owns each idea.
Every other page links to it rather than restating it.

| Idea | Canonical page |
| --- | --- |
| Odoo owns the transaction, SCOP owns the operation | `about/scop-and-odoo.mdx` |
| Actual quantities come from the validated Odoo transfer | `execution/odoo-delivery-validation.mdx` |
| What a Demand is | `demand/demand-management.mdx` |
| Ownership and `BR-INV-002` | `ownership/inventory-ownership.mdx` |
| One Demand ≠ one Shipment | `shipments/formation-and-consolidation.mdx` |
| The five readiness states | `readiness/warehouse-readiness.mdx` |
| Separation of duties and `BR-PLN-001` | `planning/plan-governance.mdx` |
| What a Driver can and cannot reach | `execution/driver-security-model.mdx` |
| OTIF definition | `reporting/otif.mdx` |
| Correlation reference and event reconstruction | `concepts/identity-and-traceability.mdx` |
| Business rules, gates, approval authorities, reasons | `concepts/the-governance-model.mdx` |
| Required Odoo groups per role | `roles/permissions-reference.mdx` |
| Planning node requirements | `configuration/planning-nodes.mdx` |

---

## Page pattern

Carried over from the approved Quick Start, which is the documentation quality standard.

For an operational action:

```text
Role
Navigate to
Purpose
Before you start
What you see
What to do
What SCOP does
Expected result
Verify
Business rules
If it does not work
Related actions
Next
```

For a reference or concept page, the heading set is dropped in favour of prose plus tables,
but two questions must still always be answerable: **what do I click now**, and **how do I
know it worked**.

For a report page, §38 of the brief is mandatory and unmodified:

```text
Purpose
Audience
Navigate to
Filters
Dimensions
Measures
How to read it
Example
Common interpretation mistakes
```

---

## Demo data strategy

The Quick Start's story stays as it is. The Full Manual adds a second, richer story so that
consolidation, failure, partial delivery and exceptions can each be shown on a record that
was created for that purpose.

| Identifier | Purpose |
| --- | --- |
| `SCOP Manual Demo Customer` | Parent commercial customer |
| `SCOP Manual Branch A` | Planning node — normal deliveries |
| `SCOP Manual Branch B` | Planning node — second branch, proves branch ≠ same stop |
| `SCOP Manual Branch C` | Deliberately **without** a planning node, to demonstrate `DemandGenerationSkipped` |
| `SCOP Manual Vehicle` | Small capacity, so "no feasible vehicle" can be produced honestly |
| `SCOP Manual Driver` | Driver with an employee and user link |
| `SCOP Manual Consignment Supplier` | Partner flagged for consignment ownership |

The same story is reused across chapters so a reader following the manual straight through
recognises the records.

---

## Phase plan

| Phase | Content | Gate before moving on |
| --- | --- | --- |
| **A** | Discovery | ✅ complete — `planning/full-manual-discovery.md` |
| **B** | Information architecture + coverage matrix | ✅ this file + `full-manual-coverage-matrix.md` |
| **C** | Concepts, demand, ownership, shipments, readiness, planning, execution | English build passes; screenshots captured |
| **D** | Configuration | Every configuration screen exercised on `b2b` |
| **E** | Reporting, business rules, lifecycle reference, troubleshooting | Every report opened with real data |
| **F** | Scenarios | Each scenario run end to end on `b2b` |
| **G** | Arabic | Both builds pass; RTL visually verified |
| **H** | Final QA | Definition of Done, all 30 items |

Build validation runs at the end of every phase, not only at the end.

---

## Build constraint discovered during Phase G

**The Arabic translation cannot be shipped partially.**

Docusaurus resolves relative `.mdx` links by source-file path. In the Arabic build, a page
that *has* been translated **shadows** its English source, so that source path no longer
corresponds to any document in that build. Any not-yet-translated page that links to a
translated one therefore produces a broken link, and `onBrokenLinks: 'throw'` fails the build.

Consequences:

| | |
| --- | --- |
| The English build | Unaffected. Passes with the Arabic partial or absent |
| The Arabic build | Passes only when **every** page in `docs/user-manual/` has a counterpart |
| Practical rule | Translate the whole chapter tree, then build. Do not merge a partial Arabic set to `main` |

This is why the Arabic phase is all-or-nothing rather than incremental, and it is worth
knowing before any future chapter is added: a new English page must be accompanied by its
Arabic counterpart in the same change, or the Arabic build breaks.
