import * as hash from 'murmurhash-js'
import getSafeValue from './get-safe-value'

export interface PropertyInfo {
  className?: string
  safeValue?: boolean
  complexValue?: boolean
  jsName: string
  cssName: string
  defaultUnit?: string
  isPrefixed?: boolean
}
/**
 * Generates the class name.
 */
export default function getClassName(propertyInfo: PropertyInfo, value: string) {
  const {
    className,
    safeValue = false, // Value never contains unsafe characters. e.g: 10, hidden, border-box
    complexValue = false // Complex values that are best hashed. e.g: background-image
  } = propertyInfo
  let valueKey: string | number

  // Shortcut the global keywords
  if (value === 'inherit' || value === 'initial' || value === 'unset') {
    valueKey = value
    /* Always hash values that contain a calc() because the operators get
    stripped which can result in class name collisions
    */
  } else if (complexValue || value.includes('calc(')) {
    valueKey = hash(value)
  } else if (safeValue) {
    valueKey = value
  } else {
    valueKey = getSafeValue(value)
  }

  return `📦${className}_${valueKey}`
}
