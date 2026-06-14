# Roadmap Alignment

## Purpose

Make every meaningful workflow state file explain how the workflow relates to the roadmap without forcing each workflow to be exactly one roadmap phase.

## Problem

Workflow state preserves operational progress, but it has not required a clear connection back to `roadmap.md`. That can make feature and planning workflows look locally coherent while leaving future sessions unsure which roadmap phase, feature candidate, or product goal the work advances.

## Behavior

Sibling workflow state files include a `Roadmap Alignment` section.

The section records:

- alignment type
- roadmap link, when one exists
- product goal link, when one exists
- feature spec link, when one exists
- how the workflow advances or affects the roadmap
- whether `roadmap.md` must change before the workflow closes

Supported alignment types include:

- roadmap phase
- feature candidate
- enabling work
- roadmap gap
- maintenance
- not applicable

## Boundaries

Roadmap alignment is required, but roadmap containment is not. A workflow may be adjacent to the roadmap or reveal missing roadmap structure. In that case, the workflow should either update `roadmap.md` before closing or explicitly record why the roadmap should remain unchanged.

Do not require one workflow to equal one roadmap phase. Roadmap units may be phases, iterations, releases, milestones, or another project-specific unit.

## Verification

- Workflow-state artifact rules mention roadmap alignment.
- Roadmap and feature workflows instruct agents to record and reconcile alignment.
- Starter and installed-skill guidance include the rule.
- A migration explains how existing projects should add the section to active or paused workflow state files.
