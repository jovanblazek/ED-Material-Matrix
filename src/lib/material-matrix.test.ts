import { describe, expect, test } from "vitest"

import { BLUEPRINTS } from "@/lib/data/blueprints"
import {
  computeHeatColor,
  getParentCheckboxState,
  groupBlueprints,
  sumIngredientsForSelection,
} from "@/lib/material-matrix"

describe("groupBlueprints", () => {
  test("keeps only Engineer and Technology and sorts grades", () => {
    const groups = groupBlueprints(BLUEPRINTS)

    expect(groups.length).toBeGreaterThan(0)
    for (const group of groups) {
      expect(["Engineer", "Technology"]).toContain(group.type)
      const grades = group.blueprints.map((blueprint) => blueprint.Grade ?? 0)
      const sorted = [...grades].sort((a, b) => a - b)
      expect(grades).toEqual(sorted)
    }
    expect(
      groups.some(
        (group) => group.moduleType === "Weapon" || group.moduleType === "Suit",
      ),
    ).toBe(false)
  })
})

describe("sumIngredientsForSelection", () => {
  test("sums selected blueprint ingredients without grade multipliers by default", () => {
    const first = BLUEPRINTS.find(
      (blueprint) =>
        blueprint.type === "Engineer" &&
        blueprint.Type === "Plasma Accelerator" &&
        blueprint.Name === "Short Range Blaster" &&
        blueprint.Grade === 1,
    )
    const second = BLUEPRINTS.find(
      (blueprint) =>
        blueprint.type === "Engineer" &&
        blueprint.Type === "Plasma Accelerator" &&
        blueprint.Name === "Short Range Blaster" &&
        blueprint.Grade === 2,
    )

    expect(first).toBeTruthy()
    expect(second).toBeTruthy()

    const byId = new Map(
      [first, second]
        .filter((value): value is NonNullable<typeof value> => Boolean(value))
        .map((blueprint) => [blueprint.id, blueprint] as const),
    )

    const totals = sumIngredientsForSelection(new Set(byId.keys()), byId)

    expect(totals.get("Nickel")).toBe(2)
    expect(totals.get("Modified Consumer Firmware")).toBe(1)
  })

  test("applies grade multipliers when enabled", () => {
    const first = BLUEPRINTS.find(
      (blueprint) =>
        blueprint.type === "Engineer" &&
        blueprint.Type === "Plasma Accelerator" &&
        blueprint.Name === "Short Range Blaster" &&
        blueprint.Grade === 1,
    )
    const second = BLUEPRINTS.find(
      (blueprint) =>
        blueprint.type === "Engineer" &&
        blueprint.Type === "Plasma Accelerator" &&
        blueprint.Name === "Short Range Blaster" &&
        blueprint.Grade === 2,
    )

    expect(first).toBeTruthy()
    expect(second).toBeTruthy()

    const byId = new Map(
      [first, second]
        .filter((value): value is NonNullable<typeof value> => Boolean(value))
        .map((blueprint) => [blueprint.id, blueprint] as const),
    )

    const totals = sumIngredientsForSelection(new Set(byId.keys()), byId, {
      multiplyByGrade: true,
    })

    expect(totals.get("Nickel")).toBe(3)
    expect(totals.get("Modified Consumer Firmware")).toBe(2)
  })
})

describe("computeHeatColor", () => {
  test("returns low, mid, and max colors", () => {
    const low = computeHeatColor(0, 10)
    const mid = computeHeatColor(5, 10)
    const high = computeHeatColor(10, 10)

    expect(low).toContain("120.0")
    expect(mid).toContain("60.0")
    expect(high).toContain("0.0")
  })
})

describe("getParentCheckboxState", () => {
  test("handles none, partial, and all checked", () => {
    const ids = ["a", "b", "c"]

    expect(getParentCheckboxState(ids, new Set())).toBe(false)
    expect(getParentCheckboxState(ids, new Set(["a"]))).toBe("indeterminate")
    expect(getParentCheckboxState(ids, new Set(ids))).toBe(true)
  })
})
