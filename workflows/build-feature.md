# Build Feature Workflow

## Goal

Ensure that feature work updates code, canonical docs, decision history, and reusable knowledge together.

## Step Model

Each step has a user outcome and agent actions. The user outcome is what should be clear to the human. Agent actions are the operational work an AI should perform.

## Steps

1. Start or resume the feature workflow.
   - User outcome: the feature goal, status, and next step are explicit.
   - Agent actions: create or update a sibling workflow state file for the feature, record its `Roadmap Alignment`, update `workflow-state/current.md` with an index entry for it, and read any existing resume instructions.
2. Establish context.
   - User outcome: the agent understands relevant project constraints before planning or editing.
   - Agent actions: read `signal-docs/doc-index.md` or the configured docs root, `workflow-state/current.md`, the feature's sibling state file, and only the relevant canonical docs, ADRs, feature specs, and compound-memory notes.
3. Clarify the feature intent.
   - User outcome: the requested behavior and boundaries are clear enough to specify.
   - Agent actions: identify open questions, assumptions, affected users, affected system areas, and likely risks.
4. Create or update the feature spec.
   - User outcome: the feature has durable behavioral intent outside chat history.
   - Agent actions: document behavior, constraints, flows, inputs, outputs, interactions with existing system components, and links back to the relevant roadmap phase or feature candidate when one exists.
5. Plan the implementation.
   - User outcome: the path from spec to code is visible.
   - Agent actions: decide whether the work changes system overview, invariants, architecture, data model, API contracts, or design guidelines.
6. Decide whether an ADR is likely.
   - User outcome: durable decisions will not disappear into the implementation.
   - Agent actions: flag hard-to-reverse or non-obvious choices before or during implementation.
7. Implement the feature.
   - User outcome: the requested behavior exists in code.
   - Agent actions: make focused code changes consistent with the feature spec and relevant docs.
8. Test or verify the feature.
   - User outcome: there is evidence the feature works.
   - Agent actions: run appropriate tests or manual verification and record any gaps.
9. Review against the spec and constraints.
   - User outcome: implementation, feature spec, and system constraints agree.
   - Agent actions: check for invariant drift, architecture drift, data/API/design drift, and incomplete behavior.
10. Reconcile documentation.
   - User outcome: the docs reflect delivered reality.
   - Agent actions: update canonical docs, the feature spec, roadmap, ADRs, and doc index as needed.
11. Capture reusable knowledge.
   - User outcome: lessons that should help future work are durable.
   - Agent actions: add a compound-memory note only if the work produced a reusable lesson.
12. Close or pause the workflow.
   - User outcome: the current state and next step are clear to a future session.
   - Agent actions: update the feature's detailed workflow state with completed steps, roadmap alignment, remaining work, blockers, and resume instructions, then update its `workflow-state/current.md` index entry.

## Required Questions

Before closing a feature, ask:

- What is newly true about the system now?
- What durable decision was made?
- What lesson would make the next similar task easier?
- Which docs would mislead the next AI session if left unchanged?
- Does this feature still align to the recorded roadmap phase or feature candidate?
- If the feature was roadmap-adjacent or missing from the roadmap, should `roadmap.md` change before close?
- What should a new session do first if this workflow resumes later?

## Exit Criteria

A feature is complete when:

- the behavior exists in code
- tests cover it appropriately
- the relevant docs reflect reality
- workflow state records roadmap alignment and any roadmap update decision
- important decisions are preserved
- reusable knowledge is not left trapped in chat or commit history
- workflow state is closed or gives clear resume instructions
