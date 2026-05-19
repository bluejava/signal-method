# Plan Phase

Use this guidance when integrating the methodology into a compound `plan` phase.

## Objectives

- load the minimum relevant project context
- define the intended change in a feature spec
- identify which canonical docs constrain the task
- decide whether an ADR is likely

## Suggested Sequence

1. Read `signal-docs/doc-index.md` or the project's configured canonical docs root.
2. Read the active workflow state if present.
3. Read `signal-docs/system-overview.md` or the equivalent root path.
4. Read `signal-docs/system-invariants.md` or the equivalent root path.
5. Read only the canonical docs relevant to the task.
6. Read only the ADRs and compound-memory notes relevant to the task.
7. Create or update the feature spec before implementation begins.
8. Record which docs are expected to change if the work succeeds.
9. Update workflow state with the planned current step and next step.

## Planning Questions

- What is newly intended to be true after this change?
- Which existing invariants constrain the solution?
- Which canonical docs are likely to change?
- Is a durable architectural or product decision likely here?
- Is there prior compound-memory guidance that should shape the approach?
