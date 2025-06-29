import { DataProvider } from '@/components/DataProvider'
import { MaterialTable } from '@/components/MaterialTable'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <DataProvider>
      <div className="min-h-screen container mx-auto">
        <div className="flex flex-col justify-center gap-8 p-4">
          <MaterialTable type="encoded" />
          <MaterialTable type="manufactured" />
          <MaterialTable type="raw" />
        </div>
      </div>
    </DataProvider>
  )
}
