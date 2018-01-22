export default function valueToString(value, unit = 'px') {
  return typeof value === 'number' ? `${value}${unit}` : value
}
