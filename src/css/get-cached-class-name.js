import getClassName from './get-class-name'

const indexCaches = {}

function getIndexCache(key) {
  if (typeof indexCaches[key] === 'undefined') {
    indexCaches[key] = []
  }
  return indexCaches[key]
}

const hashCache = {}

export default function getCachedClassName(propertyInfo, value) {
  const { name, key, cacheType = 'hash' } = propertyInfo
  let isCached = false
  let className

  if (cacheType === 'array') {
    // Use a indexed based approach
    // Great when there is a little amount of values
    // and values can be long, such as background-image
    const indexCache = getIndexCache(name)
    const indexOfValue = indexCache.indexOf(value)

    if (indexOfValue >= 0) {
      isCached = true
      className = `${key}_${indexOfValue}`
    } else {
      const l = indexCache.length
      className = `${key}_${l}`
      indexCache.push(value)
    }
  } else if (cacheType === 'hash') {
    const cacheKey = name + value
    if (hashCache[cacheKey]) {
      isCached = true
      className = hashCache[cacheKey]
    } else {
      className = getClassName(propertyInfo, value)
      hashCache[cacheKey] = className
    }
  }

  return { className, isCached }
}
