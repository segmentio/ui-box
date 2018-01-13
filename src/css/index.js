import StyleSheet from './style-sheet'
import prefixer from './prefixer'
import getInsertConfig from './get-insert-config'
import properties from './properties'
import { camelToDash } from './conversion'

// Create and inject the stylesheet
export const styleSheet = new StyleSheet()
styleSheet.inject()

function insert(selector, property, value) {
  styleSheet.insert(`.${selector} { ${property}: ${value};  }`)
}

function prefixedInsert(selector, property, value) {
  const rules = prefixer(property, value)

  Object.keys(rules).forEach(prefixedProperty => {
    const prefixedValue = rules[prefixedProperty]
    insert(selector, camelToDash(prefixedProperty), prefixedValue)
  })
}

export function insertSingleProperty(property, inputValue) {
  const propertyInfo = properties[property]
  if (!propertyInfo) return null

  const { className, isInCache, value } = getInsertConfig({
    ...propertyInfo,
    value: inputValue
  })

  if (isInCache) return className

  // First time for this property and value, insert the CSS rule
  if (propertyInfo.isPrefixed) {
    prefixedInsert(className, propertyInfo.name, value)
  } else {
    insert(className, propertyInfo.name, value)
  }

  return className
}
