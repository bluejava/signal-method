# Compound Workflow Compatibility

This document describes how Signal's native feature workflow can be mapped to compound-style engineering ideas for projects that already use them.

Signal workflows and workflow state are authoritative. Compound-style phases are an optional compatibility layer, not a competing state machine.

## The Core Loop

1. Define or update the feature spec.
2. Create or update workflow state.
3. Load the minimum relevant canonical context.
4. Evaluate whether the change affects architecture, data model, APIs, invariants, or design rules.
5. Implement and test.
6. Review for correctness and consistency.
7. Update canonical docs to match delivered reality.
8. Add an ADR if a durable decision was made.
9. Add a compound-memory note if a reusable lesson emerged.
10. Close or pause workflow state with resume instructions.

## Why This Matters

Without the loop, documentation and knowledge drift apart from implementation.

With the loop:

- canonical docs stay accurate
- decision history stays durable
- reusable lessons compound over time
- AI starts the next task from better context

## Output Expectations Per Feature

Every meaningful feature should leave behind some combination of:

- updated feature spec
- updated workflow state
- canonical doc changes
- a new ADR
- a new or updated compound-memory note
- tests proving the intended behavior

Not every feature needs all five outputs, but every feature should be evaluated against them.

## Decision Heuristics

### Update Canonical Docs When

- the current truth of the system changed
- a new invariant now exists
- the architecture or data model changed
- an interface or UX rule changed

### Add An ADR When

- a decision is hard to reverse
- alternatives were meaningfully considered
- future maintainers will need the rationale
- the system may look “weird” without explanation

### Add Compound Memory When

- a solution will likely be reused
- a bug pattern reappeared
- an implementation lesson would improve future planning or review

## What Not To Do

- Do not use canonical docs as brainstorming scratchpads.
- Do not bury current truth inside ADRs.
- Do not store one-off implementation chatter in compound memory.
- Do not skip the post-implementation doc update step.

## Future Automation

Once the methodology is stable, automation can help detect:

- changed architecture surfaces
- likely ADR candidates
- patterns worth extracting
- stale docs after implementation

That is the path from “documentation scheme” to “engineering knowledge engine.”
