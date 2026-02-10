import { useMemo, useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

import type {
  BlueprintGroup,
  BlueprintListType,
  MaterialKind,
} from "@/lib/material-matrix"
import { BLUEPRINTS } from "@/lib/data/blueprints"
import { MATERIALS } from "@/lib/data/materials"
import {
  buildMaterialLookup,
  computeHeatColor,
  filterBlueprintGroups,
  getParentCheckboxState,
  groupBlueprints,
  sumIngredientsForSelection,
} from "@/lib/material-matrix"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const MATERIAL_KINDS: ReadonlyArray<MaterialKind> = [
  "encoded",
  "raw",
  "manufactured",
]
const MATERIAL_GRADES = Array.from(
  new Set(
    MATERIAL_KINDS.flatMap((kind) =>
      MATERIALS[kind].flatMap((category) =>
        category.materials.map((material) => material.grade),
      ),
    ),
  ),
).sort((a, b) => a - b)
const BLUEPRINT_GROUPS = groupBlueprints(BLUEPRINTS)
const BLUEPRINTS_BY_ID = new Map(
  BLUEPRINT_GROUPS.flatMap((group) =>
    group.blueprints.map((blueprint) => [blueprint.id, blueprint] as const),
  ),
)
const MATERIAL_LOOKUP = buildMaterialLookup()

export function MaterialMatrixPage() {
  const [selectedBlueprintIds, setSelectedBlueprintIds] = useState<Set<string>>(
    new Set(),
  )
  const [expandedGroupKeys, setExpandedGroupKeys] = useState<Set<string>>(
    new Set(),
  )
  const [searchQuery, setSearchQuery] = useState("")
  const [visibleTypes, setVisibleTypes] = useState<Set<BlueprintListType>>(
    new Set<BlueprintListType>(["Engineer", "Technology"]),
  )
  const [multiplyByGrade, setMultiplyByGrade] = useState(true)
  const [showSelectedOnly, setShowSelectedOnly] = useState(false)

  const filteredGroups = useMemo(
    () =>
      filterBlueprintGroups(BLUEPRINT_GROUPS, { searchQuery, visibleTypes }),
    [searchQuery, visibleTypes],
  )
  const displayedGroups = useMemo(() => {
    if (!showSelectedOnly) {
      return filteredGroups
    }

    return filteredGroups
      .map((group) => ({
        ...group,
        blueprints: group.blueprints.filter((blueprint) =>
          selectedBlueprintIds.has(blueprint.id),
        ),
      }))
      .filter((group) => group.blueprints.length > 0)
  }, [filteredGroups, selectedBlueprintIds, showSelectedOnly])

  const ingredientTotals = useMemo(
    () =>
      sumIngredientsForSelection(selectedBlueprintIds, BLUEPRINTS_BY_ID, {
        multiplyByGrade,
      }),
    [multiplyByGrade, selectedBlueprintIds],
  )

  const selectedMaxTotal = useMemo(() => {
    let max = 0

    for (const kind of MATERIAL_KINDS) {
      for (const category of MATERIALS[kind]) {
        for (const material of category.materials) {
          const total = ingredientTotals.get(material.name) ?? 0
          if (total > max) {
            max = total
          }
        }
      }
    }

    return max
  }, [ingredientTotals])

  const heatScaleMax = Math.max(1, selectedMaxTotal)
  const gradeTotals = useMemo(() => {
    const totals = new Map<number, number>()

    for (const [name, total] of ingredientTotals) {
      const material = MATERIAL_LOOKUP.get(name)
      if (!material || total <= 0) {
        continue
      }

      totals.set(material.grade, (totals.get(material.grade) ?? 0) + total)
    }

    return totals
  }, [ingredientTotals])

  const selectedInTableCount = useMemo(() => {
    let count = 0

    for (const [name, total] of ingredientTotals) {
      if (total > 0 && MATERIAL_LOOKUP.has(name)) {
        count += 1
      }
    }

    return count
  }, [ingredientTotals])

  const unmatchedSelectedCount = useMemo(() => {
    let count = 0

    for (const [name, total] of ingredientTotals) {
      if (total > 0 && !MATERIAL_LOOKUP.has(name)) {
        count += 1
      }
    }

    return count
  }, [ingredientTotals])

  const handleTypeToggle = (type: BlueprintListType) => {
    setVisibleTypes((current) => {
      const next = new Set(current)
      if (next.has(type)) {
        next.delete(type)
      } else {
        next.add(type)
      }

      return next
    })
  }

  const updateGroupSelection = (group: BlueprintGroup, checked: boolean) => {
    setSelectedBlueprintIds((current) => {
      const next = new Set(current)
      for (const blueprint of group.blueprints) {
        if (checked) {
          next.add(blueprint.id)
        } else {
          next.delete(blueprint.id)
        }
      }
      return next
    })
  }

  const updateGradeSelection = (id: string, checked: boolean) => {
    setSelectedBlueprintIds((current) => {
      const next = new Set(current)
      if (checked) {
        next.add(id)
      } else {
        next.delete(id)
      }
      return next
    })
  }

  return (
    <main className="mx-auto max-w-[1600px] space-y-4 p-4 md:p-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Elite Dangerous Material Matrix
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Select blueprint grades to see which engineering materials are needed
          most.
        </p>
      </header>

      <section className="grid gap-4 xl:grid-cols-[1.7fr_1fr]">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Heatmap Legend</CardTitle>
              <CardDescription>
                Required material totals by grade for your current blueprint
                selection.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div
                className="grid gap-2"
                style={{
                  gridTemplateColumns: `repeat(${MATERIAL_GRADES.length}, minmax(0, 1fr))`,
                }}
              >
                {MATERIAL_GRADES.map((grade) => (
                  <div key={grade} className="rounded-md border px-2 py-2">
                    <p className="text-muted-foreground text-[11px]">
                      Grade {grade}
                    </p>
                    <p className="text-sm font-medium">
                      Qty: {gradeTotals.get(grade) ?? 0}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-1">
                <div
                  aria-hidden="true"
                  className="h-2 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to right, hsl(120 75% 45% / 0.18), hsl(0 75% 45% / 0.70))",
                  }}
                />
                <div className="text-muted-foreground flex justify-between text-[11px]">
                  <span>Lower demand</span>
                  <span>Higher demand</span>
                </div>
              </div>
              <label className="flex items-center gap-2 text-sm">
                <Checkbox
                  aria-label="Multiply required materials by selected blueprint grade"
                  checked={multiplyByGrade}
                  onCheckedChange={(checked) =>
                    setMultiplyByGrade(checked === true)
                  }
                />
                <span>
                  Multiply by grade for engineer blueprints (G1×1, G2×2, G3×3,
                  G4×4, G5×5)
                </span>
              </label>
              <div className="flex flex-wrap gap-2 text-xs">
                <Badge variant="outline">
                  Selected grades: {selectedBlueprintIds.size}
                </Badge>
                <Badge variant="outline">
                  Tracked materials used: {selectedInTableCount}
                </Badge>
                <Badge variant="outline">
                  Ignored non-table ingredients: {unmatchedSelectedCount}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {MATERIAL_KINDS.map((kind) => (
            <MaterialTableCard
              key={kind}
              kind={kind}
              ingredientTotals={ingredientTotals}
              maxTotal={heatScaleMax}
            />
          ))}
        </div>

        <Card className="h-fit xl:sticky xl:top-4">
          <CardHeader>
            <CardTitle>Blueprints</CardTitle>
            <CardDescription>
              Engineer + Technology blueprints with grade-level selection.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <input
              aria-label="Search blueprints"
              className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-2"
              placeholder="Search by module, blueprint, or engineer"
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />

            <div className="flex gap-2">
              {(["Engineer", "Technology"] as const).map((type) => {
                const active = visibleTypes.has(type)
                return (
                  <Button
                    key={type}
                    size="sm"
                    variant={active ? "default" : "outline"}
                    onClick={() => handleTypeToggle(type)}
                  >
                    {type}
                  </Button>
                )
              })}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <label className="flex items-center gap-2 text-xs">
                <Checkbox
                  aria-label="Show only selected blueprints"
                  checked={showSelectedOnly}
                  onCheckedChange={(checked) =>
                    setShowSelectedOnly(checked === true)
                  }
                />
                <span>Show selected only</span>
              </label>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSelectedBlueprintIds(new Set())}
              >
                Clear selection
              </Button>
            </div>

            <p className="text-muted-foreground text-xs">
              Showing {displayedGroups.length} grouped blueprints
            </p>

            <ScrollArea className="h-[65vh] rounded-md border p-2">
              <div className="space-y-2 pr-2">
                {displayedGroups.map((group) => {
                  const groupIds = group.blueprints.map(
                    (blueprint) => blueprint.id,
                  )
                  const groupState = getParentCheckboxState(
                    groupIds,
                    selectedBlueprintIds,
                  )
                  const isExpanded = expandedGroupKeys.has(group.key)

                  return (
                    <Collapsible
                      key={group.key}
                      open={isExpanded}
                      onOpenChange={(open) => {
                        setExpandedGroupKeys((current) => {
                          const next = new Set(current)
                          if (open) {
                            next.add(group.key)
                          } else {
                            next.delete(group.key)
                          }
                          return next
                        })
                      }}
                    >
                      <div className="bg-muted/35 rounded-md border p-2">
                        <div className="flex items-start gap-2">
                          <Checkbox
                            aria-label={`Select all grades for ${group.moduleType} ${group.name}`}
                            checked={groupState}
                            onCheckedChange={(checked) =>
                              updateGroupSelection(group, checked === true)
                            }
                          />
                          <div className="min-w-0 flex-1 space-y-1">
                            <div className="flex items-center justify-between gap-2">
                              <div className="space-y-0.5">
                                <p className="truncate text-sm font-medium">
                                  {group.moduleType}
                                </p>
                                <p className="text-muted-foreground truncate text-xs">
                                  {group.name}
                                </p>
                              </div>
                              <CollapsibleTrigger asChild>
                                <Button
                                  aria-label={`${isExpanded ? "Collapse" : "Expand"} ${group.moduleType} ${group.name}`}
                                  size="icon-xs"
                                  variant="ghost"
                                >
                                  {isExpanded ? (
                                    <ChevronDown />
                                  ) : (
                                    <ChevronRight />
                                  )}
                                </Button>
                              </CollapsibleTrigger>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              <Badge variant="secondary">{group.type}</Badge>
                              <Badge variant="outline">
                                Grades: {group.blueprints.length}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <CollapsibleContent className="mt-2 space-y-2 pl-6">
                          {group.blueprints.map((blueprint) => {
                            const gradeLabel = blueprint.Grade ?? 0
                            const checked = selectedBlueprintIds.has(
                              blueprint.id,
                            )

                            return (
                              <label
                                key={blueprint.id}
                                className="hover:bg-accent/35 flex cursor-pointer items-start gap-2 rounded-md border px-2 py-1.5"
                              >
                                <Checkbox
                                  aria-label={`Select ${group.moduleType} ${group.name} grade ${gradeLabel}`}
                                  checked={checked}
                                  onCheckedChange={(value) =>
                                    updateGradeSelection(
                                      blueprint.id,
                                      value === true,
                                    )
                                  }
                                />
                                <span className="min-w-0 text-xs leading-relaxed">
                                  <span className="font-medium">
                                    G{gradeLabel}
                                  </span>{" "}
                                  · {blueprint.Ingredients.length} materials
                                </span>
                              </label>
                            )
                          })}
                        </CollapsibleContent>
                      </div>
                    </Collapsible>
                  )
                })}
                {displayedGroups.length === 0 ? (
                  <p className="text-muted-foreground px-2 py-4 text-center text-sm">
                    No blueprints match your filters.
                  </p>
                ) : null}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

function MaterialTableCard({
  kind,
  ingredientTotals,
  maxTotal,
}: {
  kind: MaterialKind
  ingredientTotals: ReadonlyMap<string, number>
  maxTotal: number
}) {
  const categories = MATERIALS[kind]
  const maxGrade = Math.max(
    ...categories.flatMap((category) =>
      category.materials.map((material) => material.grade),
    ),
  )
  const grades = Array.from({ length: maxGrade }, (_, index) => index + 1)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="capitalize">{kind} Materials</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[220px]">Category</TableHead>
              {grades.map((grade) => (
                <TableHead key={grade}>Grade {grade}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => {
              const byGrade = new Map<
                number,
                (typeof category.materials)[number]
              >()
              for (const material of category.materials) {
                byGrade.set(material.grade, material)
              }

              return (
                <TableRow key={category.name}>
                  <TableCell className="font-medium">{category.name}</TableCell>
                  {grades.map((grade) => {
                    const material = byGrade.get(grade)
                    if (!material) {
                      return (
                        <TableCell
                          key={grade}
                          className="text-muted-foreground"
                        >
                          -
                        </TableCell>
                      )
                    }

                    const total = ingredientTotals.get(material.name) ?? 0
                    return (
                      <TableCell
                        key={material.name}
                        style={{
                          backgroundColor: computeHeatColor(total, maxTotal),
                        }}
                      >
                        <div className="space-y-0.5">
                          <p className="text-xs leading-snug">
                            {material.name}
                          </p>
                          <p
                            className="text-muted-foreground text-[11px]"
                            data-testid={`material-total-${toSlug(material.name)}`}
                          >
                            Qty: {total}
                          </p>
                        </div>
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

function toSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}
