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

const NOOP_STORAGE: Storage = {
  getItem: () => null,
  setItem: () => undefined,
  removeItem: () => undefined,
  clear: () => undefined,
  key: () => null,
  length: 0,
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
      storage: createJSONStorage(() =>
        typeof window === "undefined" ? NOOP_STORAGE : window.localStorage,
      ),
      partialize: (state) => ({
        selectedBlueprintIds: state.selectedBlueprintIds,
        multiplyByGrade: state.multiplyByGrade,
        normalizePerTable: state.normalizePerTable,
      }),
    },
  ),
)

export function useMaterialMatrixStoreHydrated() {
  const persistApi = useMaterialMatrixStore.persist
  const [hydrated, setHydrated] = useState(persistApi.hasHydrated())

  useEffect(() => {
    const unsubscribeHydrate = persistApi.onHydrate(() => {
      setHydrated(false)
    })
    const unsubscribeFinishHydration = persistApi.onFinishHydration(() => {
      setHydrated(true)
    })

    setHydrated(persistApi.hasHydrated())

    return () => {
      unsubscribeHydrate()
      unsubscribeFinishHydration()
    }
  }, [persistApi])

  return hydrated
}
