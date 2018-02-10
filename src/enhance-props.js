import cx from 'classnames'
import { propEnhancers } from './enhancers'
import expandAliases from './expand-aliases'
import * as styles from './styles'
import * as cache from './cache'

// This is optimized for performance. It gets called a lot of times
export default function enhanceProps(rawProps) {
  const propsMap = expandAliases(rawProps)
  const enhancedProps = {}
  let className = rawProps.className || ''

  for (const [propName, propValue] of propsMap) {
    const cachedClassName = cache.get(propName, propValue)
    if (cachedClassName) {
      className = cx(className, cachedClassName)
      continue
    }

    const enhancer = propEnhancers[propName]
    // Skip false boolean enhancers. e.g: clearfix={false}
    // Also allows omitting props via overriding (i.e: neutralising props)
    if (enhancer && !propValue) {
      continue
    } else if (!enhancer) {
      // Native prop. e.g: disabled, value, type
      enhancedProps[propName] = propValue
      continue
    }

    const newCss = enhancer(propValue)
    // Glamor props (clearfix) don't have css
    if (newCss.styles) {
      styles.add(newCss.styles)
    }
    cache.set(propName, propValue, newCss.className)
    className = cx(className, newCss.className)
  }

  return [className, enhancedProps]
}
