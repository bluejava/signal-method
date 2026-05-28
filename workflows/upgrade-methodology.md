# Upgrade Methodology Workflow

## Goal

Upgrade a Signal-enabled project from its adopted methodology version to the current installed skill version without overwriting project-specific truth.

## Step Model

Each step has a user outcome and agent actions. The user outcome is what should be clear to the human. Agent actions are the operational work an AI should perform.

## Steps

1. Start or resume the upgrade workflow.
   - User outcome: the current project version, target version, and next step are explicit.
   - Agent actions: read the project's `signal-method.json`, read this skill's `version` frontmatter as the target methodology version, then read the active workflow state from the configured docs root.
2. Locate the project docs root.
   - User outcome: the upgrade applies to the correct documentation tree.
   - Agent actions: use `signal-method.json` when present, otherwise infer the root from `signal-docs/`, `docs/`, or project guidance.
3. Identify required migrations.
   - User outcome: the path from current version to target version is visible.
   - Agent actions: list each sequential migration guide that must be applied from the project version through the skill version.
4. Apply migrations in order.
   - User outcome: changes are bounded and explainable.
   - Agent actions: follow each migration guide exactly, preserving local project content unless the guide explicitly says to edit it.
5. Reconcile project guidance.
   - User outcome: future agents know the upgraded workflow rules.
   - Agent actions: update Signal-managed guidance blocks, doc indexes, loading strategy, and workflow state only where needed.
6. Validate the upgraded docs.
   - User outcome: there is evidence the migration completed cleanly.
   - Agent actions: run available validation scripts or perform the checks required by the migration guide.
7. Update version metadata.
   - User outcome: the project records the methodology version it now follows.
   - Agent actions: update `signal-method.json` only after all migrations through the target version are complete.
8. Close or pause the upgrade workflow.
   - User outcome: the upgrade state is clear to a future session.
   - Agent actions: update workflow state with completed migrations, remaining work, blockers, and resume instructions.

## Rules

- Apply migrations sequentially. Do not skip intermediate migration guides.
- Treat this skill's `version` frontmatter as the authoritative target methodology version for installed-skill upgrades.
- If the skill version is unavailable, use the highest target version represented by bundled sequential migration guides and document that fallback in workflow state.
- Treat templates as examples for new projects, not as overwrite sources for existing project docs.
- Preserve project-specific canonical truth.
- Do not delete legacy files unless a migration guide explicitly says they are obsolete and the user approves removal.
- Update workflow state at the end of every meaningful step.

## Exit Criteria

An upgrade is complete when:

- all required migrations have been applied in order
- `signal-method.json` matches the target methodology version
- project guidance reflects the upgraded methodology
- validation passes or manual checks are documented
- workflow state is closed or gives clear resume instructions
