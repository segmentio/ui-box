import hash from '@emotion/hash'
import getSafeValue from './get-safe-value'

let PREFIX = 'ub-'

export function getClassNamePrefix(): string {
  return PREFIX
}

export function setClassNamePrefix(prefix: string): void {
  PREFIX = prefix
}

export interface PropertyInfo {
  className?: string
  safeValue?: boolean
  complexValue?: boolean
  jsName?: string
  cssName?: string
  defaultUnit?: string
  isPrefixed?: boolean
}
/**
 * Generates the class name.
 */
export default function getClassName(
  propertyInfo: PropertyInfo,
  value: string
) {
  const {
    className,
    safeValue = false, // Value never contains unsafe characters. e.g: 10, hidden, border-box
    complexValue = false, // Complex values that are best hashed. e.g: background-image
  } = propertyInfo
  let valueKey: string

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

  return `${PREFIX}${className}_${valueKey}`
}
