import hash from '@emotion/hash'
import getSafeValue from './get-safe-value'

/**
 * Generates the class name.
 */
export default function getClassName(propertyInfo, value) {
  const {
    className,
    safeValue = false, // Value never contains unsafe characters. e.g: 10, hidden, border-box
    complexValue = false // Complex values that are best hashed. e.g: background-image
  } = propertyInfo
  let valueKey

  // Shortcut the global keywords
  if (value === 'inherit' || value === 'initial' || value === 'unset') {
    valueKey = value
    // Always hash values that contain a calc() because the operators get
    // stripped which can result in class name collisions
  } else if (complexValue || value.includes('calc(')) {
    valueKey = hash(value)
  } else if (safeValue) {
    valueKey = value
  } else {
    valueKey = getSafeValue(value)
  }

  return `📦${className}_${valueKey}`
}
