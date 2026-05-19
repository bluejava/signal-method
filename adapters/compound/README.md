# Compound Adapter

This directory defines an optional compatibility adapter between Signal workflows and a compound engineering workflow engine.

## Goal

Map the upstream phase model into Signal workflow state and artifacts:

- `plan`
- `work`
- `review`
- `compound`

Use this adapter only if the target project already works in a compound engineering style or explicitly wants that integration.

Signal workflows and workflow state remain authoritative. Compound phases should not become a second source of truth for what is done, blocked, or next.

## What This Adapter Does

- maps each compound phase to Signal workflow state and the canonical documentation layer
- tells agents which artifacts to load and update
- gives projects a small local config surface
- supports helper automation without forcing a fork

## What This Adapter Does Not Do

- replace the compound workflow engine for teams that still use it
- define a new command set
- store project truth centrally in this repo

Project truth still lives inside each project repository.

## Recommended Integration Shape

1. Copy `template-project/compound-spec.local.md` into the target repo.
2. Copy `template-project/signal-docs/` into the target repo, or bootstrap into `docs/` if the project already uses that path.
3. Use the phase guidance in this directory to map `plan`, `work`, `review`, and `compound` into Signal workflow state and docs.
4. Add lightweight helpers such as `suggest-doc-updates.js` where useful.

## Files

- `phase-mapping.md`: compact summary of the phase-to-artifact mapping.
- `plan.md`: pre-implementation planning guidance.
- `work.md`: implementation guidance.
- `review.md`: review and drift-detection guidance.
- `compound.md`: post-delivery knowledge capture guidance.
