# Brownfield Migration Workflow

## Goal

Introduce Signal into an existing codebase without trying to document everything at once.

## Step Model

Each step has a user outcome and agent actions. The user outcome is what should be clear to the human. Agent actions are the operational work an AI should perform.

## Steps

1. Classify the project as brownfield.
   - User outcome: everyone knows this is a migration of current reality, not greenfield design.
   - Agent actions: create or update `workflow-state/current.md` with workflow type, goal, current step, and resume instructions.
2. Choose the canonical docs root.
   - User outcome: the project has one obvious place for Signal docs.
   - Agent actions: create `signal-docs/` unless the project already has an established `docs/` convention worth keeping.
3. Add `doc-index.md`.
   - User outcome: there is a navigation entry point from day one.
   - Agent actions: list only docs that exist or are intentionally being created during migration.
4. Write `system-overview.md`.
   - User outcome: current product purpose, boundaries, and core concepts are clear.
   - Agent actions: document current behavior, not historical intent or aspirational redesign.
5. Reverse-engineer `architecture.md`.
   - User outcome: the current technical structure is understandable without reading the whole codebase.
   - Agent actions: inspect code and runtime behavior, then capture major components, responsibilities, and data flow.
6. Document shared entities in `data-model.md`.
   - User outcome: feature work has a consistent vocabulary.
   - Agent actions: derive entities, relationships, and lifecycle notes from code and persisted data.
7. Capture critical invariants in `system-invariants.md`.
   - User outcome: future changes know which rules must not drift.
   - Agent actions: identify behavioral, data, compatibility, and safety constraints from code, tests, and product behavior.
8. Add optional canonical docs only when needed.
   - User outcome: migration remains shallow and useful.
   - Agent actions: add `api.md` for important interfaces and `design/design-guidelines.md` for UI continuity.
9. Capture the highest-value existing decisions.
   - User outcome: future maintainers can understand non-obvious constraints.
   - Agent actions: create ADRs only for decisions whose rationale still affects future work.
10. Start using feature specs for all new work.
   - User outcome: migration stops being a one-time docs dump and becomes part of delivery.
   - Agent actions: create or update a feature spec for the next meaningful change.
11. Close or pause migration.
   - User outcome: it is clear whether migration is done or what remains.
   - Agent actions: update workflow state with completed steps, remaining gaps, next recommended workflow, and resume instructions.

## Migration Strategy

- Prefer a shallow first pass over exhaustive detail.
- Start with current truth.
- Let historical reasoning live in ADRs, not in canonical docs.
- Use feature work to refine the corpus incrementally.
- Update workflow state at the end of every meaningful step.

## Anti-Patterns

- Writing giant retrospective design documents before real usage.
- Trying to capture every historical decision on day one.
- Using one large “docs dump” instead of retrieval-oriented artifacts.
- Copying the full template structure without deciding which parts are actually needed.
- Leaving migration status trapped in chat history instead of workflow state.
