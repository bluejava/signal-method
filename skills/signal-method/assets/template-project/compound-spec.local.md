# Compound Spec Local Config

Purpose
Provide a small project-local configuration surface for compound-style workflows.

Include

- where canonical docs live
- which files are normative
- which workflow checks should run in each phase
- project-specific rules for doc sync

Exclude

- the full contents of the docs themselves
- historical decisions
- one-off task notes

Split when
The project needs separate local config for multiple tools or environments.

## Canonical Docs Root

`signal-docs/`

## Normative Files

- `signal-docs/doc-index.md`
- `signal-docs/system-overview.md`
- `signal-docs/system-invariants.md`
- `signal-docs/architecture.md`
- `signal-docs/data-model.md`
- `signal-docs/api.md`
- `signal-docs/design/design-guidelines.md`
- `signal-docs/feature-specs/`

## Historical And Reusable Knowledge

- `signal-docs/adr/`
- `signal-docs/compound-memory/`

## Phase Expectations

### Plan

- require a feature spec before implementation
- identify likely canonical doc changes
- identify likely ADR need

### Work

- implement against feature spec and canonical docs
- note doc drift discovered during implementation

### Review

- check invariants
- check architecture, data, API, and design drift
- check ADR need
- check compound-memory value

### Compound

- update canonical docs
- add ADRs where needed
- capture reusable patterns
