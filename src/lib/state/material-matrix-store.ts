import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { useEffect, useState } from "react"

interface MaterialMatrixStoreState {
  selectedBlueprintIds: ReadonlyArray<string>
  multiplyByGrade: boolean
  normalizePerTable: boolean
  setBlueprintSelected: (id: string, checked: boolean) => void
  setBlueprintsSelected: (ids: ReadonlyArray<string>, checked: boolean) => void
  clearSelectedBlueprints: () => void
  setMultiplyByGrade: (value: boolean) => void
  setNormalizePerTable: (value: boolean) => void
}

export const useMaterialMatrixStore = create<MaterialMatrixStoreState>()(
  persist(
    (set) => ({
      selectedBlueprintIds: [],
      multiplyByGrade: true,
      normalizePerTable: true,
      setBlueprintSelected: (id, checked) =>
        set((state) => {
          const next = new Set(state.selectedBlueprintIds)
          if (checked) {
            next.add(id)
          } else {
            next.delete(id)
          }
          return { selectedBlueprintIds: Array.from(next) }
        }),
      setBlueprintsSelected: (ids, checked) =>
        set((state) => {
          const next = new Set(state.selectedBlueprintIds)
          for (const id of ids) {
            if (checked) {
              next.add(id)
            } else {
              next.delete(id)
            }
          }
          return { selectedBlueprintIds: Array.from(next) }
        }),
      clearSelectedBlueprints: () => set({ selectedBlueprintIds: [] }),
      setMultiplyByGrade: (value) => set({ multiplyByGrade: value }),
      setNormalizePerTable: (value) => set({ normalizePerTable: value }),
    }),
    {
      name: "material-matrix-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        selectedBlueprintIds: state.selectedBlueprintIds,
        multiplyByGrade: state.multiplyByGrade,
        normalizePerTable: state.normalizePerTable,
      }),
    },
  ),
)

export function useMaterialMatrixStoreHydrated() {
  const [hydrated, setHydrated] = useState(
    useMaterialMatrixStore.persist.hasHydrated(),
  )

  useEffect(() => {
    const unsubscribeHydrate = useMaterialMatrixStore.persist.onHydrate(() => {
      setHydrated(false)
    })
    const unsubscribeFinishHydration =
      useMaterialMatrixStore.persist.onFinishHydration(() => {
        setHydrated(true)
      })

    setHydrated(useMaterialMatrixStore.persist.hasHydrated())

    return () => {
      unsubscribeHydrate()
      unsubscribeFinishHydration()
    }
  }, [])

  return hydrated
}
