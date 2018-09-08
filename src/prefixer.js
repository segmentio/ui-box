import {prefix} from 'inline-style-prefixer'
import decamelize from './utils/decamelize'

const prefixRegex = /^(Webkit|ms|Moz|O)/

/**
 * Adds vendor prefixes to properties and values.
 */
export default function prefixer(property, value) {
  const rules = prefix({[property]: value})
  const rulesArray = []
  const propertyNames = Object.keys(rules)

  // Convert rules object to an array
  for (let i = 0; i < propertyNames.length; i++) {
    const propertyName = propertyNames[i]
    // Add a dash in front of the prefixes
    const prefixedProp = propertyName.match(prefixRegex)
      ? `-${propertyName}`
      : propertyName
    const prop = decamelize(prefixedProp)
    const values = rules[propertyName]

    // Handle prefixed values
    if (Array.isArray(values)) {
      for (let i = 0; i < values.length; i++) {
        rulesArray.push({property: prop, value: values[i]})
      }
    } else {
      rulesArray.push({property: prop, value: values})
    }
  }

  return rulesArray
}
