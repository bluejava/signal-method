# Getting Started

## Use This Repo In Three Passes

### 1. Understand The Model

Read these files in order:

1. `README.md`
2. `METHODOLOGY.md`
3. `artifact-taxonomy.md`
4. `workflows/build-feature.md`

That gives you the philosophy, artifact definitions, and native feature workflow.

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

- `signal-docs/api.md` if interfaces matter early
- `signal-docs/design/design-guidelines.md` if product consistency matters early
- `signal-docs/feature-specs/` once feature work begins
- `signal-docs/adr/` as soon as important decisions appear
- `signal-docs/compound-memory/` as reusable lessons emerge

Keep this file at the project root:

- `signal-method.json` as the adopted methodology version and docs root record

### 3. Make The Workflow Real

For each meaningful feature:

1. start or resume workflow state
2. establish context from the doc index and relevant docs
3. update or add a feature spec
4. implement and test
5. update canonical docs if the system model changed
6. add an ADR if a durable decision was made
7. capture reusable lessons in compound memory
8. refresh the doc index if navigation changed
9. close or pause workflow state with resume instructions

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
7. Update `workflow-state/current.md`.
8. Begin feature work with `feature-specs/`.

### Existing Project

1. Create `signal-docs/` unless the project already has an established `docs/` convention worth keeping.
2. Describe the current system, not the historical dream.
3. Reverse-engineer architecture and data model from the codebase.
4. Capture the most important existing decisions as ADRs.
5. Track migration progress in `workflow-state/current.md`.
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
2. apply each required migration in `migrations/` in order
3. preserve project-specific docs
4. validate the docs
5. update `signal-method.json`
6. record the upgrade in workflow state

## First Dogfooding Goal

Do not judge the system by whether the initial taxonomy looks elegant. Judge it by whether one real feature is easier to plan, implement, review, and revisit a month later.
