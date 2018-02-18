/**
 * Converts number values to a string with a unit.
 */
export default function valueToString(value, unit = 'px') {
  return typeof value === 'number' ? `${value}${unit}` : value
}
