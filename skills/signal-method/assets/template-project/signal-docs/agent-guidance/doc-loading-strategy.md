# Documentation Loading Strategy

Purpose
Tell AI tools and human contributors which docs to load for which kinds of tasks.

Include

- default loading order
- task-specific additions
- guidance for keeping context narrow

Exclude

- product architecture details
- feature behavior as the main content
- historical decision records themselves

Split when
Operational guidance grows into multiple distinct workflows.

## Default Load Order

1. `signal-docs/doc-index.md`
2. `signal-docs/workflow-state/current.md`
3. the sibling workflow state file named by `current.md`, when one applies
4. `signal-docs/system-overview.md`
5. `signal-docs/system-invariants.md`
6. `signal-docs/architecture.md`
7. task-relevant canonical docs
8. relevant ADRs
9. relevant compound-memory notes

## Task-Specific Additions

### UI Work

Also load:

- `signal-docs/design/design-guidelines.md`
- relevant feature specs

### API Or Integration Work

Also load:

- `signal-docs/api.md`
- `signal-docs/data-model.md`

### Architecture Or Refactor Work

Also load:

- relevant ADRs
- `signal-docs/data-model.md`

## Retrieval Rule

Load the minimum set of documents that constrain the task. Do not load broad unrelated context just because it exists.

## Workflow State Rule

At the end of every meaningful workflow step, update the active workflow state with completed work, the current step, the next step, blockers, and resume instructions.

Keep `signal-docs/workflow-state/current.md` as the index. Every meaningful workflow should have a sibling state file; update both the index entry and the detailed state file when the workflow changes.
