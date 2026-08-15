# Research Operating Console

A local-first research/project operating system for a living research programme.

**North Star:** Human-centred computational infrastructure for physical reality.

This is not a spreadsheet dashboard, Notion clone, kanban board, or static portfolio. It is a canonical entity/relation model with multiple projections: command centre, research graph, thesis laboratory, capability map, university fit, evidence discipline, timeline, and audience-bounded context packs.

## Current V1 stack

- React + TypeScript + Vite
- Dexie / IndexedDB for reliable browser-local persistence
- Zod for runtime domain validation
- React Flow for focused graph navigation
- JSON + Markdown projection/export
- No cloud required for normal operation

The storage layer is intentionally abstractable. A later migration can replace IndexedDB with SQLite WASM + OPFS without changing the domain model or projection layer.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Product invariants

1. One canonical model; documents are projections.
2. Projects are experimental vehicles, not the ontology root.
3. Claims distinguish proposed/specification/implementation/test/empirical/published evidence.
4. AI proposals never silently become canonical state.
5. Unknown remains unknown. Do not invent skill levels, eligibility, dates, or evidence.
6. Relation direction and vocabulary are canonical.
7. Context packs are bounded projections, not database dumps.
8. The interaction layer should help users leave the screen and enter reality.

## Must-read context

- `docs/MASTER_BUILD_PROMPT.md`
- `docs/OUTPUT_24.md`
- `docs/OUTPUT_26.md`
- `AGENTS.md`
