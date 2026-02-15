# AGENTS.md

## Overview

- Project: Elite Dangerous engineering material planner.
- Stack: TanStack Start + TanStack Router, React 19, TypeScript (strict), Tailwind CSS v4, shadcn/ui (New York style), Vitest.
- Main UX: `/` renders a material heatmap page with 3 material tables (`encoded`, `raw`, `manufactured`) and a blueprint selector panel.

## Runbook

- Install: `pnpm install`
- Dev server: `pnpm dev` (Vite on port `3000`)
- Build: `pnpm build`
- Preview build: `pnpm preview`
- Tests: `pnpm test`
- Typecheck: `pnpm typecheck`
- Lint: `pnpm lint`
- Auto-fix lint: `pnpm lint:fix`

## Architecture Map

- Router shell: `src/routes/__root.tsx`
  - Injects `src/styles.css` and TanStack devtools.
- Home route: `src/routes/index.tsx`
  - Thin route file; renders `MaterialMatrixPage`.
- Main feature UI: `src/components/material-matrix-page.tsx`
  - Uses Zustand store for persisted material-selection state and legend toggles.
  - Local state remains for transient UI controls (expanded groups, search, type filters, show-selected toggle).
  - Renders legend card, 3 tables, and blueprint panel.
- Persisted state store: `src/lib/state/material-matrix-store.ts`
  - Persists to localStorage: `selectedBlueprintIds`, `multiplyByGrade`, `normalizePerTable`.
  - Exposes hydration helper to avoid first-render flicker before persisted values load.
- Pure feature logic: `src/lib/material-matrix.ts`
  - `groupBlueprints`, `sumIngredientsForSelection`, `filterBlueprintGroups`, `getParentCheckboxState`, `computeHeatColor`, `buildMaterialLookup`.
  - Prefer adding logic here for testability.
- Source data:
  - `src/lib/data/materials.ts` (matrix layout by kind/category/grade)
  - `src/lib/data/blueprints.ts` (large static blueprint list)
  - `src/lib/data/types.ts` (data contracts)
- UI primitives: `src/components/ui/*` (shadcn components)

## Current Product Defaults

- Blueprint scope: only `Engineer` + `Technology` entries are included in grouping/filtering.
- Grouping key: `type + Type + Name`; grade variants are selectable children.
- Parent checkbox toggles all grades in a group; supports indeterminate state.
- Search targets module type, blueprint name, and engineer names (with deferred filtering for smoother typing).
- Blueprint filter controls are in a dropdown menu (`Engineer`, `Technology`, and `Show selected only`).
- Clearing selected blueprints is behind a dropdown menu confirmation item.
- Heatmap color uses dynamic normalization (`0` -> green, current selected max -> red).
- Heatmap normalization can be toggled: per-table min/max (default) or shared global min/max.
- Non-matrix ingredients are intentionally ignored in table totals (tracked as "ignored" count in UI).

## Data Shape Notes

- Approximate dataset size:
  - Blueprint rows: `1172` total, `1025` in scope, `399` grouped entries.
  - Materials: `108` matrix materials (`raw:28`, `encoded:30`, `manufactured:50`).
- Material grades are dynamic per kind (`raw` max 4, others max 5), not hardcoded in rendering.

## Testing

- Unit tests are in:
  - `src/lib/material-matrix.test.ts`
  - `src/lib/material-matrix.integration.test.ts`
- Tests focus on pure logic/flow (grouping, summing, filters, parent-state, heat color).

## Conventions and Gotchas

- Use `@/*` path alias (configured in `tsconfig.json`).
- `routeTree.gen.ts` is generated; do not hand-edit.
- Keep new feature logic in pure helpers when possible, then consume from route/component.
