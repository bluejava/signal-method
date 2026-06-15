# Project Documentation

This directory is the canonical documentation layer for a project using this methodology.

Start with:

1. `doc-index.md`
2. `project-dashboard.html` for quick human orientation
3. `workflow-state/current.md`
4. `system-overview.md`
5. `system-invariants.md`
6. `architecture.md`
7. `data-model.md`

Then add or expand the rest as the project earns them.

For broader planning, add:

1. `product-goals.md`
2. `roadmap.md`
3. `feature-specs/`

Use these documents to preserve:

- current system truth
- decision history
- reusable implementation knowledge
- project-specific agent guidance
- workflow-state index and sibling state files for cross-session continuity

`project-dashboard.html` is generated from these artifacts. Treat the markdown files as source truth and regenerate the dashboard when a fresh overview is useful.
