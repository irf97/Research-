# Master Build Prompt — Research & Project Operating Console

Build a **local-first master operating console** for an evolving personal research, education, project and application ecosystem.

This is **not a dashboard over a spreadsheet**. It is a **canonical domain model with multiple projections**.

## Purpose

The user must be able to:

1. see the complete intellectual and operational landscape in one place;
2. understand how agendas, questions, projects, skills, experiments, universities, courses, evidence and future work connect;
3. operate on that landscape directly;
4. identify capability gaps, weak evidence, disconnected projects, unresolved decisions and next actions;
5. select a relevant graph subset and export/share it with the correct audience without exposing unrelated information.

The application should feel like an **interactive map of a living research programme**, not generic project management.

## Core principle

> Reality → structured canonical state → audience-specific projection

Excel, PDF, CV, application, research brief, portfolio, AI context pack and timeline are projections. Never duplicate them as truth.

## Current North Star

> **Human-centred computational infrastructure for physical reality.**

Editable and historically versioned.

## Current research agendas

### LivingMesh — Infrastructure

How can physical reality become safely readable and actionable by humans, AI agents, robots, devices, places and institutions?

Concepts: local-first systems, semantic runtime, AI-readable reality, proximity, co-presence, local nodes, authority, personas, identity, permissions, expiry, override, governance, security, hostile-node resistance, P2P networking, local memory, structured machine state, embodied AI, multi-agent coordination, human control, session-based coordination.

### Proximity Ecology — Emergence

What happens when discovery, participation, competition, culture and talent development are deliberately constrained by physical proximity instead of global search?

Concepts: productive friction, physical exploration, locality as ecological boundary, local competition/culture, specialization, rivalry, talent migration, emergent excellence, selective outward transmission, many definitions of quality, mini-nations/culturally distinct local systems, decentralization without isolation.

Football United is a major experimental domain. Do not reduce talent to one score. Support many evaluator models and rankings.

### Spontaneity Interface — Interaction Grammar

What interaction grammar makes a dynamic proximity-governed world understandable and attractive enough that people spontaneously act within it?

Canonical sequence:

Intent → Nearby Reveal → Possibility → Commitment → Session Formation → Real-World Execution → Reflection → Dissolution.

Projects such as Football United, Spectrum and Grind are domain experiments for this grammar. The successful interface should often cause users to leave the screen and enter reality.

**Read `OUTPUT_23.md`, `OUTPUT_24.md`, `OUTPUT_25.md` and `OUTPUT_26.md` before implementing.**

## Entity model

Support typed entities including:

Programme, Research Agenda, Research Question, Hypothesis, Thesis Candidate, Experiment, Project, System/Architecture, Capability, Evidence, Claim, Institution, University, Lab, Course, Person, Opportunity, Application, Decision, Risk, Constraint, Open Question, Requirement, Milestone, Task/Next Action, Artifact and Source.

Projects can belong to multiple agendas. Agendas can merge/split. Multiple thesis candidates may coexist. The three current agendas are seed state, not permanent software categories.

## Relation model

Relationships are first-class and typed. Examples:

ResearchAgenda → instantiated_by → Project
Thesis → investigates → ResearchQuestion
Experiment → tests → Hypothesis
Experiment → implemented_in → Project
Experiment → requires → Capability
Course → develops → Capability
University → hosts → Lab
Project → produces → Evidence
Evidence → implementation_evidence_for / test_evidence_for / empirical_evidence_for → Claim
Task → advances → Experiment
Decision → affects → Plan/Opportunity
Risk → threatens → Milestone

Do not store ambiguous/reversed relations. UI may render inverse labels without duplicating inverse edges.

## Operational state

Entities need metadata for status, importance, maturity, confidence, owner, created/updated time, tags, sources, evidence, assumptions, risks, next actions and notes.

Status vocabulary includes: idea, exploring, specified, designed, prototype, implemented, tested, experimentally validated, published, paused, rejected, superseded.

## Evidence / claim discipline

Visually distinguish:

- Proposed
- Specified
- Implemented
- Tested
- Empirically evaluated
- Published

A manuscript that specifies a hypothesis is not empirical evidence for it. A prototype demonstrates feasibility, not social outcome. Unsupported strong claims must be flagged.

## Provenance

Facts and claims may originate from:

SOURCE_FACT, USER_DECISION, AI_INFERENCE, HYPOTHESIS, EXPERIMENT_RESULT, CODE_EVIDENCE.

Never silently promote AI inference into canonical fact.

## Core views for Version 1

### Command Centre
North Star, agenda map, current thesis candidates, active projects, capability gaps, timeline, exchange candidates, decisions, risks, next actions, recent changes and research-health warnings.

### Research Map
Focused graph with filters, neighborhood expansion, breadcrumbs, relation filtering and no global hairball.

### Research Agenda View
Definition, why it matters, questions, hypotheses, architectures, experiments, projects, capabilities, evidence, institutions/labs, thesis candidates, unresolved problems and next actions.

### Thesis Laboratory
Side-by-side thesis candidates with working title, core problem, RQ, hypotheses, novelty, existing basis, domain, IV/DV, baselines, metrics, required hardware/software/capabilities, ethics, scope boundaries, falsification, best university/lab, existing/missing evidence, risk and publication output.

### Project View
Purpose, agendas touched, questions tested, architecture used, existing/missing implementation, capabilities, experiments, evidence, stakeholders, maturity, risks, actions, thesis value and shareable artifacts.

### Capability Map
Current capability → evidence → desired level → gap → courses/labs/projects → future proof artifact/experiment.

Unknown capability level remains unknown until evidence/decision establishes it.

### University / Exchange View
Why institution matters, unique capabilities, labs, professors, courses, research/thesis fit, possible projects, assessment style, exam/math risk, English availability, prerequisites, eligibility, dates, requirements, contacts, application status, risks, backups and sources.

### Course Planner
EC, term, pillar/category, assessment type, exam risk, project %, prerequisites, capability/research/project contribution, uniqueness, university, status and alternatives.

### Experiment Console
Question → hypothesis → system → participants/agents → conditions → baseline → intervention → metrics → data → interpretation → falsification → ethics → status → evidence.

### Evidence Library
Files/links attached to claims, projects, capabilities, experiments, theses and applications. Show Claim → Evidence → Confidence and unsupported-claim warnings.

### Timeline
Semesters, courses, exchange, experiments, milestones, applications, Research Topics, thesis, publications and builds with dependencies.

### Decision Log
Decision, alternatives, reasoning, evidence, uncertainty, date, consequences, revisit trigger.

## Context Pack / Projection Engine

Select nodes → preview connected context → optionally include dependencies → audience → depth → redact/exclude → generate.

Depth presets: one paragraph, executive brief, detailed brief, full research context, machine-readable JSON.

Audience presets: exchange board, professor, thesis supervisor, collaborator, coding agent, research agent, employer, public portfolio, personal planning.

Examples:

- Exchange Board Pack
- Tokyo Professor Pack
- Football United Research Pack
- CV / Portfolio Pack
- AI Context Pack

A professor pack and board pack must come from the same canon but expose different subgraphs.

## AI assistance

AI may summarize, detect duplicates, propose relations, identify capability gaps, warn about thesis scope, find unsupported claims, propose experiments and generate projection drafts.

Workflow is always:

AI proposal → diff/preview → user accepts/rejects → canonical state changes.

## Search and capture

Strong global search across titles, notes, claims, relations, sources, files, tags, people, courses and questions; show why matched.

Quick capture must accept raw thoughts/papers/project ideas/courses/people/thesis questions/tasks first, then optionally propose structured entities later.

## Visual system

Dense but calm, serious, sophisticated, fast, spatial/graph-oriented, keyboard-friendly, responsive, dark/light mode. Semantic colors plus non-color cues:

Blue = evidence/established capability
Purple = research agenda/thesis continuity
Green = strong fit/validated/recommended
Yellow = uncertain/conditional/verify
Red = blocker/risk/unsupported claim
Grey = administration/context

Every entity page should quickly answer:

1. What is this?
2. Why does it matter?
3. What does it connect to?
4. What is its maturity?
5. What evidence exists?
6. What is missing?
7. What should happen next?
8. Who needs to see it?
9. What can be exported?

Use progressive disclosure.

## Technical architecture

Webapp-first. Preferred stack is React + TypeScript + Vite with a local-first canonical store and typed validation. Current scaffold uses Dexie/IndexedDB; preserve a storage adapter so SQLite WASM + OPFS or a Rust/native persistence layer can replace it later without rewriting the domain/projection layer.

Cloud infrastructure is optional for sharing/deployment, never required for normal operation.

Architect exports for JSON, Markdown, CSV, Excel and standalone HTML; PDF/DOCX/email/CV later.

## Essential loop

Capture → Structure → Relate → Evaluate → Decide → Act → Produce evidence → Update state → Share relevant projection.

## Avoid

Do not create a giant spreadsheet in browser form, generic kanban, Notion clone, static portfolio, graph hairball, task manager with research labels, project-root ontology, system that confuses ideas with evidence, universal importance score, AI facts inserted without review, or duplicated truth across exports.

## Seed data

Programme: I-Tech / Human-centred computational infrastructure for physical reality.

Research agendas: LivingMesh / Infrastructure; Proximity Ecology / Emergence; Spontaneity Interface / Interaction Grammar.

Projects: LivingMesh, IrfTek runtime, Football United, Spectrum, Grind.

Thesis families: Human-Governed Embodied LivingMesh; Proximity-Constrained Talent & Cultural Emergence; Proximity-World Interaction Grammar.

Institutions: University of Tsukuba, The University of Tokyo, Hanyang University, University of Melbourne.

Do not invent missing details. Mark unknown fields as unknown/pending verification.

## Acceptance test

The app succeeds when the user can answer in under 30 seconds:

- What am I ultimately researching?
- What are the major agendas?
- Which projects test each agenda?
- What are current thesis candidates?
- What evidence exists for LivingMesh?
- What is still hypothetical?
- Which capabilities are missing?
- Which university best closes each gap?
- Why Tokyo rather than Tsukuba?
- Which courses advance a research agenda?
- What should happen next?
- Which decisions block progress?
- What should a Tokyo professor receive?
- Can that pack exclude unrelated context?
- Can a board exchange brief be generated from the same canon?
- Can an AI receive only a machine-readable subset?

## Final product principle

> Rich structured reality underneath. Simple relevant projections above.

The console should make the structure of the work visible enough to navigate, improve, connect, execute and selectively expose it.
