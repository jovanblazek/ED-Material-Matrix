import { BLUEPRINTS } from '@/blueprints'
import { createContext, useContext, useMemo, useState } from 'react'
import type { Blueprint, BlueprintType } from '@/types'

type DataContextType = {
  materialBlueprintsCount: MaterialBlueprints
  ignoredBlueprints: string[]
  setIgnoredBlueprints: (blueprints: string[]) => void
  blueprintsByType: Record<BlueprintType, Blueprint[]>
}

type MaterialBlueprints = {
  [key: string]: number
}

export const DataContext = createContext<DataContextType>({
  materialBlueprintsCount: {} as MaterialBlueprints,
  ignoredBlueprints: [] as string[],
  setIgnoredBlueprints: () => {},
  blueprintsByType: {} as Record<BlueprintType, Blueprint[]>,
})

const getBlueprintId = (blueprint: Blueprint) => {
  return (
    blueprint.Type.toLowerCase().replace(/ /g, '-') +
    blueprint.Name.toLowerCase().replace(/ /g, '-')
  )
}

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [ignoredBlueprints, setIgnoredBlueprints] = useState<string[]>([])

  const filteredBlueprints = useMemo(() => {
    return BLUEPRINTS.filter((blueprint) => !ignoredBlueprints.includes(getBlueprintId(blueprint)))
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
    return filteredBlueprints.reduce((acc, blueprint) => {
      acc[blueprint.type] = (acc[blueprint.type] || []).concat(blueprint)
      return acc
    }, {} as Record<BlueprintType, Blueprint[]>)
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