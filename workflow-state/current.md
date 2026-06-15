# Current Workflow State - Workflow Index

Purpose
Route to active Signal workflow state files so a future session can resume without relying on chat history. This file is always an index; detailed workflow progress lives in sibling files in this folder.

Include

- active workflow list
- links to sibling workflow state files
- short status and next step for each workflow
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

Status: No active workflows
Last updated: 2026-06-15

## Active Workflows

- None.

## Recently Closed

- **Version 0.5.0 workflow-state index release** -> `version-0.5.0.md`
  - Status: complete; validation passed.
  - Next step: superseded by the `0.6.0` roadmap alignment release.
- **Version 0.6.0 roadmap alignment release** -> `version-0.6.0.md`
  - Status: complete; validation passed.
  - Roadmap alignment: roadmap gap; this repository has no root roadmap, so the release spec records the decision.
  - Next step: publish the `0.6.0` methodology update when ready.
- **Project dashboard** -> `project-dashboard.md`
  - Status: complete; validation passed.
  - Roadmap alignment: roadmap gap; this repository has no root roadmap, so the feature spec records the decision.
  - Next step: decide whether the next release should include a version bump and migration guidance for dashboards in existing adopted projects.
- **Version 0.7.0 project dashboard release** -> `version-0.7.0.md`
  - Status: complete; validation passed.
  - Roadmap alignment: roadmap gap; this repository has no root roadmap, so the feature spec records the decision.
  - Next step: publish or package the `0.7.0` methodology update when ready.

## Cross-Workflow Notes

- None.

## Next Step

Publish or package the `0.7.0` methodology update when ready.

## Open Questions

- Should a future release add an optional AI-authored status-summary section that is separate from deterministic dashboard generation?
- Should this repository add a root `product-goals.md` and `roadmap.md` for future methodology releases?

## Relevant Artifacts

- `doc-index.md`
- `workflow-state/current.md`
- `workflow-state/project-dashboard.md`
- `workflow-state/version-0.5.0.md`
- `workflow-state/version-0.6.0.md`
- `workflow-state/version-0.7.0.md`

## Resume Instructions

Open future sessions at `/Users/glenn/work/vibe/signal-method`. Read `doc-index.md`, then this index. There are no active workflows; use `workflow-state/version-0.7.0.md` only to audit the latest closed release workflow.
