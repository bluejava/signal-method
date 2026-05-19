# Greenfield Initialization Workflow

## Goal

Create the smallest useful Signal documentation and workflow system for a new project without overfitting the taxonomy too early.

## Step Model

Each step has a user outcome and agent actions. The user outcome is what should be clear to the human. Agent actions are the operational work an AI should perform.

## Steps

1. Classify the project as greenfield.
   - User outcome: everyone knows this is a new project setup, not a migration.
   - Agent actions: create or update `workflow-state/current.md` with workflow type, goal, current step, and resume instructions.
2. Choose the canonical docs root.
   - User outcome: the project has one obvious place for Signal docs.
   - Agent actions: default to `signal-docs/` unless the project has a strong existing `docs/` convention.
3. Bootstrap the starter docs.
   - User outcome: the project has the minimum Signal structure.
   - Agent actions: copy `template-project/signal-docs/` into the chosen docs root and remove example content that does not apply.
4. Fill out `system-overview.md`.
   - User outcome: the project purpose, boundaries, and core concepts are clear.
   - Agent actions: capture stable product truth, not speculative implementation detail.
5. Write `system-invariants.md`.
   - User outcome: important rules are explicit before feature work begins.
   - Agent actions: document behavioral, data, compatibility, and safety constraints.
6. Sketch `architecture.md`.
   - User outcome: the technical shape is clear enough to guide the first implementation.
   - Agent actions: describe major components, responsibilities, runtime boundaries, and data flow.
7. Define the first shared entities in `data-model.md`.
   - User outcome: feature work can use consistent entity language.
   - Agent actions: describe entities, relationships, lifecycle notes, and data invariants.
8. Add optional canonical docs only when needed.
   - User outcome: the docs stay lightweight.
   - Agent actions: add `api.md` if interface contracts matter and `design/design-guidelines.md` if product consistency matters.
9. Populate `doc-index.md`.
   - User outcome: humans and agents have a clear entry point.
   - Agent actions: list the active docs and add navigation hints for future sessions.
10. Close initialization.
   - User outcome: the project is ready for its first feature workflow.
   - Agent actions: update workflow state with completed steps, next recommended workflow, and resume instructions.

## Rules

- Keep the initial corpus lightweight.
- Favor stable system truths over implementation detail.
- Do not create specialized artifact types until a durable retrieval need appears.
- Add ADRs as soon as the project makes meaningful architectural choices.
- Update workflow state at the end of every meaningful step.

## Exit Criteria

You are ready to build against the system when:

- a new contributor can understand the product from the docs
- an AI can load the docs and avoid obvious architectural confusion
- the first feature can be specified without inventing new structure under pressure
- `workflow-state/current.md` explains what was completed and what should happen next
