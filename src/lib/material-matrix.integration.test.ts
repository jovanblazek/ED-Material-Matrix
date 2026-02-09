import { describe, expect, test } from "vitest"

import { BLUEPRINTS } from "@/lib/data/blueprints"
import {
  computeHeatColor,
  filterBlueprintGroups,
  getParentCheckboxState,
  groupBlueprints,
  sumIngredientsForSelection,
} from "@/lib/material-matrix"

describe("material matrix interaction flow", () => {
  test("selecting a grade updates known material totals and heat intensity", () => {
    const groups = groupBlueprints(BLUEPRINTS)
    const targetGroup = groups.find(
      (group) => group.moduleType === "Plasma Accelerator" && group.name === "Short Range Blaster",
    )

    expect(targetGroup).toBeTruthy()
    if (!targetGroup) return

    const gradeOne = targetGroup.blueprints.find((blueprint) => blueprint.Grade === 1)
    expect(gradeOne).toBeTruthy()
    if (!gradeOne) return

    const byId = new Map(targetGroup.blueprints.map((blueprint) => [blueprint.id, blueprint] as const))
    const baseTotals = sumIngredientsForSelection(new Set(), byId)
    const selectedTotals = sumIngredientsForSelection(new Set([gradeOne.id]), byId)

    expect(baseTotals.get("Nickel") ?? 0).toBe(0)
    expect(selectedTotals.get("Nickel") ?? 0).toBe(1)

    const cold = computeHeatColor(0, 1)
    const hot = computeHeatColor(1, 1)
    expect(cold).not.toBe(hot)
  })

  test("parent checkbox state tracks none/partial/all grade selections", () => {
    const groups = groupBlueprints(BLUEPRINTS)
    const targetGroup = groups.find(
      (group) => group.moduleType === "Plasma Accelerator" && group.name === "Short Range Blaster",
    )

    expect(targetGroup).toBeTruthy()
    if (!targetGroup) return

    const ids = targetGroup.blueprints.map((blueprint) => blueprint.id)
    expect(getParentCheckboxState(ids, new Set())).toBe(false)
    expect(getParentCheckboxState(ids, new Set([ids[0]]))).toBe("indeterminate")
    expect(getParentCheckboxState(ids, new Set(ids))).toBe(true)
  })

  test("search and type filters reduce visible groups without clearing selected totals", () => {
    const groups = groupBlueprints(BLUEPRINTS)
    const targetGroup = groups.find(
      (group) => group.moduleType === "Plasma Accelerator" && group.name === "Short Range Blaster",
    )

    expect(targetGroup).toBeTruthy()
    if (!targetGroup) return

    const gradeOne = targetGroup.blueprints.find((blueprint) => blueprint.Grade === 1)
    expect(gradeOne).toBeTruthy()
    if (!gradeOne) return

    const selectedIds = new Set([gradeOne.id])
    const byId = new Map(groups.flatMap((group) => group.blueprints.map((blueprint) => [blueprint.id, blueprint] as const)))

    const visibleBefore = filterBlueprintGroups(groups, {
      searchQuery: "Short Range Blaster",
      visibleTypes: new Set(["Engineer", "Technology"]),
    })
    const visibleAfterEngineerHidden = filterBlueprintGroups(groups, {
      searchQuery: "Short Range Blaster",
      visibleTypes: new Set(["Technology"]),
    })

    expect(visibleBefore.some((group) => group.key === targetGroup.key)).toBe(true)
    expect(visibleAfterEngineerHidden.some((group) => group.key === targetGroup.key)).toBe(false)

    const totals = sumIngredientsForSelection(selectedIds, byId)
    expect(totals.get("Nickel") ?? 0).toBe(1)
  })
})
