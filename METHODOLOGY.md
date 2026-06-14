# Methodology

## Overview

Most AI-assisted development happens in isolated conversations. Each conversation contains useful architectural context, design rationale, and implementation knowledge, then disappears when the session ends.

This methodology treats that as a systems problem, not a prompting problem.

The fix is to build a persistent project memory made of small, structured artifacts that both humans and AI can reliably load, update, and reason over.

This methodology is designed to stand on its own. It defines both a knowledge model and native workflows for initialization, feature work, review, and handoff. External workflow systems can be adapted to Signal, but they are not required.

## The Four Knowledge Classes

### 1. Canonical System Model

These artifacts describe the current truth of the product.

Examples:

- `system-overview.md`
- `product-goals.md`
- `roadmap.md`
- `system-invariants.md`
- `architecture.md`
- `data-model.md`
- `api.md`
- `design-guidelines.md`
- `feature-specs/`

### 2. Decision History

These artifacts explain why important choices were made.

Examples:

- `adr/`

### 3. Compound Knowledge

These artifacts capture reusable lessons from doing the work.

Examples:

- `compound-memory/`

### 4. Process And Agent Behavior

These artifacts explain how people and tools should work within the system.

Examples:

- `agent-guidance/`
- `workflows/`
- `workflow-state/`

## Native Workflows

Signal uses workflows to keep project memory current while work happens. The core workflows are:

- greenfield initialization
- brownfield migration
- roadmap planning
- feature work
- methodology upgrade

When the correct workflow is not obvious, use the workflow chooser first. The chooser is a routing artifact, not a workflow state machine. It selects the right playbook and first artifacts to read before deeper planning or editing begins.

Each workflow has two layers:

- a stable playbook that defines the expected process
- a workflow-state index plus sibling state files that record where current runs stand

The playbook tells humans and agents what the path is. The workflow-state index and sibling state file tell a future session where to resume.

`workflow-state/current.md` is always the stable entry point and always acts as a workflow-state index. Detailed workflow progress lives in sibling files under `workflow-state/`, even when only one workflow is active.

At the end of every meaningful workflow step, the agent should update the sibling workflow state file, update the workflow-state index, and tell the user the next step. This makes the process durable across chat sessions instead of relying on conversation memory.

### Planning From Goals To Features

Signal supports big-picture planning as a first-class workflow. Product direction belongs in `product-goals.md`. Sequencing across phases, iterations, releases, or milestones belongs in `roadmap.md`. Buildable behavior belongs in `feature-specs/`.

The roadmap planning workflow turns broad goals into delivery slices, then promotes selected slices into feature specs that can enter the build-feature workflow. This keeps strategy, sequencing, and implementation detail at different retrieval boundaries without forcing teams into one release vocabulary.

Every meaningful workflow should make its relationship to the roadmap explicit in its sibling workflow state file. Roadmap alignment is required; roadmap containment is not. A workflow can advance a phase, implement a feature candidate, enable later roadmap work, expose a gap in the roadmap, handle maintenance, or be explicitly not applicable. If work falls outside the current roadmap, the workflow should either update `roadmap.md` before closing or record why the roadmap should remain unchanged.

### User Outcomes And Agent Actions

Workflow steps should distinguish between user-visible outcomes and agent operations.

For example, "establish context" is a user-visible outcome: the user should know the agent has loaded the right constraints before planning or editing. The agent operations are more specific: read the documentation index, read `workflow-state/current.md`, read the relevant sibling workflow state file, and load only the relevant canonical docs, feature specs, ADRs, and compound-memory notes.

This distinction keeps the workflow useful for humans without pretending the user must manually perform every context-loading action.

## Methodology Versions And Migrations

Signal-enabled projects should record their adopted methodology version and docs root in `signal-method.json` at the project root. Installed skills should expose their target methodology version in `SKILL.md` frontmatter.

Methodology changes that require existing projects to change should ship with sequential migration guides under `migrations/`. Agents should apply migrations in order from the recorded project version to the installed skill's target methodology version.

Templates are for new projects. Migrations are for existing projects. During an upgrade, agents should preserve project-specific canonical truth and use templates only when a migration explicitly says to add a new file or guidance block.

## The Main Shift

In a traditional repo:

- code is the main truth
- docs are secondary
- chat context is temporary

In this methodology:

- code remains mechanical truth
- tests remain behavioral truth
- specs become conceptual truth
- ADRs preserve historical reasoning

AI performs much better when it can see all four layers instead of reverse-engineering intent from code alone.

The goal is not to replace code, tests, or engineering judgment. The goal is to make the most important project context durable enough that future work can start from signal instead of reconstruction.

## Write For Humans, Structure For AI

This system is not “AI-only documentation.”

The target style is:

- human-first clarity
- explicit headings
- stable terminology
- short sections
- declarative statements
- minimal fluff

If a human can skim a document in 20 seconds and understand the constraint it imposes, an AI usually can too.

## Retrieval-First Partitioning

The central design rule is:

Put information together when it is usually needed together. Split information apart when it is usually needed separately.

This is more useful than organizing only by broad topic. The scarce resource is not disk space. It is context bandwidth:

- what a human has to scan
- what an AI has to load
- what gets confused with what
- what gets pulled into a task unnecessarily

### Four Questions For Placing Information

When deciding whether something belongs in a file, ask:

1. When is this information needed?
2. Who or what needs it?
3. What decisions does it constrain?
4. How stable is it over time?

These questions usually separate artifacts more cleanly than abstract categories do.

## Normative Vs Explanatory Documents

This distinction is critical.

Normative documents describe what should be true now.

Examples:

- system overview
- architecture
- design guidelines
- feature specs

Explanatory documents describe why something is true or what was learned.

Examples:

- ADRs
- migration notes
- compound memory

If you mix these too aggressively, both humans and AI end up reading historical narrative when they needed the current rule.

## Stability And Churn

Stability matters because different rates of change create different maintenance and retrieval behavior.

Broad, frequently loaded canonical docs should stay relatively stable. If a broad doc changes constantly, it usually means volatile detail is sitting in the wrong place.

Volatile content often belongs in narrower artifacts, such as:

- feature-specific specs
- compound-memory notes
- local subsystem docs

Stability is not about importance. It is a clue about role.

## Anti-Fragmentation Rule

More files is not automatically better.

Too many files becomes harmful when:

- people cannot predict where something belongs
- one concept is spread across many files
- every task requires opening many tiny documents
- the boundaries are so subtle that authors make inconsistent choices

A split should happen only when it improves retrieval, maintenance, or scanning more than it increases navigation overhead.

## Base Taxonomy, Not Total Taxonomy

This repository intentionally defines a strong starting point, not a final universal taxonomy.

That is important because most teams do not know their durable pressure points on day one. Trying to enumerate every possible artifact type up front leads to:

- ceremonial empty files
- brittle classifications
- endless taxonomy debates

The methodology should give teams:

- a clear core set of artifacts
- explicit extension rules
- permission to specialize when durable retrieval patterns emerge

## Relation To Other Approaches

This methodology overlaps with several existing practices and frameworks, but it optimizes for a specific problem: preserving durable project knowledge in a form that both humans and AI can reliably retrieve and update.

### Spec-Driven Approaches

Spec-driven approaches such as Open Spec focus primarily on defining intended behavior before and during implementation.

This methodology is compatible with that style, but broader in scope. It also defines where current system truth, historical decisions, reusable lessons, and agent guidance should live over time.

### ADR Practices

ADR-heavy approaches focus on recording important decisions and their rationale.

This methodology includes ADRs as one artifact class, but does not treat them as sufficient on their own. Current truth stays in canonical docs, not in decision records.

### Docs-As-Code

Docs-as-code approaches emphasize versioned documentation inside the repository.

This methodology follows that principle, but adds a retrieval-oriented structure intended to work well for AI-assisted development, not just human reference.

### Workflow Systems

Workflow systems such as compound engineering focus on the execution loop around planning, implementation, review, and learning.

Signal now owns its native workflows and workflow state. External workflow systems should be treated as adapters that map their phases into Signal artifacts. They should not define a competing state machine for the same work.

## What Good Adoption Looks Like

A team using this methodology well should be able to:

- orient a new engineer quickly
- start AI sessions from durable project context instead of re-explaining the system
- resume active workflows from a clear saved state
- preserve architecture and UX intent across features
- update specs as part of delivery, not as an afterthought
- capture reusable solutions so later work gets easier

## What This Repo Is Not

This is not:

- a complete agent framework
- a plugin tied to one AI tool
- a guarantee that code can be generated from prose alone
- an excuse to produce bloated documentation

It is a methodology and template system for making project knowledge durable, navigable, and AI-usable.

## Current Scope

This repo is intentionally focused on:

- methodology
- taxonomy
- workflows
- workflow state
- templates
- lightweight validation
- optional adapter guidance for existing external workflow systems

The next logical layer, once the methodology is dogfooded, is automation that helps agents:

1. detect relevant doc changes
2. suggest ADRs
3. extract compound-memory notes
4. keep canonical docs in sync with delivered behavior

## Optional External Workflow Adapters

Signal workflows are authoritative inside a Signal-enabled project.

If a team already uses a workflow layer such as compound engineering, the preferred integration model is:

- Signal owns the project memory model
- Signal owns workflow state
- the external tool may provide commands or phase labels
- a thin adapter maps those commands or phases into Signal workflow state and artifacts

The most useful integration artifacts are:

- a project-local config that points to the canonical docs
- phase-specific guidance that maps external phases to Signal workflow steps
- lightweight automation helpers that suggest doc updates, ADR candidates, and compound-memory candidates

That integration can be powerful, but it is optional. The core methodology should still make sense and deliver value without it.
