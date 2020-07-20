import prefixer, {Rule} from './prefixer'
import valueToString from './value-to-string'
import getClassName, {PropertyInfo} from './get-class-name'
import { EnhancedProp } from './types/enhancers'

/**
 * Generates the class name and styles.
 */
export default function getCss(propertyInfo: PropertyInfo, value: string | number, selector = ''): EnhancedProp | null {
  let rules: Rule[]

  // Protect against unexpected values
  const valueType = typeof value
  if (valueType !== 'string' && valueType !== 'number') {
    if (process.env.NODE_ENV !== 'production') {
      const name = propertyInfo.jsName
      const encodedValue = JSON.stringify(value)
      console.error(
        `📦 ui-box: property “${name}” was passed invalid value “${encodedValue}”. Only numbers and strings are supported.`
      )
    }

    return null
  }

  const valueString = valueToString(value, propertyInfo.defaultUnit)
  const className = getClassName(propertyInfo, valueString)

  // Avoid running the prefixer when possible because it's slow
  if (propertyInfo.isPrefixed) {
    rules = prefixer(propertyInfo.jsName || '', valueString)
  } else {
    rules = [{property: propertyInfo.cssName || '', value: valueString}]
  }

  let styles: string
  if (process.env.NODE_ENV === 'production') {
    const rulesString = rules
      .map(rule => `${rule.property}:${rule.value}`)
      .join(';')
    styles = `.${className}${selector}{${rulesString}}`
  } else {
    const rulesString = rules
      .map(rule => `  ${rule.property}: ${rule.value};`)
      .join('\n')
    styles = `
.${className}${selector} {
${rulesString}
}`
  }

  return {className, styles}
}
