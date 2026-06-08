# Getting Started

## Use This Repo In Three Passes

### 1. Understand The Model

Read these files in order:

1. `README.md`
2. `METHODOLOGY.md`
3. `artifact-taxonomy.md`
4. `workflows/choose-workflow.md`
5. `workflows/plan-roadmap.md`
6. `workflows/build-feature.md`

That gives you the philosophy, artifact definitions, workflow routing, and native feature workflow.

You do not need compound engineering to adopt this repository. Signal workflows stand on their own.

### 2. Start With The Smallest Useful Structure

When adopting this in a real project, do not start by filling every possible file.

Start with these files under your canonical docs root. New projects should default to `signal-docs/`.

- `signal-docs/system-overview.md`
- `signal-docs/system-invariants.md`
- `signal-docs/architecture.md`
- `signal-docs/data-model.md`
- `signal-docs/doc-index.md`
- `signal-docs/workflow-state/current.md`

Then add:

- `signal-docs/product-goals.md` when big-picture planning should persist
- `signal-docs/roadmap.md` when goals need phases, iterations, releases, or milestones
- `signal-docs/api.md` if interfaces matter early
- `signal-docs/design/design-guidelines.md` if product consistency matters early
- `signal-docs/feature-specs/` once feature work begins
- `signal-docs/adr/` as soon as important decisions appear
- `signal-docs/compound-memory/` as reusable lessons emerge

Keep this file at the project root:

- `signal-method.json` as the adopted methodology version and docs root record

Keep `workflow-state/current.md` as the workflow-state index. Put each workflow's detailed state in a sibling file under `workflow-state/`, even when only one workflow is active.

### 3. Make The Workflow Real

When you are unsure which workflow applies:

1. read `workflows/choose-workflow.md`
2. classify the request as setup, migration, roadmap planning, feature work, methodology upgrade, review, or adapter compatibility
3. start or resume the sibling workflow state file for the selected route and update `workflow-state/current.md`
4. read only the artifacts named by that route

When broad goals need to become buildable work:

1. start or resume a sibling workflow state file and update `workflow-state/current.md`
2. establish context from the doc index and relevant docs
3. update product goals
4. break goals into phases, iterations, releases, or milestones in the roadmap
5. identify feature candidates
6. promote selected features into feature specs
7. hand the next feature to `workflows/build-feature.md`

For each meaningful feature:

1. start or resume a sibling workflow state file and update `workflow-state/current.md`
2. establish context from the doc index and relevant docs
3. update or add a feature spec
4. implement and test
5. update canonical docs if the system model changed
6. add an ADR if a durable decision was made
7. capture reusable lessons in compound memory
8. refresh the doc index if navigation changed
9. close or pause the sibling workflow state file and update `workflow-state/current.md` with resume instructions

## Recommended Adoption Order

### New Project

1. Copy `template-project/signal-docs/` into the project repo.
   Or use the bootstrap script without `--docs-root`; it defaults to `signal-docs/`.
   Use `--docs-root=docs` only when the project should keep an established `docs/` convention.
2. Fill out `system-overview.md`.
3. Write `system-invariants.md`.
4. Sketch `architecture.md`.
5. Define the first shared entities in `data-model.md`.
6. Add `doc-index.md`.
7. Create a sibling workflow state file and update `workflow-state/current.md`.
8. Add `product-goals.md` and `roadmap.md` when planning needs to span more than one feature.
9. Begin feature work with `feature-specs/`.

### Existing Project

1. Create `signal-docs/` unless the project already has an established `docs/` convention worth keeping.
2. Describe the current system, not the historical dream.
3. Reverse-engineer architecture and data model from the codebase.
4. Capture the most important existing decisions as ADRs.
5. Track migration progress in a sibling workflow state file and update `workflow-state/current.md`.
6. Start using feature specs for new work immediately.

## Practical Rules

- Keep each document narrow enough to scan quickly.
- Treat canonical docs as current truth, not discussion logs.
- Treat ADRs as append-only history whenever possible.
- Move volatile detail out of broad shared docs.
- Only split when the split clearly reduces retrieval cost.

## Optional Integrations

You can use this methodology by itself.

If your team already uses a workflow layer such as compound engineering, treat that as an optional adapter into Signal workflow state and artifacts. Signal should remain the authoritative workflow record.

## Upgrading Existing Projects

When this methodology changes, use `workflows/upgrade-methodology.md`.

The short version:

1. read `signal-method.json`
2. read the installed skill's `version` frontmatter as the target version
3. apply each required migration in `migrations/` in order
4. preserve project-specific docs
5. validate the docs
6. update `signal-method.json`
7. record the upgrade in a sibling workflow state file and update `workflow-state/current.md`

## First Dogfooding Goal

Do not judge the system by whether the initial taxonomy looks elegant. Judge it by whether one real feature is easier to plan, implement, review, and revisit a month later.
