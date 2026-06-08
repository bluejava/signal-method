---
name: signal-method
version: "0.5.0"
description: Bootstrap, upgrade, and maintain project documentation using the Signal Method with canonical docs, workflow state, version metadata, ADRs, and compound memory. Use when setting up this methodology in a new repo, migrating an existing repo, upgrading methodology files, planning or reviewing feature work, or mapping an external workflow into Signal artifacts.
---

# Signal Method

Use this skill to apply the repository's documentation methodology inside a real project.

## Workflow Selection

When the user's request does not clearly identify which Signal workflow should run, read `references/workflow-chooser.md` before planning or editing.

Use the chooser to route the task into greenfield initialization, brownfield migration, roadmap planning, feature work, methodology upgrade, review and drift detection, or an optional external workflow adapter.

## Quick Start

For a new project:

1. Run `scripts/bootstrap-project.js <target-dir>` to copy the bundled starter files into the target repository.
   Use `--docs-root=docs` if the target project should keep `docs/` instead of the default `signal-docs/`.
2. Create or update a sibling workflow state file for initialization and add it to `workflow-state/current.md`.
3. Fill out the core docs in this order:
   - `signal-docs/doc-index.md`
   - `signal-docs/system-overview.md`
   - `signal-docs/system-invariants.md`
   - `signal-docs/architecture.md`
   - `signal-docs/data-model.md`
   If planning spans multiple features, fill `signal-docs/product-goals.md` and then `signal-docs/roadmap.md`.
4. Let the bootstrap step add the methodology routing block to `AGENTS.md`.
5. Add feature specs, ADRs, and compound-memory notes as the project earns them.

For an existing project:

1. Read `references/workflow-chooser.md` if the route is unclear, then read `references/workflow-map.md`.
2. Bootstrap the docs into the target repo if they do not exist yet.
3. Document the current system first, not the historical dream.
4. Create or update a sibling workflow state file so migration status survives across sessions, and add it to `workflow-state/current.md`.
5. Start using feature specs for new work immediately.

For a methodology upgrade:

1. Read `signal-method.json` from the project root.
2. Read this skill's `version` frontmatter as the target methodology version.
3. Read `references/workflow-map.md`.
4. Apply each required migration guide from `migrations/` in order.
5. Preserve project-specific canonical docs unless a migration explicitly requires an edit.
6. Update `signal-method.json` only after the migration completes.

## Core Rules

- Keep canonical docs concise and current.
- Put current truth in canonical docs.
- Put reasoning in ADRs.
- Put reusable lessons in compound memory.
- Split files only when retrieval or maintenance improves.
- Load the minimum relevant context for a task.
- Keep `workflow-state/current.md` as the workflow-state index; put detailed workflow progress in sibling state files.
- Update workflow state at the end of every meaningful workflow step.
- Tell the user the next workflow step before pausing or closing.
- Apply methodology migrations sequentially; do not infer upgrades from the latest template.

Read `references/methodology-map.md` for the compact rule set.

## Working Inside A Methodology-Enabled Project

When planning work:

1. Read `signal-docs/doc-index.md` or the project's configured canonical docs root.
2. Read `workflow-state/current.md`, then read the relevant sibling workflow state file if the index names one.
3. Read `signal-docs/system-overview.md` or the equivalent root path.
4. Read `signal-docs/product-goals.md` and `signal-docs/roadmap.md` if the task involves big-picture planning, sequencing, phases, iterations, releases, or feature selection.
5. Read `signal-docs/system-invariants.md` or the equivalent root path.
6. Read only the canonical docs relevant to the task.
7. Read only the ADRs and compound-memory notes relevant to the task.
8. Use roadmap planning before feature work when goals need to be broken into phases or feature candidates.
9. Update or create the feature spec before implementation.

When reviewing work:

1. Check invariant drift.
2. Check architecture, data, API, and design drift.
3. Decide whether an ADR is needed.
4. Decide whether a reusable pattern should go into compound memory.
5. Update workflow state with the result and next step.

## External Workflow Adapters

Signal workflows and workflow state are authoritative.

Use the compound adapter only when the target project already uses compound engineering or explicitly asks for compatibility with it.

If the target project uses compound engineering:

1. Copy `compound-spec.local.md` into the project root only if needed by that tool.
2. Use `signal-docs/agent-guidance/compound-phase-rules.md` or the equivalent root path for compatibility behavior.
3. Read `../../adapters/compound/phase-mapping.md` for mapping external phases to Signal artifacts.

Do not maintain a competing state machine. Map external phases into Signal workflow state.

## Resources

- `scripts/bootstrap-project.js`: copy the bundled methodology starter files into a target repository and manage the `AGENTS.md` routing block.
- `references/methodology-map.md`: compact summary of the artifact model and design rules.
- `references/workflow-chooser.md`: routing guide for selecting the correct Signal workflow or adapter path.
- `references/workflow-map.md`: concise operational playbook for setup, migration, roadmap planning, feature work, workflow state, and optional adapters.
- `migrations/`: sequential methodology upgrade guides.
- `assets/template-project/`: bundled template used by the bootstrap script.
