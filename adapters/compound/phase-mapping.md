# Phase Mapping

This file maps compound engineering phases onto Signal workflow state and artifact updates.

## `plan`

Purpose:
Understand the current system, define the intended change, and identify the canonical docs that constrain the work.

Load:

- `signal-docs/doc-index.md` or the project's configured canonical docs root
- active workflow state
- `signal-docs/system-overview.md` or the equivalent root path
- `signal-docs/system-invariants.md` or the equivalent root path
- task-relevant canonical docs from that same root
- relevant ADRs
- relevant compound-memory notes

Expected outputs:

- updated or new feature spec
- updated workflow state with current step and next step
- list of canonical docs likely to change
- ADR candidate assessment

## `work`

Purpose:
Implement against the current system model instead of improvising against code alone.

Load:

- feature spec
- directly relevant canonical docs
- relevant ADRs if the area has important history

Expected outputs:

- code and tests
- notes on which docs drifted during implementation
- updated workflow state if implementation is paused or handed off

## `review`

Purpose:
Check delivered behavior against system truth and identify missing documentation updates.

Check:

- invariants
- architecture consistency
- data model changes
- API contract changes
- design rule changes
- ADR need
- compound-memory value

Expected outputs:

- review findings
- list of doc updates required before closure
- updated workflow state with closure blockers or next step

## `compound`

Purpose:
Capture what the task taught the system and sync the knowledge layer with reality.

Update:

- canonical docs that changed
- ADRs for durable decisions
- compound-memory notes for reusable lessons
- `doc-index.md` if navigation changed
- workflow state with closure or resume instructions

Expected outputs:

- synchronized docs
- preserved reasoning
- preserved reusable knowledge
- clear workflow closure or resume point
