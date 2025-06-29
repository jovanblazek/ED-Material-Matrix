import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Maps a value between min and max to a color between dark green and dark red
 * @param value - The current value
 * @param min - The minimum value (will be dark green)
 * @param max - The maximum value (will be dark red)
 * @returns RGB color string
 */
export function getColorForValue(value: number, min: number, max: number): string {
  // Handle edge cases
  if (min === max) return 'rgb(0, 100, 0)' // Default to dark green if no range
  if (value <= min) return 'rgb(0, 100, 0)' // Dark green
  if (value >= max) return 'rgb(139, 0, 0)' // Dark red
  
  // Calculate position between min and max (0 to 1)
  const position = (value - min) / (max - min)
  
  // Interpolate between dark green (0, 100, 0) and dark red (139, 0, 0)
  const red = Math.round(139 * position)
  const green = Math.round(100 * (1 - position))
  const blue = 0
  
  return `rgb(${red}, ${green}, ${blue})`
}
