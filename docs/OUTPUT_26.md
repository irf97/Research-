# Output 26 — Audit Requirements

The first prototype successfully captured the ontology skeleton but not the intellectual machinery. This document turns the audit into implementation requirements.

## Preserve

- one canonical graph model
- North Star
- three research agendas
- projects as experimental vehicles
- multiple thesis candidates
- universities/capabilities/evidence/tasks/decisions as linked entities

## Correct

### 1. Interaction Grammar must be first-class

The Spontaneity Interface cannot be one research question. Represent the reusable sequence and its domain instantiations explicitly:

LivingMesh → Proximity → Relevance → Projection → Session → Execution → Reflection → Expiry.

### 2. Football United must model the actual research worlds

Represent at least three comparison conditions:

- globally searchable talent world
- strict proximity-constrained world
- federated proximity world with physical mobility and inter-local competition

Support multiple simultaneous evaluator models rather than one universal talent score, including win contribution, entertainment value, creativity, tactical compatibility, defensive intelligence, development trajectory, chemistry, local models and evaluator-specific preferences.

### 3. Spectrum and Grind need architectural roles

- Spectrum: contextual/personal relevance layer for deciding what should surface now.
- Grind: spontaneity grammar applied to project formation and execution among students and organizations.

### 4. Experiments and hypotheses must be real entities

The initial prototype had no experiment/hypothesis nodes. Version 1 must include them and connect question → hypothesis → experiment → evidence → interpretation.

### 5. Evidence relations require semantics

Never use generic `supports` when evidence only specifies or implements something.

Evidence relationship vocabulary should distinguish:

- conceptual_basis_for
- specifies
- implementation_evidence_for
- test_evidence_for
- empirical_evidence_for
- publication_evidence_for
- contradicts
- leaves_unresolved

A manuscript specifying a hypothesis is not empirical evidence for the hypothesis.

### 6. Provenance is mandatory

Every canonical statement may carry provenance:

- USER_DECISION
- SOURCE_FACT
- AI_INFERENCE
- HYPOTHESIS
- EXPERIMENT_RESULT
- CODE_EVIDENCE

AI inference never silently becomes fact.

### 7. Relation vocabulary and direction are canonical

Avoid ambiguous reversed relations. Prefer relation names that read naturally from source → target.

Examples:

ResearchAgenda → instantiated_by → Project
Project → instantiates → ResearchAgenda
Thesis → investigates → ResearchQuestion
Experiment → tests → Hypothesis
Course → develops → Capability
University → hosts → Lab
Evidence → empirical_evidence_for → Claim
Task → advances → Experiment
Risk → threatens → Milestone

The UI should render inverse labels where useful without storing duplicate inverse edges.

### 8. Typed payload validation

A flexible Node/Relation graph is useful, but each entity type requires a typed domain payload.

Examples:

Thesis requires fields for research question, novelty, hypotheses, experiment, IV/DV, baselines, metrics, falsification, scope boundaries, ethics and evidence gaps.

Experiment requires conditions, participants/agents, intervention, baseline, metrics, data, interpretation rules, ethics and status.

Course requires EC, term, assessment, project percentage, exam risk, prerequisites, university and capability/research contribution.

### 9. Unknown must remain unknown

Do not invent:

- dates
- course eligibility
- skill levels
- evidence maturity
- deadlines
- professor interest
- assessment style

Use pending verification and provenance.

### 10. Context Packs are a core domain

Represent audience, selected nodes, depth, relation traversal rules, inclusion/exclusion, redaction, generated projections and saved presets.

### 11. Local-first requirement

The product should run normally without cloud connectivity. Canonical user state should live locally. GitHub/Vercel/cloud connectors are optional sync/share/deployment layers rather than mandatory truth storage.

## Visual requirement

The home screen must communicate the hierarchy in about five seconds:

North Star
↓
LivingMesh / Infrastructure
Proximity Ecology / Emergence
Spontaneity Interface / Interaction Grammar
↓
Domain experiments
↓
Questions / Experiments / Evidence / Capabilities / Universities / Decisions

Do not visually reduce the programme to a grid of database records.

## Acceptance correction

Version 1 should not be considered successful until it can reliably answer:

- What is ultimately being researched?
- What are the current major research agendas?
- What projects instantiate them and how?
- What thesis candidates exist and what would falsify each?
- What is specified, implemented, tested, empirically evaluated, or only hypothesized?
- What capabilities are missing and what evidence establishes current capabilities?
- Why Tokyo rather than Tsukuba for a specific research/capability goal?
- Which courses actually advance the programme?
- Which decisions block progress?
- What should happen next?
- What exact research subset should a professor, board, collaborator or AI agent receive?
- Can that subset be generated without unrelated context?
