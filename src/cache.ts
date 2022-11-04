import {BoxPropValue} from './types/enhancers'

type CacheValue = BoxPropValue
let cache = new Map<string, string>()

export function get(property: string, value: CacheValue, selectorHead = '') {
  return cache.get(selectorHead + property + value)
}

export function set(property: string, value: CacheValue | object, className: string, selectorHead = '') {
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

  cache.set(selectorHead + property + value, className)
}

export function entries() {
  return [...cache]
}

type CacheEntry = [/** key */ string, /** value */ string]
export function hydrate(newEntries: CacheEntry[]) {
  cache = new Map<string, string>([...cache, ...newEntries])
}

export function clear() {
  cache.clear()
}
