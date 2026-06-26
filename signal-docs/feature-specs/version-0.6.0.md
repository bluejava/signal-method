# Version 0.6.0

## Purpose

Release roadmap alignment as a minor Signal Method update.

## Scope

Version `0.6.0` includes:

- required `Roadmap Alignment` sections in meaningful sibling workflow state files
- guidance that roadmap alignment is required but roadmap containment is not
- workflow updates for roadmap planning and feature work
- template and installed-skill guidance for recording roadmap alignment
- migration guidance for updating active or paused workflow state files

## Migration Decision

A migration is required from `0.5.0` to `0.6.0`.

Reason:
The workflow-state contract changes. Existing projects may have active or paused sibling workflow state files without roadmap alignment. Under `0.6.0`, those files should explain whether the workflow advances a roadmap phase, implements a feature candidate, enables roadmap work, exposes a roadmap gap, handles maintenance, or is not applicable.

## Verification

- Version metadata surfaces agree on `0.6.0`.
- `migrations/0.5.0-to-0.6.0.md` exists in the source repo and bundled skill.
- The template project and bundled skill template match.
- `yarn test` passes.
