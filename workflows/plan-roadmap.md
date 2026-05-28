# Plan Roadmap Workflow

## Goal

Turn broad product direction into sequenced phases and feature specs that can be worked through the build-feature workflow.

## Step Model

Each step has a user outcome and agent actions. The user outcome is what should be clear to the human. Agent actions are the operational work an AI should perform.

## Steps

1. Start or resume the planning workflow.
   - User outcome: the planning goal, status, and next step are explicit.
   - Agent actions: create or update workflow state for the planning effort and read any existing resume instructions.
2. Establish context.
   - User outcome: planning starts from the current project truth.
   - Agent actions: read `signal-docs/doc-index.md` or the configured docs root, the active workflow state, and the relevant canonical docs, ADRs, feature specs, and compound-memory notes.
3. Capture or update product goals.
   - User outcome: the big-picture intent and success criteria are durable outside chat history.
   - Agent actions: create or update `product-goals.md` with target users, desired outcomes, non-goals, constraints, and success signals.
4. Choose the planning horizon and unit.
   - User outcome: everyone knows whether the plan is organized as phases, iterations, releases, milestones, or another named unit.
   - Agent actions: record the chosen unit, horizon, sequencing assumptions, and confidence level in `roadmap.md`.
5. Break goals into phases.
   - User outcome: large goals are grouped into coherent delivery slices.
   - Agent actions: define each phase with purpose, outcomes, included feature candidates, dependencies, risks, and exit criteria.
6. Identify feature candidates.
   - User outcome: each phase has feature-sized work candidates that can be specified and built.
   - Agent actions: split phase outcomes into candidate features, note open questions, and avoid implementation detail that belongs in feature specs.
7. Promote selected features into specs.
   - User outcome: the next buildable work has a durable feature spec.
   - Agent actions: create or update files under `feature-specs/` for selected features and link them from `roadmap.md`.
8. Prepare build-feature handoff.
   - User outcome: the next executable feature workflow is obvious.
   - Agent actions: record which feature should enter `workflows/build-feature.md`, what context to load, and what questions remain.
9. Reconcile documentation.
   - User outcome: navigation and planning docs reflect the new planning model.
   - Agent actions: update `doc-index.md`, product goals, roadmap, feature specs, ADRs, and canonical docs as needed.
10. Close or pause the workflow.
   - User outcome: a future session can resume planning or begin feature work without reconstructing context.
   - Agent actions: update workflow state with completed steps, current plan status, blockers, relevant artifacts, and resume instructions.

## Required Questions

Before closing a planning pass, ask:

- What product outcome is now clearer?
- Which goals are intentionally out of scope for this planning horizon?
- What is the chosen planning unit and why?
- Which phase should be worked next?
- Which feature spec should enter `build-feature` first?
- Which docs would mislead the next AI session if left unchanged?

## Exit Criteria

A planning pass is complete when:

- product goals describe the current big-picture direction
- the roadmap breaks those goals into named phases, iterations, releases, or milestones
- the next phase has feature candidates small enough to specify
- selected features have or point to feature specs
- workflow state names the next planning or build-feature step
- relevant docs and the doc index reflect the planning structure
