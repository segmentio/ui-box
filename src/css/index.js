import StyleSheet from './style-sheet'
import prefixer from './prefixer'
import getInsertConfig from './get-insert-config'
import properties from './properties'

// Create and inject the stylesheet
export const styleSheet = new StyleSheet()
styleSheet.inject()

function insert(selector, rules) {
  const rulesString = rules
    .map(rule => `${rule.property}: ${rule.value};`)
    .join('\n')

  styleSheet.insert(`
    .${selector} {
      ${rulesString}
    }
  `)
}

export function insertSingleProperty(property, inputValue) {
  const propertyInfo = properties[property]
  if (!propertyInfo) return null

  const { className, isInCache, value } = getInsertConfig(
    propertyInfo,
    inputValue
  )

  if (isInCache) return className

  // First time for this property and value, insert the CSS rule
  if (propertyInfo.isPrefixed) {
    const rules = prefixer(property, value)
    insert(className, rules)
  } else {
    insert(className, [{ property: propertyInfo.name, value }])
  }

  return className
}

export function insertFirstValidProperty(property, ...values) {
  const val = values.find(p => p !== undefined)
  if (val === undefined) return
  return insertSingleProperty(property, val)
}
