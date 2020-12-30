import {propEnhancers} from './enhancers'
import expandAliases from './expand-aliases'
import * as cache from './cache'
import * as styles from './styles'
import {Without} from './types/box-types'
import {EnhancerProps, PSEUDO_SELECTORS} from './types/enhancers'

type PreservedProps = Without<React.ComponentProps<any>, keyof EnhancerProps>

interface EnhancedPropsResult {
  className: string
  enhancedProps: PreservedProps
}

function isPseudoSelectorProp(prop: string): boolean {
  return PSEUDO_SELECTORS.indexOf(prop as any) !== -1
}

/**
 * Converts the CSS props to class names and inserts the styles.
 */
export default function enhanceProps(rawProps: EnhancerProps & React.ComponentPropsWithoutRef<any>, prefix?: string): EnhancedPropsResult {
  const propsMap = expandAliases(rawProps)
  const preservedProps: PreservedProps = {}
  let className = rawProps.className || ''

  console.log(propsMap, prefix)

  for (const [propName, propValue] of propsMap) {
    const cachedClassName = cache.get(`${propName}${prefix ? `_${prefix}` : ''}`, propValue)
    if (cachedClassName) {
      className = `${className} ${cachedClassName}`
      continue
    }

    if (isPseudoSelectorProp(propName)) {
      const { className: pseudoSelectorEnhancedClassName } = enhanceProps(propValue as any, propName.slice(1))
      className = `${className} ${pseudoSelectorEnhancedClassName}`
    }

    const enhancer = propEnhancers[propName]

    console.log(enhancer)
    // Skip false boolean enhancers. e.g: `clearfix={false}`
    // Also allows omitting props via overriding with `null` (i.e: neutralising props)
    if (
      enhancer &&
      (propValue === null || propValue === undefined || propValue === false)
    ) {
      continue
    } else if (!enhancer) {
      preservedProps[propName] = propValue
      continue
    }

    const newCss = enhancer(propValue, prefix)
    // Allow enhancers to return null for invalid values

    if (newCss) {
      styles.add(newCss.styles)
      cache.set(`${propName}${prefix ? `_${prefix}` : ''}`, propValue, newCss.className)
      className = `${className} ${newCss.className}`
    }
  }

  className = className.trim()

  return {className, enhancedProps: preservedProps}
}
