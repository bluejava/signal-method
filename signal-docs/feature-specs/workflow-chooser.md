# Workflow Chooser

## Purpose

Add a workflow chooser that routes ambiguous Signal Method work to the correct native workflow or adapter path before planning or implementation starts.

## Audience

- Humans adopting Signal in a new or existing project.
- Agents deciding which Signal workflow to load.
- Maintainers reviewing whether Signal has a clear entry path for common requests.

## Behavior

The chooser should:

- route greenfield setup to `workflows/new-project.md`
- route existing-codebase adoption to `workflows/migrate-existing-project.md`
- route broad goals and sequencing to `workflows/plan-roadmap.md`
- route implementation requests to `workflows/build-feature.md`
- route methodology version changes to `workflows/upgrade-methodology.md`
- route review and drift-detection requests to the review path inside feature work until a native review workflow exists
- route compound-oriented projects through the adapter while keeping Signal workflow state authoritative
- identify the first artifacts to read and the expected output for each route

## Content Constraints

- The chooser is a routing artifact, not a competing workflow state machine.
- Workflow state remains the source of truth for current or paused workflow progress.
- External systems remain adapters into Signal artifacts.
- Review should be visible as a recurring entry path even if it is not yet a standalone native workflow.

## Verification

- `workflows/choose-workflow.md` exists and is linked from repository navigation.
- Installed skill guidance points unclear task routing to `references/workflow-chooser.md`.
- Repository validation requires both chooser artifacts.

