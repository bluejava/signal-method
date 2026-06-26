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
Last updated: 2026-06-26

## Active Workflows

- None.

## Recently Closed

- **Version 0.5.0 workflow-state index release** -> `version-0.5.0.md`
  - Status: complete; validation passed.
  - Next step: superseded by the `0.6.0` roadmap alignment release.
- **Version 0.6.0 roadmap alignment release** -> `version-0.6.0.md`
  - Status: complete; validation passed.
  - Roadmap alignment: roadmap gap; this repository had no dogfooded roadmap, so the release spec records the decision.
  - Next step: publish the `0.6.0` methodology update when ready.
- **Project dashboard** -> `project-dashboard.md`
  - Status: complete; validation passed.
  - Roadmap alignment: roadmap gap; this repository had no dogfooded roadmap, so the feature spec records the decision.
  - Next step: decide whether the next release should include a version bump and migration guidance for dashboards in existing adopted projects.
- **Version 0.7.0 project dashboard release** -> `version-0.7.0.md`
  - Status: complete; validation passed.
  - Roadmap alignment: roadmap gap; this repository had no dogfooded roadmap, so the feature spec records the decision.
  - Next step: publish or package the `0.7.0` methodology update when ready.
- **Docs root normalization** -> `docs-root-normalization.md`
  - Status: complete; validation passed.
  - Roadmap alignment: maintenance; this clarifies this repo's dogfooded Signal context without changing distributed methodology behavior.
  - Next step: use `signal-docs/doc-index.md` as the live Signal entry point for this repository.
- **Version 0.7.1 docs-root normalization patch** -> `version-0.7.1.md`
  - Status: complete; validation passed.
  - Roadmap alignment: maintenance; packages the source-repo docs-root normalization as a patch release.
  - Next step: publish or package the `0.7.1` methodology patch when ready.

## Cross-Workflow Notes

- None.

## Next Step

Publish or package the `0.7.1` methodology patch when ready.

## Open Questions

- Should a future release add an optional AI-authored status-summary section that is separate from deterministic dashboard generation?
- Should this repository add `signal-docs/product-goals.md` and `signal-docs/roadmap.md` for future methodology releases?

## Relevant Artifacts

- `doc-index.md`
- `workflow-state/current.md`
- `workflow-state/docs-root-normalization.md`
- `workflow-state/project-dashboard.md`
- `workflow-state/version-0.5.0.md`
- `workflow-state/version-0.6.0.md`
- `workflow-state/version-0.7.0.md`
- `workflow-state/version-0.7.1.md`

## Resume Instructions

Open future sessions at `/Users/glenn/work/vibe/signal-method`. Read `signal-method.json`, then `signal-docs/doc-index.md`, then this index. There are no active workflows; use `workflow-state/version-0.7.1.md` only to audit the latest patch release workflow.
