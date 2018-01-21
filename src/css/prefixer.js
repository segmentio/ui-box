import prefixAll from 'inline-style-prefixer/static'
import decamelize from '../utils/decamelize'

const prefixRegex = /^(Webkit|ms|Moz|O)/

export default function prefixer(property, value) {
  const rules = prefixAll({ [property]: value })
  const rulesArray = []

  // Convert rules object to an array
  for (const key of Object.keys(rules)) {
    // Add a dash in front of the prefixes
    const prop = decamelize(key.match(prefixRegex) ? '-' + key : key)
    const values = rules[key]

    if (Array.isArray(values)) {
      for (const value of values) {
        rulesArray.push({ property: prop, value })
      }
    } else {
      rulesArray.push({ property: prop, value: values })
    }
  }

  return rulesArray
}
