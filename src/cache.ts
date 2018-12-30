type Value = string | number | boolean
let cache = new Map<string, Value>()

export function get(property: string, value: Value) {
  return cache.get(property + value)
}

export function set(property: string, value: Value, className: string) {
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

export function hydrate(newEntries: [string, Value][]) {
  cache = new Map<string, Value>([...cache, ...newEntries])
}

export function clear() {
  cache.clear()
}
