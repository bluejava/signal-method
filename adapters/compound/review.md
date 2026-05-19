# Review Phase

Use this guidance when integrating the methodology into a compound `review` phase.

## Objectives

- detect drift between delivered behavior and the knowledge layer
- identify missing ADRs
- identify reusable lessons

## Review Checklist

- Does the implementation still satisfy `system-invariants.md`?
- Did the architecture change in a way `architecture.md` should reflect?
- Did shared entities or contracts change?
- Did the feature alter product consistency rules?
- Was a durable decision made that should become an ADR?
- Did the work reveal a reusable pattern or recurring pitfall?

## Review Outputs

- code review findings
- a list of required doc updates
- ADR recommendation if needed
- compound-memory recommendation if needed
- workflow-state update with closure blockers or next step
