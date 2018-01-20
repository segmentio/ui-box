import parseUnit from './parse-unit'
import getSafeValue from './get-safe-value'

// This is only used for hash based caching
// Array/index based caching doesn't reacht this code
export default function getClassNameAndValue({
  key,
  value: _value,
  isUnitParsed,
  defaultUnit,
  isValueEscaped
}) {
  let value
  let valueKey
  let unit

  if (isUnitParsed) {
    ;[value, unit] = parseUnit(_value)

    if (Number.isNaN(value)) {
      value = unit
      valueKey = value
    } else {
      unit = unit || defaultUnit
      value = `${value}${unit}`

      // % not allowed as a valid character
      // Avoid hitting `getSafeValue` because it's slow
      if (unit === '%') {
        valueKey = `${value.replace('%', '-prcnt').replace('.', '-')}`
      } else {
        valueKey = value.replace('.', '-')
      }
    }
  } else {
    value = _value
    valueKey = value
  }

  if (isValueEscaped) {
    valueKey = getSafeValue(valueKey)
  }

  return { className: `${key}_${valueKey}`, value }
}
