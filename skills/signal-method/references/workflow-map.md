# Workflow Map

If the task route is unclear, read `workflow-chooser.md` before using this map.

## Workflow Selection

- Use greenfield initialization for a new project or mostly empty repository.
- Use brownfield migration for an existing codebase or product.
- Use roadmap planning for broad goals, sequencing, phases, releases, milestones, or feature candidates.
- Use feature work for implementing, modifying, or removing behavior.
- Use methodology upgrade for moving an adopted project between Signal Method versions.
- Use the feature-work review path for drift detection until review becomes a standalone native workflow.
- Use external workflow adapters only when the project already uses them or explicitly requests compatibility.

## Greenfield Initialization

1. Create or update a sibling workflow state file for the initialization and add it to `workflow-state/current.md`.
2. Bootstrap the docs into the target repo, defaulting to `signal-docs/` unless the project should keep `docs/`.
3. Fill out `doc-index`, `system-overview`, `system-invariants`, `architecture`, and `data-model`.
4. Add feature specs as work begins.
5. Add ADRs when important decisions are made.
6. Add compound-memory notes only when real reuse value appears.
7. Close initialization with clear next-step guidance.

## Brownfield Migration

1. Create or update a sibling workflow state file for the migration and add it to `workflow-state/current.md`.
2. Bootstrap the docs if needed, keeping `docs/` only when that convention already exists.
3. Describe the current system first.
4. Reverse-engineer architecture and data model from the codebase.
5. Capture the most important existing decisions as ADRs.
6. Use the methodology for all new feature work going forward.
7. Close or pause migration with clear resume guidance.

## Roadmap Planning

1. Start or resume a sibling workflow state file for the planning effort and add it to `workflow-state/current.md`.
2. Read the doc index, workflow-state index, relevant sibling workflow state, product goals, roadmap, and minimum relevant canonical docs.
3. Create or update `product-goals.md` with current direction, target users, desired outcomes, priorities, non-goals, success signals, and constraints.
4. Choose the planning horizon and unit: phase, iteration, release, milestone, or another project-specific unit.
5. Break goals into sequenced slices with outcomes, feature candidates, dependencies, risks, and exit criteria.
6. Promote selected feature candidates into `feature-specs/`.
7. Close or pause the planning state file and update `workflow-state/current.md` with the next planning step or the next `build-feature` handoff.

## Feature Work

1. Start or resume a sibling workflow state file for the feature and add it to `workflow-state/current.md`.
2. Read the doc index and the minimum relevant canonical docs.
3. Update or create the feature spec.
4. Implement and test.
5. Update canonical docs if system truth changed.
6. Add an ADR if a durable decision was made.
7. Add a compound-memory note if a reusable lesson emerged.
8. Close or pause the feature state file and update `workflow-state/current.md` with clear next-step guidance.

## Methodology Upgrade

1. Read `signal-method.json` from the project root.
2. Read the skill `version` frontmatter as the target methodology version.
3. Apply each required migration guide from `migrations/` in order.
4. Preserve project-specific canonical docs unless a migration explicitly requires an edit.
5. Validate the upgraded docs.
6. Update `signal-method.json`.
7. Close or pause the upgrade state file and update `workflow-state/current.md` with clear next-step guidance.

## Workflow State

At the end of every meaningful step, update the active workflow state with:

- completed steps
- current step
- next step
- blockers or open questions
- docs and code areas touched
- resume instructions

Keep `workflow-state/current.md` as the index, not the detailed workflow state. Every active workflow should have a sibling state file under `workflow-state/`; update both the index entry and the detailed file when workflow status changes.

## External Workflow Adapters

1. Treat Signal workflows as authoritative.
2. Treat compound engineering and similar systems as optional adapters.
3. Map external phases into Signal workflow state instead of maintaining a competing state machine.
