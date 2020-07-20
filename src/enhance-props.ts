import {propEnhancers} from './enhancers'
import expandAliases from './expand-aliases'
import * as cache from './cache'
import * as styles from './styles'
import {Without} from './types/box-types'
import {EnhancerProps} from './types/enhancers'

type PreservedProps = Without<React.ComponentProps<any>, keyof EnhancerProps>

interface EnhancedPropsResult {
  className: string
  enhancedProps: PreservedProps
}

function noAnd(s: string): string {
  return s.replace(/&/g, '')
}

/**
 * Converts the CSS props to class names and inserts the styles.
 */
export default function enhanceProps(props: EnhancerProps & React.ComponentPropsWithoutRef<any>, selectorHead = ''): EnhancedPropsResult {
  const propsMap = expandAliases(props)
  const preservedProps: PreservedProps = {}
  let className = props.className || ''

  for (const [property, value] of propsMap) {
    if (value && typeof value === 'object') {
      const prop = property === 'selectors' ? '' : property
      const parsed = enhanceProps(value, noAnd(selectorHead + prop))
      className = `${className} ${parsed.className}`
      continue
    }

    const enhancer = propEnhancers[property]
    if (!enhancer) {
      // Pass through native props. e.g: disabled, value, type
      preservedProps[property] = value
      continue
    }

    // Skip false boolean enhancers. e.g: `clearfix={false}`
    // Also allows omitting props via overriding with `null` (i.e: neutralising props)
    if (value === null || value === undefined || value === false) {
      continue
    }

    const cachedClassName = cache.get(property, value, selectorHead)
    if (cachedClassName) {
      className = `${className} ${cachedClassName}`
      continue
    }

    const newCss = enhancer(value, selectorHead)
    // Allow enhancers to return null for invalid values
    if (newCss) {
      styles.add(newCss.styles)
      cache.set(property, value, newCss.className, selectorHead)
      className = `${className} ${newCss.className}`
    }
  }

  className = className.trim()

  return { className, enhancedProps: preservedProps }
}
