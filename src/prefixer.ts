import {prefix} from 'inline-style-prefixer'
import decamelize from './utils/decamelize'
import hasOwnProperty from './utils/has-own-property'

const prefixRegex = /^(Webkit|ms|Moz|O)/

export interface Rule {
  property: string
  value: string
}

export function isRule(rule: unknown): rule is Rule {
  if (typeof rule !== 'object' || rule === null) {
    return false
  }
  return hasOwnProperty(rule, 'property') &&
         typeof rule.property === 'string' &&
         hasOwnProperty(rule, 'value') &&
         typeof rule.value === 'string'
}

/**
 * Adds vendor prefixes to properties and values.
 */
export default function prefixer(property: string, value: string): Rule[] {
  const rules = prefix({[property]: value})
  const rulesArray: Rule[] = []
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
      for (let j = 0; j < values.length; j++) {
        rulesArray.push({property: prop, value: values[j]})
      }
    } else {
      rulesArray.push({property: prop, value: values})
    }
  }

  return rulesArray
}
