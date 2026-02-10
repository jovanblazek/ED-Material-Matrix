# ED Material Matrix

A web app for **Elite Dangerous** players to plan engineering materials.

It lets you select blueprints and instantly see which materials you need most, using a color heatmap across the full material matrix.

## For Players

### What this tool does

- Shows all engineering materials in 3 tables:
  - `Encoded`
  - `Raw`
  - `Manufactured`
- Groups materials by category, with columns by grade.
- Lets you select blueprint grades from a side panel.
- Sums required ingredient quantities across selected blueprints.
- Colors table cells from green to red based on demand:
  - Green = low / zero demand
  - Red = highest demand in your current selection

### How to use

1. Open the app.
2. In the blueprint panel, search and filter blueprints.
3. Expand a group and check specific grades (or toggle the whole group).
4. Review the three material tables to see demand hotspots.

### Current scope

- Blueprint types included: `Engineer` and `Technology`.
- Ingredients not present in the 3 matrix tables are intentionally ignored in table totals.

---

## For Developers

### Tech stack

- TanStack Start + TanStack Router
- React 19 + TypeScript (strict)
- Tailwind CSS v4
- shadcn/ui + Radix UI
- Vitest + ESLint

### Requirements

- Node.js 20+
- pnpm

### Run locally

```bash
pnpm install
pnpm dev
```

App runs on `http://localhost:3000`.
