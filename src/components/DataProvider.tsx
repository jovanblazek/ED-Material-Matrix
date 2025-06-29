import { BLUEPRINTS } from '@/blueprints'
import { createContext, useContext, useMemo, useState } from 'react'
import type { Blueprint } from '@/types'

type DataContextType = {
  materialBlueprintsCount: MaterialBlueprints
  ignoredBlueprints: string[]
  setIgnoredBlueprints: (blueprints: string[]) => void
}

type MaterialBlueprints = {
  [key: string]: number
}

export const DataContext = createContext<DataContextType>({
  materialBlueprintsCount: {} as MaterialBlueprints,
  ignoredBlueprints: [] as string[],
  setIgnoredBlueprints: () => {},
})

const getBlueprintId = (blueprint: Blueprint) => {
  return (
    blueprint.Type.toLowerCase().replace(/ /g, '-') +
    blueprint.Name.toLowerCase().replace(/ /g, '-')
  )
}

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [ignoredBlueprints, setIgnoredBlueprints] = useState<string[]>([])

  const materialBlueprintsCount: MaterialBlueprints = useMemo(() => {
    const blueprintsWithoutIgnored = BLUEPRINTS.filter(
      (blueprint) => !ignoredBlueprints.includes(getBlueprintId(blueprint)),
    )
    return blueprintsWithoutIgnored.reduce((acc, blueprint) => {
      blueprint.Ingredients.forEach((material) => {
        acc[material.Name] = (acc[material.Name] || 0) + material.Size
      })
      return acc
    }, {} as MaterialBlueprints)
  }, [ignoredBlueprints])

  const value: DataContextType = useMemo(
    () => ({
      materialBlueprintsCount,
      ignoredBlueprints,
      setIgnoredBlueprints,
    }),
    [materialBlueprintsCount, ignoredBlueprints],
  )

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export function useDataContext() {
  return useContext(DataContext)
}