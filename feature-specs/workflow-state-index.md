# Workflow State Index

## Purpose

Make `workflow-state/current.md` a stable index for active Signal work. Detailed workflow progress always lives in sibling state files, even when only one workflow is active.

## Problem

Signal already allows one workflow state file per active feature or migration, but the guidance is easy to miss. Earlier guidance let `current.md` hold the full state for a single workflow and become an index only when parallel work started.

That conditional shape creates avoidable friction:

- `current.md` changes form when a second workflow starts
- Git history for unrelated workflows can collide in one file
- new workflow starts are less visible than new files
- agents have to decide whether `current.md` is a state file or an index

## Decision

`workflow-state/current.md` is always the first workflow-state file to load and is always an index.

Every meaningful workflow gets its own sibling state file under `workflow-state/`, even if it is the only active workflow.

The index should contain only enough information to route a future session.

## Expected Index Content

The index should contain:

- purpose and last-updated date
- active workflow list
- link to each workflow state file
- short status for each workflow
- next routing instruction
- any cross-workflow blockers or coordination notes
- optionally, recently closed workflows when useful for handoff

The index should not duplicate detailed feature behavior, historical rationale, or full per-workflow state.

## Template Behavior

Starter templates should make `workflow-state/current.md` an index from the start. Workflow playbooks should tell agents to create or update a sibling state file whenever they start, pause, close, or split a workflow, then update the index entry.

## Migration Note

This requires a migration for existing Signal projects because `workflow-state/current.md` changes from "active or most recent workflow state" to "workflow-state index."
