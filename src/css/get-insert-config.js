import getSafeValue from './get-safe-value'
import getClassNameAndValue from './get-class-name-and-value'

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
export default function getInsertConfig({
  name,
  key,
  cacheType = 'hash',
  isUnitParsed = true,
  defaultUnit = 'px',
  isValueEscaped = true,
  value: _value
}) {
  let isInCache = false
  let className
  let value = _value

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
    const result = getClassNameAndValue({
      key,
      value,
      isUnitParsed,
      defaultUnit,
      isValueEscaped
    })

    className = result.className
    value = result.value

    if (hashCache[className]) {
      isInCache = true
    } else {
      hashCache[className] = true
    }
  }

  return { className, isInCache, value }
}
