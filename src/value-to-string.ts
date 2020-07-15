/**
 * Converts number values to a string with a unit.
 */
export default function valueToString(value: string | number, unit = 'px'): string {
  return typeof value === 'number' ? `${value}${unit}` : value
}
