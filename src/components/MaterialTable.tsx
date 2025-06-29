import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { MATERIALS } from '@/materials'
import { useDataContext } from './DataProvider'
import { useMemo } from 'react'
import { getColorForValue } from '@/lib/utils'

interface MaterialTableProps {
  type: 'encoded' | 'manufactured' | 'raw'
}

export function MaterialTable({ type }: MaterialTableProps) {
  const { materialBlueprintsCount } = useDataContext()

  const materialsWithCounts = useMemo(() => {
    return MATERIALS[type].map((materialGroup) => {
      return {
        name: materialGroup.name,
        materials: materialGroup.materials.map((material) => {
          return {
            name: material.name,
            grade: material.grade,
            count: materialBlueprintsCount[material.name] || 0,
          }
        }),
      }
    })
  }, [materialBlueprintsCount, type])

  const { maximumCount, minimumCount } = useMemo(() => {
    // Get all material counts from all groups
    const allCounts = materialsWithCounts.flatMap(materialGroup => 
      materialGroup.materials.map(material => material.count)
    )
    
    if (allCounts.length === 0) {
      return { maximumCount: 0, minimumCount: 0 }
    }
    
    return {
      maximumCount: Math.max(...allCounts),
      minimumCount: Math.min(...allCounts),
    }
  }, [materialsWithCounts])

  return (
    <Table className='w-max mx-auto'>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Category</TableHead>
          <TableHead className="w-[200px]">Grade 1</TableHead>
          <TableHead className="w-[200px]">Grade 2</TableHead>
          <TableHead className="w-[200px]">Grade 3</TableHead>
          <TableHead className="w-[200px]">Grade 4</TableHead>
          <TableHead>Grade 5</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {materialsWithCounts.map((materialGroup) => (
          <TableRow key={materialGroup.name}>
            <TableCell className="font-medium">{materialGroup.name}</TableCell>
            {materialGroup.materials.map((material) => (
              <TableCell 
                key={material.name} 
                className='text-white truncate max-w-[200px] h-[70px] whitespace-normal'
                style={{
                  backgroundColor: getColorForValue(material.count, minimumCount, maximumCount)
                }}
                title={`${material.name}: ${material.count}`}
              >
                {material.count}: {material.name}
              </TableCell>
            ))}
            {Array.from({ length: 5 - materialGroup.materials.length }).map((_, index) => (
              <TableCell key={index} className="w-[200px]"></TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
