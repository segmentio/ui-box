import hash from './utils/hash'
import getSafeValue from './get-safe-value'

// This is only used for hash based caching
// Array/index based caching doesn't reach this code
export default function getClassName(propertyInfo, value) {
  const {
    key,
    safeValue = false, // Value never contains unsafe characters. e.g: 10, hidden, border-box
    lengthOnly = false, // Value is only a length type. e.g: 10px, 10em, 10%, 10.5px
    numberOnly = false, // Value is only a number type. e.g: 10, 0.5
    complexValue = false, // Complex values that are best hashed. e.g: background-image
  } = propertyInfo
  let valueKey

  // Short the global keyword values
  if (value === 'inherit' || value === 'initial' || value === 'unset') {
    valueKey = value
    // Handle length values separately to avoid the more expensive getSafeValue
  } else if (lengthOnly) {
    valueKey = value.replace('.', '-').replace('%', 'prcnt')
    // Handle number values separately to avoid the more expensive getSafeValue
  } else if (numberOnly) {
    valueKey = value.replace('.', '-')
    // If the value is safe do nothing
  } else if (safeValue) {
    valueKey = value
  } else if (complexValue) {
    valueKey = hash(value)
  } else {
    valueKey = getSafeValue(value)
  }

  return `uibox_${key}_${valueKey}`
}
