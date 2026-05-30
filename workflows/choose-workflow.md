# Choose Workflow

## Goal

Select the correct Signal workflow before planning, editing, reviewing, or upgrading a project.

This chooser is a routing artifact. It does not replace workflow state and does not create a second state machine. After choosing a route, start or resume the relevant workflow state and follow that workflow's playbook.

## Step Model

Each route has a user outcome and agent actions. The user outcome is what should be clear to the human. Agent actions are the operational checks an AI should perform before loading deeper context.

## Quick Decision Tree

1. If the task is to add Signal to a project, first classify the project.
   - New project or mostly empty repo: use `workflows/new-project.md`.
   - Existing codebase or product: use `workflows/migrate-existing-project.md`.
2. If the task is to decide what to build, sequence goals, plan phases, or choose feature candidates, use `workflows/plan-roadmap.md`.
3. If the task is to implement, modify, or remove product behavior, use `workflows/build-feature.md`.
4. If the task is to upgrade an adopted project from one Signal Method version to another, use `workflows/upgrade-methodology.md`.
5. If the task is to review delivered work, detect documentation drift, or answer whether docs still match reality, use the review steps in `workflows/build-feature.md` for now.
6. If the project uses compound engineering or explicitly asks for compound compatibility, keep Signal workflow state authoritative and map external phases through `adapters/compound/phase-mapping.md`.

## Route Matrix

| User request shape | Route | First artifacts to read | Expected output |
| --- | --- | --- | --- |
| "Set up Signal here" in a new project | Greenfield initialization | repo shape, `signal-method.json` if present, existing docs conventions | starter docs, configured docs root, workflow state |
| "Add Signal to this codebase" | Brownfield migration | repo shape, existing docs, code structure, `signal-method.json` if present | current-truth docs, migration state, high-value ADR candidates |
| "What should we build next?" | Roadmap planning | doc index, workflow state, `product-goals.md`, `roadmap.md`, relevant canonical docs | updated goals, sequenced slices, feature candidates |
| "Build/change this feature" | Feature work | doc index, workflow state, relevant canonical docs, feature spec if present | feature spec, implementation, tests, doc reconciliation |
| "Upgrade Signal Method" | Methodology upgrade | `signal-method.json`, installed skill version, migration guides, active workflow state | sequential migrations, validation, updated version metadata |
| "Review this for drift" | Feature review path | workflow state, feature spec, invariants, architecture, data/API/design docs | findings, required doc updates, ADR or compound-memory assessment |
| "Use compound phases" | Compound adapter | `adapters/compound/phase-mapping.md`, active Signal workflow state, relevant canonical docs | mapped phase outputs without competing workflow state |

## Route Details

### Greenfield Initialization

User outcome:
The project has the smallest useful Signal documentation system and one clear next workflow.

Agent actions:
Classify the project as new, choose the docs root, bootstrap starter docs, fill the core canonical docs, populate `doc-index.md`, and close workflow state with the next feature or planning step.

### Brownfield Migration

User outcome:
The existing system is documented as it is today, without turning migration into an exhaustive retrospective.

Agent actions:
Classify the project as existing, choose the docs root, document current system truth, reverse-engineer architecture and data model, capture high-value existing decisions, and start using feature specs for new work.

### Roadmap Planning

User outcome:
Broad direction becomes sequenced work that can be handed to feature workflows.

Agent actions:
Read product goals and relevant current truth, choose the planning horizon and unit, break goals into phases or milestones, identify feature candidates, and promote selected candidates into feature specs.

### Feature Work

User outcome:
The requested behavior is specified, implemented, verified, and reconciled with project memory.

Agent actions:
Start or resume workflow state, establish context, clarify intent, create or update the feature spec, implement and test, review against constraints, reconcile docs, and capture ADRs or compound memory when justified.

### Methodology Upgrade

User outcome:
An adopted project moves from its recorded Signal version to the installed skill's target version without overwriting project-specific truth.

Agent actions:
Read version metadata, identify required sequential migrations, apply migrations in order, validate, update `signal-method.json`, and close workflow state.

### Review And Drift Detection

User outcome:
The user knows whether delivered behavior and project memory still agree.

Agent actions:
Check invariant drift, architecture drift, data model drift, API drift, design drift, ADR need, and compound-memory value. Record findings and required updates in workflow state.

Review is currently a route through feature work and adapter guidance. If review becomes a frequent standalone entry point, add a native review workflow.

### Compound Adapter

User outcome:
Projects that already use compound phases can keep those operating habits without making compound the source of truth.

Agent actions:
Map `plan`, `work`, `review`, and `compound` into Signal workflow state and artifacts. Do not maintain a competing state machine.

## Required Questions

Before choosing a workflow, answer only the questions needed to route safely:

- Is this a new project, existing project, planning request, implementation request, review request, or methodology upgrade?
- Does the project already have `signal-method.json`?
- What docs root is configured or implied?
- Is there active workflow state that should resume instead of starting a new workflow?
- Is an external workflow system being adapted, or is Signal operating alone?

## Exit Criteria

A workflow has been chosen when:

- the route is named
- the first artifacts to read are clear
- workflow state has been started or resumed when the task is meaningful
- the user knows the next Signal workflow step

