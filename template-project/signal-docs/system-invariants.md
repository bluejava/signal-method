# System Invariants

Purpose
Capture rules that must remain true even as the implementation changes.

Include

- behavioral invariants
- data invariants
- compatibility rules
- safety or integrity constraints

Exclude

- speculative goals
- decision rationale
- routine implementation notes

Split when
Different domains have invariant sets that are usually consulted separately.

## Behavioral Invariants

- Example: user-visible operations must be idempotent when retried.

## Data Invariants

- Example: every stored record must have a stable primary identifier.

## Compatibility Rules

- Example: public API responses remain backward compatible within a major version.

## Operational Constraints

- Example: destructive actions require explicit confirmation.

