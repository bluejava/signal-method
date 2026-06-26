# Project Agent Guidance

This repository uses the `$signal-method` skill and dogfoods the methodology it ships.

This repo has two roles:

- Source and distribution repo: root files such as `METHODOLOGY.md`, `workflows/`, `migrations/`, `skills/signal-method/`, and `template-project/` define and ship Signal Method.
- Signal-enabled project: `signal-docs/` contains the live project-context resources this repo uses to maintain itself, just like an adopted project normally would.

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

The adopted docs root for this repository is `signal-docs/`. That is intentional: the repo root is the methodology source/distribution surface, while `signal-docs/` is this repo's own dogfooded Signal context.

At the end of every meaningful Signal workflow step, update the relevant sibling workflow state file, update `signal-docs/workflow-state/current.md`, and tell the user the next step.
