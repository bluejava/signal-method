# Methodology Migrations

This directory contains sequential migration guides for upgrading Signal-enabled projects between methodology versions.

## Rules

- Apply migrations in order.
- Do not infer a migration from the latest template.
- Do not overwrite project-specific docs unless a migration explicitly requires it.
- Update `signal-method.json` only after the migration completes.
- Record upgrade progress in workflow state.

## Version Policy

- Patch versions clarify wording or fix errors and usually do not require migrations.
- Minor versions may add artifacts, workflow steps, or guidance and should include a migration guide when existing projects need updates.
- Major versions may change artifact semantics or workflow contracts and should include explicit migration guidance.

## Available Migrations

- `0.1.0-to-0.2.0.md`: add workflow state and version metadata.
- `0.2.0-to-0.3.0.md`: rename Signal Methodology to Signal Method.
- `0.3.0-to-0.4.0.md`: add roadmap planning artifacts and workflow guidance.
- `0.4.1-to-0.5.0.md`: make `workflow-state/current.md` a permanent workflow-state index.
- `0.5.0-to-0.6.0.md`: add roadmap alignment to sibling workflow state files.
- `0.6.0-to-0.7.0.md`: add the generated project dashboard.
