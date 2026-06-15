# Feature Spec - Project Dashboard

## Purpose

Give a human author a fast, scannable view of a Signal-enabled project's current status without requiring them to manually inspect several markdown files.

## Problem

Signal Method preserves project truth across canonical docs, workflow state, feature specs, ADRs, and compound-memory notes. That structure is useful for durable work, but a human returning to a project after time away can still need too much navigation before understanding:

- what the project is
- what is active now
- what the next step is
- what methodology version and docs root are installed
- which docs, feature specs, and ADRs are relevant
- what questions or blockers remain

## Behavior

Signal should provide a generated static HTML dashboard for a project.

The dashboard must:

- derive from existing Signal artifacts instead of becoming canonical truth
- show the adopted methodology version and configured docs root from `signal-method.json`
- show active workflow status and next steps from `workflow-state/current.md`
- link to active sibling workflow state files when present
- surface roadmap alignment, open questions, and blockers from workflow state
- list key canonical docs and whether they exist
- list recent feature specs and ADRs
- include a generated timestamp and source file list
- work as a local file without a web server or build step

## Non-Goals

- Do not require a browser app framework.
- Do not require a dev server.
- Do not make the dashboard a manually maintained status document.
- Do not use AI summarization as the default generation path.
- Do not replace `doc-index.md` or workflow state.

## Generation Model

The dashboard is a derived artifact.

Regenerate it:

- when requested by a human
- at the end of a meaningful Signal workflow step when dashboard freshness matters
- during review if orientation artifacts appear stale

Do not require automatic regeneration after every agent interaction. That would add churn and cost for low-value interactions.

## Inputs

- `signal-method.json`
- configured docs root
- `doc-index.md`
- `workflow-state/current.md`
- active or recent sibling workflow state files
- `product-goals.md`, when present
- `roadmap.md`, when present
- `feature-specs/`
- `adr/`
- `compound-memory/`

## Output

Default output:

- `<docsRoot>/project-dashboard.html`

The output is an HTML file with embedded CSS and no runtime dependencies.

## Constraints

- The generator must be dependency-free Node.js.
- The generator must support the normal `signal-docs/` docs root and this source repository's root docs mode where `docsRoot` is `"."`.
- The dashboard must include source links so a reader can jump from summary to canonical artifacts.
- Missing optional docs should be displayed as missing, not treated as generation failures.

## Roadmap Alignment

- Alignment type: roadmap gap
- Roadmap link: none; this repository has no root `roadmap.md` yet
- Product goal link: none; this repository has no root `product-goals.md` yet
- How this workflow advances or affects the roadmap: closes a human-orientation gap discovered while dogfooding Signal Method
- Roadmap update needed before close: no; this source repository still has no root roadmap, and the feature spec records the gap

## Acceptance Criteria

- A dependency-free script can generate `project-dashboard.html` for a Signal-enabled project.
- The template project includes an example generated dashboard.
- The portable skill includes the generator script and the template dashboard.
- Repository docs explain the dashboard as a derived orientation artifact.
- Validation checks include the new dashboard files and generator script.
