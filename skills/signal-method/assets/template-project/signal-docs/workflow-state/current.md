# Current Workflow State - Workflow Index

Purpose
Route to active Signal workflow state files so a future session can resume without relying on chat history. This file is always an index; detailed workflow progress lives in sibling files in this folder.

Include

- active workflow list
- links to sibling workflow state files
- short status and next step for each workflow
- short roadmap alignment for each active workflow when relevant
- cross-workflow blockers or coordination notes
- recently closed workflows when useful for handoff

Exclude

- full feature behavior
- canonical system truth
- historical rationale
- reusable implementation lessons
- detailed per-workflow progress

Split when
Create one sibling workflow state file per active feature, planning effort, upgrade, or migration, even when only one workflow is active.

Status: Not started
Last updated: YYYY-MM-DD

## Active Workflows

- None yet.

## Recently Closed

- None yet.

## Cross-Workflow Notes

- None.

## Next Step

Choose a workflow and create a sibling state file:

- greenfield initialization
- brownfield migration
- roadmap planning
- feature work
- methodology upgrade

Each sibling state file should include `Roadmap Alignment` with a roadmap phase, feature candidate, enabling work, roadmap gap, maintenance reason, or explicit not-applicable status.

## Open Questions

- None yet.

## Relevant Artifacts

- `signal-docs/doc-index.md`
- `signal-docs/workflow-state/current.md`

## Resume Instructions

Read `signal-docs/doc-index.md`, then return to this index. If an active workflow is listed, open its sibling state file before planning or editing.
