/**
 * Flattens an object into a string representation in the form of `key:type:value`
 */
const flattenObject = (object: Record<string, any>): string => {
  const keys = Object.keys(object)
  return keys
    .map(key => {
      const value = object[key]
      const type = typeof value

      if (Array.isArray(value)) {
        return `${key}:array:[${value.map((value, index) => flattenObject({ [index]: value }))}]`
      }

      if (value != null && type === 'object') {
        return `${key}:${type}:${flattenObject(value)}`
      }

      return `${key}:${type}:${value}`
    })
    .join(';')
}

export default flattenObject
