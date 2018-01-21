import prefixAll from 'inline-style-prefixer/static'
import decamelize from '../utils/decamelize'

const prefixRegex = /^(Webkit|ms|Moz|O)/

export default function prefixer(property, value) {
  const rules = prefixAll({ [property]: value })

  // Convert rules object to an array
  const rulesArray = Object.keys(rules).map(key => {
    // Add a dash in front of the prefixes
    const prop = key.match(prefixRegex) ? '-' + key : key
    return { property: decamelize(prop), value: rules[key] }
  })

  return rulesArray
}
