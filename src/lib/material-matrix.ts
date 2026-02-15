import type { Blueprint } from "@/lib/data/types"
import { MATERIALS } from "@/lib/data/materials"

export type MaterialKind = keyof typeof MATERIALS
export type BlueprintListType = "Engineer" | "Technology"
const EXCLUDED_BLUEPRINT_MODULE_TYPES = new Set(["weapon", "suit"])

export interface MaterialCellMeta {
  kind: MaterialKind
  category: string
  name: string
  grade: number
}

export interface BlueprintGroup {
  key: string
  type: BlueprintListType
  moduleType: string
  name: string
  engineers: ReadonlyArray<string>
  blueprints: ReadonlyArray<Blueprint>
  searchText: string
}

export interface BlueprintFilterState {
  searchQuery: string
  visibleTypes: ReadonlySet<BlueprintListType>
}

export interface SumIngredientsOptions {
  multiplyByGrade?: boolean
}

export function buildMaterialLookup() {
  const lookup = new Map<string, MaterialCellMeta>()

  for (const kind of Object.keys(MATERIALS) as Array<MaterialKind>) {
    for (const category of MATERIALS[kind]) {
      for (const material of category.materials) {
        lookup.set(material.name, {
          kind,
          category: category.name,
          name: material.name,
          grade: material.grade,
        })
      }
    }
  }

  return lookup
}

export function groupBlueprints(blueprints: ReadonlyArray<Blueprint>) {
  const grouped = new Map<string, BlueprintGroup>()

  for (const blueprint of blueprints) {
    if (blueprint.type !== "Engineer" && blueprint.type !== "Technology") {
      continue
    }
    if (EXCLUDED_BLUEPRINT_MODULE_TYPES.has(blueprint.Type.toLowerCase())) {
      continue
    }

    const key = `${blueprint.type}::${blueprint.Type}::${blueprint.Name}`
    const existing = grouped.get(key)

    if (!existing) {
      grouped.set(key, {
        key,
        type: blueprint.type,
        moduleType: blueprint.Type,
        name: blueprint.Name,
        engineers: blueprint.Engineers,
        blueprints: [blueprint],
        searchText:
          `${blueprint.Type} ${blueprint.Name} ${blueprint.Engineers.join(" ")}`.toLowerCase(),
      })
      continue
    }

    grouped.set(key, {
      ...existing,
      engineers: Array.from(
        new Set([...existing.engineers, ...blueprint.Engineers]),
      ),
      blueprints: [...existing.blueprints, blueprint],
      searchText:
        `${existing.searchText} ${blueprint.Engineers.join(" ")}`.toLowerCase(),
    })
  }

  return Array.from(grouped.values())
    .map((group) => ({
      ...group,
      blueprints: [...group.blueprints].sort(
        (a, b) => (a.Grade ?? 0) - (b.Grade ?? 0),
      ),
      engineers: [...new Set(group.engineers)].sort(),
    }))
    .sort((a, b) => {
      if (a.type !== b.type) {
        return a.type.localeCompare(b.type)
      }

      const moduleCompare = a.moduleType.localeCompare(b.moduleType)
      if (moduleCompare !== 0) {
        return moduleCompare
      }

      return a.name.localeCompare(b.name)
    })
}

export function sumIngredientsForSelection(
  selectedBlueprintIds: ReadonlySet<string>,
  blueprintsById: ReadonlyMap<string, Blueprint>,
  options?: SumIngredientsOptions,
) {
  const totals = new Map<string, number>()
  const multiplyByGrade = options?.multiplyByGrade ?? false

  for (const id of selectedBlueprintIds) {
    const blueprint = blueprintsById.get(id)
    if (!blueprint) {
      continue
    }

    const gradeMultiplier = multiplyByGrade ? Math.max(1, blueprint.Grade ?? 1) : 1

    for (const ingredient of blueprint.Ingredients) {
      totals.set(
        ingredient.Name,
        (totals.get(ingredient.Name) ?? 0) + ingredient.Size * gradeMultiplier,
      )
    }
  }

  return totals
}

export function getParentCheckboxState(
  childBlueprintIds: ReadonlyArray<string>,
  selectedBlueprintIds: ReadonlySet<string>,
): boolean | "indeterminate" {
  if (childBlueprintIds.length === 0) {
    return false
  }

  let selectedCount = 0
  for (const id of childBlueprintIds) {
    if (selectedBlueprintIds.has(id)) {
      selectedCount += 1
    }
  }

  if (selectedCount === 0) {
    return false
  }

  if (selectedCount === childBlueprintIds.length) {
    return true
  }

  return "indeterminate"
}

export function filterBlueprintGroups(
  groups: ReadonlyArray<BlueprintGroup>,
  filterState: BlueprintFilterState,
) {
  const query = filterState.searchQuery.trim().toLowerCase()

  return groups.filter((group) => {
    if (!filterState.visibleTypes.has(group.type)) {
      return false
    }

    if (query.length === 0) {
      return true
    }

    return group.searchText.includes(query)
  })
}

export function computeHeatColor(total: number, maxTotal: number) {
  const safeMax = Math.max(1, maxTotal)
  const intensity = Math.min(1, Math.max(0, total / safeMax))
  const hue = 120 - 120 * intensity
  const alpha = 0.18 + intensity * 0.52

  return `hsl(${hue.toFixed(1)} 75% 45% / ${alpha.toFixed(3)})`
}
