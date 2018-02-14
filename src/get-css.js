import prefixer from './prefixer'
import properties from './properties'
import valueToString from './value-to-string'
import getClassName from './get-class-name'

export default function getCss(property, value) {
  const propertyInfo = properties[property]
  let rules

  if (process.env.NODE_ENV !== 'production') {
    if (!propertyInfo) {
      throw new Error(`ui-box: property “${property}” not supported`)
    }
  }

  const valueString = valueToString(value, propertyInfo.defaultUnit)

  const className = getClassName(propertyInfo, valueString)

  if (propertyInfo.isPrefixed) {
    rules = prefixer(property, valueString)
  } else {
    rules = [{property: propertyInfo.name, value: valueString}]
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
