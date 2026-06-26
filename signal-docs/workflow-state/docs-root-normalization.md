# Docs Root Normalization

Purpose
Record the maintenance workflow that moved this repository's live dogfooded Signal context into `signal-docs/`.

Include

- migration goal and scope
- files moved into the configured docs root
- metadata and guidance updated
- validation result

Exclude

- distributed methodology behavior changes
- new artifact types
- release version changes
- template-project content changes

Split when
Create a separate workflow state file if later work changes distributed docs-root behavior or adds a migration guide for adopted projects.

Status: Complete
Workflow type: maintenance
Last updated: 2026-06-25

## Goal

Make this repository dogfood Signal Method with the same default `signal-docs/` docs-root shape used by adopted projects.

## Roadmap Alignment

Maintenance. This clarified the source repository's adopted-project layout without changing distributed methodology behavior, template output, or release version metadata.

## Completed

- Moved the live dogfooding entry point from `doc-index.md` to `signal-docs/doc-index.md`.
- Moved live dogfooding feature specs from `feature-specs/` to `signal-docs/feature-specs/`.
- Moved live workflow state from `workflow-state/` to `signal-docs/workflow-state/`.
- Updated `signal-method.json` to use `"docsRoot": "signal-docs"`.
- Updated repo guidance to distinguish root source/distribution files from `signal-docs/` project-context files.
- Updated validation to expect this repo's live Signal context under `signal-docs/`.

## Review Notes

- The root remains the source and distribution surface for Signal Method.
- `skills/signal-method/assets/template-project/signal-docs/` remains the bundled starter template for adopted projects.
- `signal-docs/` is this repository's own active Signal context, not the shipped template.

## Validation

- `node scripts/validate-docs.js`
- `node scripts/generate-dashboard.js . --output=/tmp/signal-method-dashboard.html`

## Next Step

Use `signal-docs/doc-index.md` as the live Signal entry point for this repository.
