# Version 0.7.0

## Purpose

Release the generated project dashboard as a minor Signal Method update.

## Scope

Version `0.7.0` includes:

- `project-dashboard.html` as a generated human-orientation artifact
- dependency-free `scripts/generate-dashboard.js`
- bundled skill support for dashboard generation
- starter dashboard in the template project
- guidance that the dashboard is derived from markdown truth and must not become canonical truth
- workflow guidance for refreshing the dashboard when human-facing status changes materially
- migration guidance for existing projects that want the dashboard surface

## Migration Decision

A migration is required from `0.6.0` to `0.7.0`.

Reason:
Existing projects using `0.6.0` will not automatically have `project-dashboard.html`, and the new dashboard generator is now part of the standard Signal orientation surface. The migration is additive: generate the dashboard, optionally link it from local docs, and update version metadata after the dashboard exists.

## Verification

- Version metadata surfaces agree on `0.7.0`.
- `migrations/0.6.0-to-0.7.0.md` exists in the source repo and bundled skill.
- The template project and bundled skill template match.
- `node scripts/validate-docs.js` passes.
- `git diff --check` passes.
