import getSafeValue from './get-safe-value'
import getClassName from './get-class-name'

const indexCaches = {}

function getIndexCache(key) {
  if (typeof indexCaches[key] === 'undefined') {
    indexCaches[key] = []
  }
  return indexCaches[key]
}

const hashCache = {}

/**
 * Doesn't actually insert anything, so will be easier to write tests
 * for this part in the future.
 */
export default function getInsertConfig(propertyInfo, _value) {
  const { name, key, cacheType = 'hash' } = propertyInfo
  let isInCache = false
  let className
  const value = _value

  if (cacheType === 'array') {
    // Use a indexed based approach
    // Great when there is a little amount of values
    // and values can be long, such as font-family
    const safeValue = getSafeValue(value)
    const indexCache = getIndexCache(name)
    const indexOfValue = indexCache.indexOf(safeValue)

    if (indexOfValue === -1) {
      const l = indexCache.length
      className = `${key}_${l}`
      indexCache.push(safeValue)
    } else {
      isInCache = true
      className = `${key}_${indexOfValue}`
    }
  } else if (cacheType === 'hash') {
    className = getClassName(propertyInfo, value)

    if (hashCache[className]) {
      isInCache = true
    } else {
      hashCache[className] = true
    }
  }

  return { className, isInCache, value }
}
