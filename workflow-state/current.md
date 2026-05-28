# Current Workflow State

Purpose
Track the active or most recent Signal workflow so a future session can resume without relying on chat history.

Include

- workflow status
- current step
- next step
- completed work
- blockers or open questions
- relevant artifacts
- resume instructions

Exclude

- full feature behavior
- canonical system truth
- historical rationale
- reusable implementation lessons

Split when
Use one workflow state file per active feature or migration when multiple workflows are active at the same time.

Status: Complete
Workflow: roadmap planning workflow addition
Current step: Closed
Last updated: 2026-05-28

## Goal

Extend Signal Method so it can guide big-picture planning from product goals into phases, iterations, releases, or milestones, then into feature specs that enter the build-feature workflow.

## Completed

- Added `workflows/plan-roadmap.md` as a native planning workflow.
- Added `product-goals.md` and `roadmap.md` template artifacts to the root template project.
- Mirrored the new planning artifacts into the bundled installable skill template.
- Added `migrations/0.3.0-to-0.4.0.md` and the matching bundled skill migration.
- Updated methodology, taxonomy, getting-started, README, doc index, skill guidance, workflow map, methodology map, template guidance, and agent guidance to include roadmap planning.
- Bumped the methodology version from `0.3.0` to `0.4.0`.
- Updated validation coverage for the new workflow, migration, and template artifacts.
- Ran `yarn test`.
- Ran `npm pack --dry-run`.

## Current Step

No active step.

## Next Step

Use `workflows/plan-roadmap.md` in a real project planning pass, then refine the workflow if the handoff into `workflows/build-feature.md` is unclear.

## Open Questions

- Whether future versions should add a richer feature-spec template for roadmap-originated features.
- Whether roadmap planning should later support multiple parallel roadmap files by default, or keep that as a split-when-needed convention.

## Relevant Artifacts

- `workflows/plan-roadmap.md`
- `workflows/build-feature.md`
- `product-goals.md` template files
- `roadmap.md` template files
- `migrations/0.3.0-to-0.4.0.md`
- `skills/signal-method/SKILL.md`
- `skills/signal-method/references/workflow-map.md`
- `skills/signal-method/references/methodology-map.md`
- `template-project/signal-docs/`
- `scripts/validate-docs.js`
- `workflow-state/current.md`

## Resume Instructions

Open future sessions at `/Users/glenn/work/vibe/signal-method`. Read `doc-index.md`, then this file. If continuing this planning-workflow addition, start by applying `workflows/plan-roadmap.md` to a real project and check whether the resulting roadmap produces feature specs that are ready for `workflows/build-feature.md`.
