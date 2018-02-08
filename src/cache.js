let cache = new Map()

export default {
  get(property, value) {
    return cache.get(property + value)
  },

  set(property, value, className) {
    if (process.env.NODE_ENV !== 'production') {
      if (
        typeof value !== 'boolean' &&
        typeof value !== 'number' &&
        typeof value !== 'string'
      ) {
        const encodedValue = JSON.stringify(value)
        throw new TypeError(
          `ui-box: invalid cache value “${encodedValue}”. Only booleans, numbers and strings are supported.`
        )
      }
    }

    cache.set(property + value, className)
  },

  export() {
    return Array.from(cache)
  },

  hydrate(newEntries) {
    cache = new Map([...cache, ...newEntries])
  },

  empty() {
    cache.clear()
  }
}
