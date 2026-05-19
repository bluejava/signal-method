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
