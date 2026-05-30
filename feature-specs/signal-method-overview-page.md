# Signal Method Overview Page

## Purpose

Create a standalone HTML page that explains Signal Method as both a positioning artifact and a practical documentation reference.

## Audience

- Developers evaluating whether Signal is worth adopting.
- Agents or maintainers who need a concise explanation of the artifact model.
- Existing users who need a visual workflow map.

## Behavior

The page should:

- explain what Signal Method is
- describe the advantages it offers
- show the four knowledge classes
- detail the native workflows
- explain optional compound adapter compatibility
- surface improvement opportunities revealed by presenting the method publicly
- work as a standalone static HTML file with no build step or new dependencies

## Content Constraints

- Position Signal as a memory architecture and workflow model, not only a spec format.
- Keep Signal workflows authoritative and present external workflow systems as adapters.
- Distinguish current truth, decision history, reusable lessons, and process state.
- Show workflow state as the continuity mechanism across sessions.
- Treat improvement opportunities as product feedback, not as completed methodology changes.

## Improvement Opportunities To Expose

- A workflow chooser would make adoption easier for users who do not know whether they are initializing, migrating, planning, building, reviewing, or upgrading.
- The current repo has strong workflow playbooks, but no standalone native review workflow file even though review and drift detection are important recurring behaviors.
- The value story would be stronger with a concrete before-and-after adoption example or case study.
- The methodology could benefit from explicit success signals for adoption quality, such as faster session startup, fewer repeated explanations, and fewer stale-doc corrections.
- Marketing the concept suggests a named "marketing-driven development" loop: explain the promise, find where the promise is hard to prove, then turn those gaps into roadmap candidates.

## Verification

- Open `signal-method.html` directly in a browser.
- Confirm the page is readable at desktop and mobile widths.
- Run `yarn test` to keep repository validation passing.

