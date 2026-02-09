import { createContext, useContext, useMemo, useState } from 'react'
import type { Blueprint, BlueprintType } from '@/types'
import { BLUEPRINTS } from '@/blueprints'

type DataContextType = {
  materialBlueprintsCount: MaterialBlueprints
  ignoredBlueprints: Array<string>
  setIgnoredBlueprints: (blueprints: Array<string>) => void
  blueprintsByType: Record<BlueprintType, Array<Blueprint>>
}

type MaterialBlueprints = {
  [key: string]: number
}

export const DataContext = createContext<DataContextType>({
  materialBlueprintsCount: {} as MaterialBlueprints,
  ignoredBlueprints: [] as Array<string>,
  setIgnoredBlueprints: () => {},
  blueprintsByType: {} as Record<BlueprintType, Array<Blueprint>>,
})

const getBlueprintId = (blueprint: Blueprint) => {
  return (
    blueprint.Type.toLowerCase().replace(/ /g, '-') +
    blueprint.Name.toLowerCase().replace(/ /g, '-')
  )
}

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [ignoredBlueprints, setIgnoredBlueprints] = useState<Array<string>>([])

  const filteredBlueprints = useMemo(() => {
    return BLUEPRINTS.filter(
      (blueprint) => !ignoredBlueprints.includes(getBlueprintId(blueprint)),
    )
  }, [ignoredBlueprints])

  const materialBlueprintsCount: MaterialBlueprints = useMemo(() => {
    return filteredBlueprints.reduce((acc, blueprint) => {
      blueprint.Ingredients.forEach((material) => {
        acc[material.Name] = (acc[material.Name] || 0) + material.Size
      })
      return acc
    }, {} as MaterialBlueprints)
  }, [ignoredBlueprints])

  const blueprintsByType = useMemo(() => {
    return filteredBlueprints.reduce(
      (acc, blueprint) => {
        // False positive
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        acc[blueprint.type] = (acc[blueprint.type] || []).concat(blueprint)
        return acc
      },
      {} as Record<BlueprintType, Array<Blueprint>>,
    )
  }, [filteredBlueprints])

  const value: DataContextType = useMemo(
    () => ({
      materialBlueprintsCount,
      ignoredBlueprints,
      setIgnoredBlueprints,
      blueprintsByType,
    }),
    [materialBlueprintsCount, ignoredBlueprints, blueprintsByType],
  )

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export function useDataContext() {
  return useContext(DataContext)
}
