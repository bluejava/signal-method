# Work Phase

Use this guidance when integrating the methodology into a compound `work` phase.

## Objectives

- implement from the feature spec and canonical docs
- keep context tight
- note where implementation reveals documentation drift

## Suggested Sequence

1. Start from the feature spec, not only the code diff.
2. Read the active workflow state if present.
3. Load the smallest set of canonical docs that constrain the implementation.
4. Implement the change.
5. Run tests.
6. Record which docs now appear stale or incomplete.
7. Update workflow state if work is paused or handed off.

## Working Rules

- Do not treat code as the only source of truth.
- Do not silently override documented invariants.
- If implementation forces a system-level change, note the affected canonical docs immediately.
- If an important decision emerges, flag it for ADR review instead of burying it in commit history.
