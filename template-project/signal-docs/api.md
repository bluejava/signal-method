# API

Purpose
Describe the system interfaces and contracts.

Include

- endpoints
- request and response contracts
- events
- service boundaries

Exclude

- internal algorithm detail
- feature implementation notes
- historical decision rationale

Split when
The system contains multiple independent APIs or interface families.

## Public Interfaces

Document externally consumed APIs first.

## Internal Interfaces

Document important internal service or module contracts if they are stable enough to matter.

## Events And Messages

Document event names, payloads, and delivery expectations.

## Compatibility Notes

Describe versioning and backward-compatibility rules where relevant.

