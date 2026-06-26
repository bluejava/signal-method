# Documentation Index

This file is the entry point to this repository's live Signal context.

The repository root is the Signal Method source and distribution surface. This
`signal-docs/` folder is the dogfooded project-context layer used to maintain
that source repo, matching the default layout used by adopted projects.

## Orientation

- `../README.md`: short overview and repo map.
- `../signal-method.html`: standalone half-marketing, half-documentation overview of the methodology, advantages, workflows, and improvement opportunities.
- `../METHODOLOGY.md`: conceptual model and design principles.
- `../GETTING-STARTED.md`: practical adoption path.
- `../signal-method.json`: adopted methodology version and docs root metadata for this repository.
- `workflow-state/current.md`: workflow-state index for active and recently closed workflows in this repository.
- `workflow-state/version-0.5.0.md`: detailed release workflow state for the workflow-state index convention and `0.5.0` release.
- `workflow-state/version-0.6.0.md`: detailed release workflow state for the roadmap alignment convention and `0.6.0` release.
- `workflow-state/version-0.7.0.md`: detailed release workflow state for the project dashboard convention and `0.7.0` release.
- `workflow-state/docs-root-normalization.md`: detailed migration state for moving this repo's live Signal context into `signal-docs/`.
- `workflow-state/version-0.7.1.md`: detailed patch release workflow state for the `signal-docs/` dogfooding layout normalization.
- `../AGENTS.md`: project-specific agent guidance for working in this repository.
- `../LICENSE`: MIT license terms.

## Reference

- `../artifact-taxonomy.md`: formal rules for each artifact type.
- `feature-specs/signal-method-overview-page.md`: feature intent for the standalone overview page.
- `feature-specs/version-0.4.1.md`: patch release scope and no-migration decision for version 0.4.1.
- `feature-specs/version-0.5.0.md`: minor release scope and migration decision for the workflow-state index convention.
- `feature-specs/version-0.6.0.md`: minor release scope and migration decision for roadmap alignment in workflow state.
- `feature-specs/version-0.7.0.md`: minor release scope and migration decision for the generated project dashboard.
- `feature-specs/version-0.7.1.md`: patch release scope and no-migration decision for the source repo docs-root normalization.
- `feature-specs/roadmap-alignment.md`: feature intent for explicit workflow-to-roadmap traceability.
- `feature-specs/project-dashboard.md`: feature intent for the generated human-orientation dashboard.
- `feature-specs/workflow-state-index.md`: feature intent for treating `workflow-state/current.md` as a permanent workflow-state index.
- `feature-specs/workflow-chooser.md`: feature intent for the workflow chooser routing artifact.
- `../migrations/README.md`: rules for methodology version migrations.
- `../migrations/0.1.0-to-0.2.0.md`: migration guide for adding workflow state and version metadata.
- `../migrations/0.2.0-to-0.3.0.md`: migration guide for the breaking rename from Signal Methodology to Signal Method.
- `../migrations/0.3.0-to-0.4.0.md`: migration guide for roadmap planning artifacts and workflow guidance.
- `../migrations/0.4.1-to-0.5.0.md`: migration guide for converting `workflow-state/current.md` into a permanent index.
- `../migrations/0.5.0-to-0.6.0.md`: migration guide for adding roadmap alignment to sibling workflow state files.
- `../migrations/0.6.0-to-0.7.0.md`: migration guide for adding the generated project dashboard.
- `../compound-workflow.md`: legacy compatibility notes for compound-style workflows.
- `../adapters/compound/README.md`: optional adapter guidance for existing compound engineering projects.
- `../skills/signal-method/SKILL.md`: portable skill instructions for applying the methodology in a repo.
- `../skills/signal-method/references/workflow-chooser.md`: portable workflow routing guide for installed agents.
- `../skills/signal-method/scripts/generate-dashboard.js`: portable dashboard generator for adopted projects.
- `../skills/signal-method/assets/template-project/`: bundled template used by the installed skill bootstrap.
- `doc-index.md`: this map.

## Operational Playbooks

- `../workflows/choose-workflow.md`: routing guide for selecting the correct Signal workflow before planning, editing, reviewing, or upgrading.
- `../workflows/new-project.md`: starting from zero.
- `../workflows/migrate-existing-project.md`: adding the system to an existing product.
- `../workflows/plan-roadmap.md`: turning product goals into phases and feature specs.
- `../workflows/build-feature.md`: doing feature work inside the system.
- `../workflows/upgrade-methodology.md`: upgrading an adopted project to a newer Signal methodology version.

## Template Project

- `../template-project/signal-docs/README.md`: orientation for the project-level docs folder.
- `../template-project/signal-method.json`: adopted methodology version and docs root metadata.
- `../template-project/signal-docs/doc-index.md`: entry point for the project-level documentation graph.
- `../template-project/signal-docs/project-dashboard.html`: generated starter dashboard for a Signal-enabled project.
- `../template-project/signal-docs/system-overview.md`: conceptual system model.
- `../template-project/signal-docs/product-goals.md`: product direction and planning constraints.
- `../template-project/signal-docs/roadmap.md`: phases, iterations, releases, or milestones with feature candidates.
- `../template-project/signal-docs/system-invariants.md`: rules that must always remain true.
- `../template-project/signal-docs/architecture.md`: technical structure.
- `../template-project/signal-docs/data-model.md`: shared entities and relationships.
- `../template-project/signal-docs/api.md`: interfaces and contracts.
- `../template-project/signal-docs/design/design-guidelines.md`: product consistency rules.
- `../template-project/signal-docs/feature-specs/example-feature.md`: example feature spec.
- `../template-project/signal-docs/adr/ADR-001-example.md`: example decision record.
- `../template-project/signal-docs/compound-memory/example-pattern.md`: example reusable lesson.
- `../template-project/signal-docs/workflow-state/current.md`: workflow-state index and resume routing.
- `../template-project/signal-docs/agent-guidance/doc-loading-strategy.md`: minimal loading guidance for AI work.
- `../template-project/signal-docs/agent-guidance/compound-phase-rules.md`: compatibility rules for compound phases.
- `../template-project/compound-spec.local.md`: example local config for compound-oriented tooling.
