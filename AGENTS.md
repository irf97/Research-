# AGENTS.md — Multi-Agent Build Contract

Build this repository as a sophisticated local-first web application, not a mock dashboard.

Read in this order:

1. `docs/MASTER_BUILD_PROMPT.md`
2. `docs/OUTPUT_24.md`
3. `docs/OUTPUT_26.md`
4. `README.md`

## Product objective

Create a master operating console for an evolving research/education/project/application ecosystem.

The app must make the structure of the work navigable, actionable and selectively shareable.

## Technical direction

Default stack:

- React
- TypeScript
- Vite
- local-first browser persistence
- Zod runtime validation
- React Flow for focused graph views
- clean domain/service/projection separation

Avoid unnecessary backend coupling.

If a Rust component is introduced, it must have a clear justification such as:

- high-integrity import/export validation
- local indexing/search engine
- native desktop companion later
- SQLite/WASM bridge where it materially improves reliability

Do not add Java unless a real requirement emerges. This is a webapp-first project.

## Non-negotiable architectural rules

1. Canonical state is structured and local-first.
2. UI views are projections, never duplicated truth.
3. Entity and relation semantics are typed.
4. AI suggestions enter a proposal/review queue.
5. Evidence type matters; specification != empirical evidence.
6. Unknown values remain unknown.
7. The research graph remains evolvable; no hard-coded permanent three-agenda ontology.
8. Focused graph views beat a global hairball.
9. Context packs must be selective and auditable.
10. Offline normal operation must work.

## Multi-agent workstreams

Parallel agents should coordinate through issues/branches and avoid overlapping files where possible.

### Agent A — Domain Kernel

Own:
- entity schemas
- relation vocabulary
- provenance model
- evidence semantics
- migrations/versioning
- graph query helpers

Exit criteria:
- typed Node union
- typed Relation union
- schema validation tests
- fixtures for all seeded research concepts

### Agent B — Command Centre + Interaction Architecture

Own:
- application shell
- command centre
- three research agenda projection
- Output 24 interaction grammar visualization
- fast navigation / keyboard model
- detail drawer / progressive disclosure

Exit criteria:
- first-screen hierarchy readable in <5 seconds
- no generic dashboard-grid feel
- Output 24 chain visibly represented

### Agent C — Thesis / Experiment / Evidence Laboratory

Own:
- thesis comparison
- experiment editor
- hypothesis/metrics/falsification flows
- evidence graph
- claim-state warnings

Exit criteria:
- can trace question → hypothesis → experiment → evidence → claim
- strong unsupported claims are visibly flagged

### Agent D — Capability / University / Course Intelligence

Own:
- capability gaps
- university/lab/course relationships
- research-fit reasoning
- assessment-risk structure
- unknown/pending-verification behavior

Exit criteria:
- Tokyo vs Tsukuba can be explained from explicit graph paths, not prose blobs

### Agent E — Projection / Context Pack Engine

Own:
- audience presets
- graph subset selection
- traversal depth
- redaction/exclusion
- Markdown + JSON projections
- later Excel/PDF adapter interfaces

Exit criteria:
- professor pack and board pack generated from same canonical state with different boundaries

### Agent F — Quality / Visual Systems Auditor

Own:
- visual review
- accessibility
- responsive behavior
- semantic colors + non-color cues
- ontology consistency audits
- acceptance-test automation where possible

Exit criteria:
- no contradictory relation directions
- no invented canonical facts in seed data
- output meets docs/OUTPUT_24.md and docs/OUTPUT_26.md

## Branch pattern

Use branches such as:

- `feat/domain-kernel`
- `feat/command-centre`
- `feat/thesis-lab`
- `feat/capability-university`
- `feat/context-packs`
- `audit/visual-domain`

Each PR should state:

- what canonical entities/relations it changes
- what projection(s) it adds
- what acceptance questions become answerable
- what remains unknown

## Definition of done

A feature is not done because it renders.

It must:

- operate on canonical state
- survive reload/offline use
- preserve provenance
- avoid duplicated truth
- expose missing/unknown state
- pass type validation
- support at least one real programme workflow
