import prefixer from './prefixer'
import valueToString from './value-to-string'
import getClassName from './get-class-name'

/**
 * Generates the class name and styles.
 */
export default function getCss(propertyInfo, value) {
  let rules

  const valueString = valueToString(value, propertyInfo.defaultUnit)

  const className = getClassName(propertyInfo, valueString)

  // Avoid running the prefixer when possible because it's slow
  if (propertyInfo.isPrefixed) {
    rules = prefixer(propertyInfo.jsName, valueString)
  } else {
    rules = [{property: propertyInfo.cssName, value: valueString}]
  }

  const rulesString = rules
    .map(rule => `${rule.property}: ${rule.value};`)
    .join('\n  ')

  const styles = `
.${className} {
  ${rulesString}
}`

  return {className, styles}
}
