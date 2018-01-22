import getSafeValue from './get-safe-value'

// This is only used for hash based caching
// Array/index based caching doesn't reach this code
export default function getClassName(propertyInfo, value) {
  const {
    key,
    defaultUnit = 'px',
    safeValue = false,
    lengthOnly = false,
    numberOnly = false
  } = propertyInfo
  let valueKey

  if (value === 'inherit' || value === 'initial' || value === 'unset') {
    valueKey = value
  } else if (typeof value === 'number') {
    valueKey = `${value}${defaultUnit}`.replace('.', '-')
  } else if (lengthOnly) {
    valueKey = value.replace('.', '-').replace('%', 'prcnt')
  } else if (numberOnly) {
    valueKey = value.replace('.', '-')
  } else if (safeValue) {
    valueKey = value
  } else {
    valueKey = getSafeValue(value)
  }

  return `${key}_${valueKey}`
}
