import hash from './utils/hash'
import getSafeValue from './get-safe-value'

// This is only used for hash based caching
// Array/index based caching doesn't reach this code
export default function getClassName(propertyInfo, value) {
  const {
    key,
    safeValue = false, // Value never contains unsafe characters. e.g: 10, hidden, border-box
    complexValue = false, // Complex values that are best hashed. e.g: background-image
  } = propertyInfo
  let valueKey

  // Shortcut the global keywords and safe values
  if (
    safeValue ||
    value === 'inherit' ||
    value === 'initial' ||
    value === 'unset'
  ) {
    valueKey = value
  } else if (complexValue) {
    valueKey = hash(value)
  } else {
    valueKey = getSafeValue(value)
  }

  return `📦${key}_${valueKey}`
}
