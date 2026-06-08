# Version 0.5.0

## Purpose

Release the workflow-state index convention as a minor Signal Method update.

## Scope

Version `0.5.0` includes:

- `workflow-state/current.md` as an always-index entry point
- one sibling workflow state file per meaningful workflow, even when only one workflow is active
- template and installed-skill guidance for creating and updating workflow index entries
- migration guidance for converting existing `current.md` state files into index files

## Migration Decision

A migration is required from `0.4.1` to `0.5.0`.

Reason:
The workflow-state contract changes. Existing projects may have detailed workflow progress stored directly in `workflow-state/current.md`. Under `0.5.0`, that detail should move to a sibling state file, while `current.md` becomes the stable index.

## Verification

- Version metadata surfaces agree on `0.5.0`.
- `migrations/0.4.1-to-0.5.0.md` exists in the source repo and bundled skill.
- The template project and bundled skill template match.
- `yarn test` passes.
