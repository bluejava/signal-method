# Artifact Taxonomy

This file is the canonical definition of the artifact types used by this methodology.

## Artifact Classes

### Canonical System Model

Current truth about the product and system.

### Decision History

Why important choices were made.

### Compound Knowledge

Reusable lessons captured from doing the work.

### Process And Agent Behavior

How humans and AI should operate within the repository.

## Extension Rules

Create a new file or artifact type only when at least one of these is true:

1. The concern is retrieved independently often enough.
2. The document has become too large or too volatile.
3. The concern has a distinct audience.
4. The concern constrains a different kind of decision.
5. The concern deserves independent ownership.

Avoid splitting purely for taxonomy.

## `system-overview.md`

Purpose:
Define the conceptual model of the system.

When consulted:

- onboarding
- planning new work
- scoping changes
- understanding system boundaries

Must contain:

- product purpose
- core concepts
- major subsystems
- system boundaries

Must not contain:

- detailed implementation
- database schema detail
- API contracts
- UI rules

Split when:
The system contains multiple large domains that deserve separate conceptual models.

## `system-invariants.md`

Purpose:
Define rules that must remain true regardless of implementation details.

When consulted:

- planning risky changes
- reviewing architecture or data changes
- writing tests
- validating refactors and migrations

Must contain:

- behavioral invariants
- data invariants
- compatibility rules
- safety constraints

Must not contain:

- speculative goals
- historical rationale
- routine implementation notes

Split when:
Invariants cluster into clearly separate domains with different retrieval patterns.

## `product-goals.md`

Purpose:
Capture the current big-picture product direction that should guide roadmap and feature planning.

When consulted:

- big-picture planning
- prioritizing roadmap phases
- scoping feature candidates
- deciding whether a request fits the current product direction

Must contain:

- target users or stakeholders
- desired outcomes
- current priorities
- non-goals
- success signals
- planning constraints

Must not contain:

- phase-by-phase sequencing
- detailed feature behavior
- historical rationale
- active workflow progress

Split when:
Multiple product areas have independent planning cycles, audiences, or success criteria.

## `roadmap.md`

Purpose:
Break product goals into sequenced phases, iterations, releases, or milestones and identify feature candidates for build-feature workflows.

When consulted:

- planning multi-feature work
- choosing the next feature to specify
- sequencing releases or iterations
- checking whether feature specs still match the broader plan

Must contain:

- planning horizon and planning unit
- phase goals and outcomes
- feature candidates
- dependencies
- risks and open questions
- links to feature specs

Must not contain:

- detailed feature behavior
- code-level implementation plans
- decision rationale that belongs in ADRs
- chat-style progress logs

Split when:
Independent product areas need separate roadmaps with different audiences, cadences, or release boundaries.

## `architecture.md`

Purpose:
Define the technical structure of the system.

When consulted:

- designing features
- evaluating refactors
- debugging systemic issues
- understanding runtime boundaries

Must contain:

- major components
- responsibilities
- data flow
- runtime environments
- architectural constraints

Must not contain:

- feature-specific behavior
- UX rules
- historical reasoning

Split when:
A subsystem becomes large enough to deserve its own architecture document.

## `data-model.md`

Purpose:
Define the shared entities and relationships of the system.

When consulted:

- designing features
- implementing services
- building APIs
- writing tests

Must contain:

- core entities
- relationships
- lifecycle notes
- invariants tied to data

Must not contain:

- endpoint details
- architecture narrative
- feature walkthroughs

Split when:
The data model spans multiple coherent domains that are often accessed separately.

## `api.md`

Purpose:
Define system interfaces and contracts.

When consulted:

- integration work
- implementing services
- writing clients
- reviewing interface changes

Must contain:

- endpoints
- event contracts
- request and response shapes
- service boundaries

Must not contain:

- internal algorithm detail
- UI behavior
- historical reasoning

Split when:
Multiple independent APIs or interface families exist.

## `design-guidelines.md`

Purpose:
Define product consistency rules for experience, interaction, and presentation.

When consulted:

- UI work
- design reviews
- content reviews
- preserving continuity for human users

Must contain:

- interaction conventions
- layout patterns
- wording guidance
- visual rules

Must not contain:

- system architecture
- feature implementation detail
- code snippets as the primary content

Split when:
Visual, interaction, and content guidance are large enough to justify separate retrieval.

## `feature-specs/`

Purpose:
Define behavior for individual features or feature areas.

When consulted:

- planning a feature
- implementing a feature
- reviewing a feature

Must contain:

- feature behavior
- inputs and outputs
- user or system flows
- constraints
- interactions with system components

Must not contain:

- global architecture rules
- ADR content
- reusable implementation lessons

Split when:
A feature or feature family becomes complex enough to deserve its own folder or supporting files.

## `adr/`

Purpose:
Capture important decisions and their reasoning.

When consulted:

- major refactors
- architectural reviews
- legacy investigation
- “why is it like this?” moments

Must contain:

- context
- decision
- alternatives considered
- consequences

Must not contain:

- long implementation tutorials
- broad feature descriptions
- current truth that belongs in canonical docs

Split when:
No additional split rules are usually needed; one ADR per decision is the correct grain.

## `compound-memory/`

Purpose:
Capture reusable lessons learned during development.

When consulted:

- planning
- code review
- debugging recurring problems
- solving similar implementation challenges

Must contain:

- patterns
- solution notes
- pitfalls
- recurring bugs
- implementation guidance with reuse value

Must not contain:

- canonical system rules
- architecture definitions
- permanent product behavior

Split when:
Patterns naturally group into domains that are retrieved separately.

## `agent-guidance/`

Purpose:
Define how humans and AI tools should work inside the repository.

When consulted:

- configuring tools
- starting AI tasks
- standardizing workflow
- onboarding contributors to the process

Must contain:

- loading strategy
- workflow rules
- contribution expectations
- coding or update conventions specific to the project

Must not contain:

- product architecture
- feature behavior
- historical decision records

Split when:
Different guidance topics become large enough to deserve separate operational documents.

## `workflow-state/`

Purpose:
Record active or paused workflow instances so humans and AI agents can resume work across sessions.

When consulted:

- starting a new AI session
- resuming an initialization or feature workflow
- handing work between agents or humans
- checking what remains before closing a workflow

Must contain:

- workflow type
- current status
- current step
- roadmap alignment or an explicit not-applicable note
- completed steps
- next step
- blockers or open questions
- relevant docs, specs, ADRs, and code areas
- concise resume instructions

Must not contain:

- full feature behavior that belongs in a feature spec
- canonical system truth that belongs in canonical docs
- detailed historical rationale that belongs in ADRs
- reusable implementation lessons that belong in compound memory

Split when:
Keep `workflow-state/current.md` as the stable entry point and workflow-state index. Put detailed progress for every meaningful feature, planning effort, upgrade, or migration in a sibling file under `workflow-state/`, even when only one workflow is active.

The index should contain only enough detail to route a future session:

- purpose and last-updated date
- each active workflow name
- link to each workflow state file
- short status and next step for each workflow
- short roadmap alignment for each active workflow when relevant
- cross-workflow blockers or coordination notes
- recently closed workflows when useful for handoff

Detailed per-workflow status, rationale, feature behavior, and reusable lessons should remain in the linked workflow state file, feature spec, ADR, or compound-memory note.

Sibling workflow state files should include a `Roadmap Alignment` section. The section should explain whether the workflow advances a roadmap phase, implements a feature candidate, enables roadmap work, exposes a roadmap gap, handles maintenance, or is not applicable. If the workflow does not align to an existing roadmap item, the state file should say whether `roadmap.md` needs an update before the workflow closes.

## `signal-method.json`

Purpose:
Record the Signal methodology version adopted by the project and identify the docs root.

When consulted:

- upgrading methodology files
- deciding which migration guides apply
- locating the configured docs root
- validating that a project matches the expected methodology version

Must contain:

- methodology identifier
- methodology version
- docs root
- last migration timestamp or null

Must not contain:

- project feature state
- package manager dependency versions
- implementation framework versions
- migration instructions

Split when:
Usually do not split this file. Keep one manifest at the project root so agents can discover the docs root before reading docs.

## `doc-index.md`

Purpose:
Act as the entry point to the documentation graph.

When consulted:

- onboarding
- starting new work
- locating the right artifact quickly

Must contain:

- document map
- short descriptions
- navigation hints
- retrieval-oriented organization

Must not contain:

- full copies of the docs it indexes
- deep historical discussion

Split when:
Usually it should not split; keep it concise and central.

## `project-dashboard.html`

Purpose:
Provide a generated, human-readable status overview for a Signal-enabled project.

When consulted:

- returning to a project after time away
- onboarding a human author or reviewer
- checking active workflow state and next steps
- finding source docs quickly without reading the full documentation graph

Must contain:

- adopted methodology version and docs root
- workflow index status and next step
- links to active or recent sibling workflow state files
- roadmap alignment and open questions when recorded
- key canonical docs and whether they exist
- feature specs, ADRs, compound-memory notes, and source links
- generated timestamp

Must not contain:

- canonical system truth that is not present in source docs
- manually edited status narrative as the only record of progress
- AI-generated interpretation without source links
- behavior or decisions that belong in feature specs, roadmap docs, or ADRs

Split when:
Usually do not split. If a project needs a richer dashboard, keep `project-dashboard.html` as the entry point and link to more specialized generated views.
