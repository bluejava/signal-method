# Signal Method

Current methodology version: `0.6.0`

This repository captures a standalone methodology for building software with AI as a persistent collaborator instead of a stateless chat tool.

The core idea is simple:

1. Store the current truth of the system in lightweight canonical docs.
2. Store important reasoning in ADRs.
3. Store reusable lessons in compound memory.
4. Guide humans and agents through durable workflows that update those artifacts as work progresses.

The result is a project that behaves more like a durable knowledge system than a pile of source files.

Signal defines its own native workflows for initialization, roadmap planning, and feature work. External workflow systems can be adapted to Signal, but they are not peers of the core methodology.

The repo version is recorded in `package.json`. The installable skill exposes its target methodology version in `skills/signal-method/SKILL.md` frontmatter. Projects that adopt the methodology record their local adopted version and docs root in `signal-method.json`.

License: MIT.

## Install As An Agent Skill

The installable skill is in `skills/signal-method/`.

If you are asking an agent harness to install Signal Method from this GitHub
repository, give it the repository URL and tell it to install the skill at:

```text
skills/signal-method
```

For skills.sh-compatible installers:

```bash
npx skills add bluejava/signal-method --skill signal-method
```

or install directly from the skill folder:

```bash
npx skills add https://github.com/bluejava/signal-method/tree/main/skills/signal-method
```

For Codex-style skill installers, that usually means one of these forms:

```bash
install-skill-from-github.py --repo bluejava/signal-method --path skills/signal-method
```

```text
https://github.com/bluejava/signal-method/tree/main/skills/signal-method
```

Do not install the repository root as the skill. The root contains the full
methodology source, workflows, migrations, templates, and publication metadata;
the portable skill package starts at `skills/signal-method/`.

## What Is In This Repo

- `signal-method.html`: a standalone half-marketing, half-documentation overview of the method, workflows, advantages, and improvement opportunities.
- `METHODOLOGY.md`: the conceptual model and operating principles.
- `artifact-taxonomy.md`: the formal definition of each artifact type.
- `workflows/choose-workflow.md`: the routing guide for selecting the right Signal workflow before starting work.
- `compound-workflow.md`: legacy compatibility notes for compound-style workflows.
- `adapters/compound/`: an optional adapter for projects that already use compound engineering.
- `skills/signal-method/`: a portable skill for applying the methodology.
- `doc-index.md`: the map of this repository.
- `workflows/`: operational playbooks for new projects, migrations, roadmap planning, feature work, and methodology upgrades.
- `migrations/`: sequential guides for upgrading existing Signal-enabled projects.
- `template-project/`: a starter project scaffold with self-describing templates.
- `LICENSE`: MIT license terms.

## Design Principles

- Optimize for retrieval, not for abstract taxonomy.
- Separate current truth from decision history.
- Keep broad canonical docs relatively stable.
- Move volatile detail into narrower local artifacts.
- Split files only when retrieval, maintenance, or scanning improves.
- Write for human clarity with AI-friendly structure.

## Positioning

This project is not mainly a spec format.

It is a memory architecture and workflow model for software development: a way to preserve current truth, reasoning, active workflow state, and reusable lessons so future humans and AI agents can build with better context.

## Relation To Other Approaches

This methodology overlaps with several existing approaches, but it optimizes for one specific problem: preserving durable project knowledge in a form that both humans and AI can reliably retrieve and update.

- Spec-driven approaches such as Open Spec focus primarily on defining intended behavior before and during implementation. This methodology is compatible with that style, but is broader in scope: it also defines where current system truth, historical decisions, reusable lessons, and agent guidance should live over time.
- ADR practices focus on recording important decisions and their rationale. This methodology includes ADRs as one artifact class, but does not treat them as sufficient on their own. Current truth stays in canonical docs, not in decision records.
- Docs-as-code approaches emphasize versioned documentation within the repository. This methodology follows that principle, but adds a retrieval-oriented structure intended to work well for AI-assisted development, not just human reference.
- Workflow systems such as compound engineering focus on the execution loop around planning, implementation, review, and learning. Signal now defines its own workflow state and playbooks. Existing workflow systems should be treated as optional adapters that map into Signal artifacts.

## Starting Points

- Read `METHODOLOGY.md` first.
- Use `GETTING-STARTED.md` if you want to adopt this in a real project.
- Use `signal-docs/` as the default folder for Signal-related project files.
- Copy `template-project/signal-docs/` into a project repo when you are ready to dogfood it.
- Use `workflows/plan-roadmap.md` when broad goals need to become phases and feature specs before implementation.
- Record roadmap alignment in sibling workflow state files so active work names the phase, feature candidate, enabling work, roadmap gap, maintenance reason, or not-applicable status it represents.
- If a project already has an established `docs/` convention, keep that path only when changing it would add more confusion than value.
- The installed skill is self-contained and carries its own bundled project template plus an `AGENTS.md` routing snippet.
