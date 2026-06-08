# Project Agent Guidance

This repository uses the `$signal-method` skill and dogfoods the methodology it ships.

Use the skill for:

- methodology source changes
- roadmap planning
- feature planning
- workflow-state updates
- project documentation creation or updates
- ADR creation or updates
- compound-memory capture
- review for documentation drift
- methodology upgrade or migration work

Do not load it for narrow unrelated tasks that do not touch the methodology or project docs.

The adopted docs root for this repository is `.`. That is intentional because this repository's canonical docs live at the repo root. Generated target projects usually use `signal-docs/`.

At the end of every meaningful Signal workflow step, update the relevant sibling workflow state file, update `workflow-state/current.md`, and tell the user the next step.
