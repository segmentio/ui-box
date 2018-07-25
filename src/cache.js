let cache = new Map()

export function get(property, value) {
  return cache.get(property + value)
}

export function set(property, value, className) {
  if (process.env.NODE_ENV !== 'production') {
    const valueType = typeof value
    if (
      valueType !== 'boolean' &&
      valueType !== 'number' &&
      valueType !== 'string'
    ) {
      const encodedValue = JSON.stringify(value)
      throw new TypeError(
        `📦 ui-box: invalid cache value “${encodedValue}”. Only booleans, numbers and strings are supported.`
      )
    }
  }

  cache.set(property + value, className)
}

export function entries() {
  return [...cache]
}

export function hydrate(newEntries) {
  cache = new Map([...cache, ...newEntries])
}

export function clear() {
  cache.clear()
}
