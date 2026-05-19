# Compound Phase Rules

Purpose
Define how compound-style phases should interact with this project's documentation layer.

Include

- phase-specific loading rules
- expected documentation outputs
- rules for keeping context narrow

Exclude

- product architecture details as the main content
- full copies of feature specs or ADRs
- one-off implementation chatter

Split when
Different tools or teams need materially different phase rules.

## Plan

- read `signal-docs/doc-index.md`
- read `signal-docs/system-overview.md`
- read `signal-docs/system-invariants.md`
- read only task-relevant canonical docs
- update or create a feature spec before implementation
- identify likely canonical doc changes

## Work

- implement from the feature spec
- keep loaded context narrow
- note which docs appear stale during implementation

## Review

- verify invariants still hold
- verify architecture, data, API, and design docs still match reality
- identify ADR candidates
- identify compound-memory candidates

## Compound

- update changed canonical docs
- add ADRs for durable decisions
- add compound-memory notes for reusable lessons
- refresh `signal-docs/doc-index.md` if navigation changed
