import cx from 'classnames'
import { propEnhancers } from './enhancers'
import expandAliases from './expand-aliases'
import * as styles from './styles'
import * as cache from './cache'

// This is optimized for performance. It gets called a lot of times
export default function enhanceProps(rawProps) {
  const propsMap = expandAliases(rawProps)
  const parsedProps = {}
  let className = rawProps.className || ''

  for (const [propName, propValue] of propsMap) {
    const cachedClassName = cache.get(propName, propValue)
    if (cachedClassName) {
      className = cx(className, cachedClassName)
      continue
    }

    const enhancer = propEnhancers[propName]
    // Skip false boolean enhancers. e.g: clearfix={false}
    if (enhancer && !propValue) {
      continue
    } else if (!enhancer) {
      // Native prop. e.g: disabled, value, type
      parsedProps[propName] = propValue
      continue
    }

    const newCss = enhancer(propValue)
    // Glamor props (clearfix) don't have css
    if (newCss.css) {
      styles.add(newCss.css)
    }
    cache.set(propName, propValue, newCss.className)
    className = cx(className, newCss.className)
  }

  return [className, parsedProps]
}
