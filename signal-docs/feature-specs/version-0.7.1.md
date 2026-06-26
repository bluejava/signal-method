# Version 0.7.1

## Purpose

Release the source-repository docs-root normalization as a patch update to Signal Method.

## Scope

Version `0.7.1` includes:

- this repository's adopted docs root set to `signal-docs/`
- live dogfooding artifacts moved under `signal-docs/`
- agent guidance that distinguishes root source/distribution files from `signal-docs/` project-context files
- validation coverage for the source repo docs-root metadata and moved dogfooding artifacts
- regenerated template dashboards with updated version metadata

## Migration Decision

No migration is required from `0.7.0` to `0.7.1`.

Reason:
The change normalizes this source repository's dogfooding layout to match the default adopted-project shape. It does not add a new artifact type, change workflow-state semantics, alter template structure, or require existing adopted projects to update their docs. Existing projects already using `signal-docs/` remain structurally current and can update version metadata when they adopt the new skill version.

## Verification

- Version metadata surfaces agree on `0.7.1`.
- No `0.7.0-to-0.7.1` migration guide is required.
- `node scripts/validate-docs.js` passes.
- `git diff --check` passes.
- `npm pack --dry-run` reports `signal-method@0.7.1`.
