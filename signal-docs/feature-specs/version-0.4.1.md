# Version 0.4.1

## Purpose

Release the workflow chooser as a patch update to Signal Method.

## Scope

Version `0.4.1` includes:

- the canonical workflow chooser at `workflows/choose-workflow.md`
- the portable installed-skill chooser at `skills/signal-method/references/workflow-chooser.md`
- skill and documentation routing updates that point unclear requests through the chooser
- validation coverage for the chooser artifacts
- overview page updates that present the chooser as the workflow entry path

## Migration Decision

No migration is required from `0.4.0` to `0.4.1`.

Reason:
The change adds source-package and installed-skill guidance, but it does not require existing adopted project docs to change. Existing projects can keep their current canonical docs and workflow state. They benefit from the chooser when using the updated skill or source docs.

## Verification

- Version metadata surfaces agree on `0.4.1`.
- `yarn test` passes.

