# Methodology Map

## Knowledge Classes

1. Canonical system model
2. Decision history
3. Compound knowledge
4. Process and agent behavior

## Placement Rules

- Put current truth in canonical docs.
- Put reasoning in ADRs.
- Put reusable lessons in compound memory.
- Put workflow behavior in agent guidance and workflow playbooks.
- Put active or paused workflow progress in workflow state.
- Keep `workflow-state/current.md` as the workflow-state index; put detailed workflow progress in sibling state files.
- Put adopted methodology version metadata and docs-root discovery in root `signal-method.json`.
- Put installed skill target version metadata in `SKILL.md` frontmatter.

## Partitioning Rules

- Group information that is usually needed together.
- Split information that is usually needed separately.
- Prefer durable retrieval boundaries over abstract taxonomy.
- Keep broad docs relatively stable.
- Move volatile detail into narrower artifacts.

## Anti-Fragmentation Rules

- More files is not automatically better.
- Split only when retrieval, maintenance, or clarity improves.
- Avoid subtle boundaries that make authors guess where content belongs.

## Core Artifacts

- `signal-docs/doc-index.md`
- `signal-docs/system-overview.md`
- `signal-docs/product-goals.md`
- `signal-docs/roadmap.md`
- `signal-docs/system-invariants.md`
- `signal-docs/architecture.md`
- `signal-docs/data-model.md`
- `signal-docs/api.md`
- `signal-docs/design/design-guidelines.md`
- `signal-docs/feature-specs/`
- `signal-docs/adr/`
- `signal-docs/compound-memory/`
- `signal-docs/agent-guidance/`
- `signal-docs/workflow-state/`
- `signal-method.json`
