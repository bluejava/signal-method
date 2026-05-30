# Workflow Chooser

Use this reference when the user's request does not clearly identify which Signal workflow should run.

This chooser is a routing aid. Signal workflow state remains authoritative for current or paused work.

## Quick Decision Tree

1. If the task is to add Signal to a project, classify the project first.
   - New project or mostly empty repo: use greenfield initialization.
   - Existing codebase or product: use brownfield migration.
2. If the task is to decide what to build, sequence goals, plan phases, or choose feature candidates, use roadmap planning.
3. If the task is to implement, modify, or remove product behavior, use feature work.
4. If the task is to upgrade an adopted project between Signal Method versions, use methodology upgrade.
5. If the task is to review delivered work or detect documentation drift, use the review steps in feature work for now.
6. If the project uses compound engineering or asks for compound compatibility, map external phases through the compound adapter while keeping Signal workflow state authoritative.

## Route Matrix

| User request shape | Route | First artifacts to read | Expected output |
| --- | --- | --- | --- |
| "Set up Signal here" in a new project | Greenfield initialization | repo shape, `signal-method.json` if present, existing docs conventions | starter docs, configured docs root, workflow state |
| "Add Signal to this codebase" | Brownfield migration | repo shape, existing docs, code structure, `signal-method.json` if present | current-truth docs, migration state, high-value ADR candidates |
| "What should we build next?" | Roadmap planning | doc index, workflow state, `product-goals.md`, `roadmap.md`, relevant canonical docs | updated goals, sequenced slices, feature candidates |
| "Build/change this feature" | Feature work | doc index, workflow state, relevant canonical docs, feature spec if present | feature spec, implementation, tests, doc reconciliation |
| "Upgrade Signal Method" | Methodology upgrade | `signal-method.json`, installed skill version, migration guides, active workflow state | sequential migrations, validation, updated version metadata |
| "Review this for drift" | Feature review path | workflow state, feature spec, invariants, architecture, data/API/design docs | findings, required doc updates, ADR or compound-memory assessment |
| "Use compound phases" | Compound adapter | compound phase mapping, active Signal workflow state, relevant canonical docs | mapped phase outputs without competing workflow state |

## Review Route

Review is currently a route through feature work and adapter guidance. Check invariant drift, architecture drift, data model drift, API drift, design drift, ADR need, and compound-memory value.

If review becomes a frequent standalone entry point in a project, recommend adding a native review workflow to the methodology.

