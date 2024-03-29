import { propEnhancers } from './enhancers'
import expandAliases from './expand-aliases'
import * as cache from './cache'
import * as styles from './styles'
import { Without } from './types/box-types'
import { BoxPropValue, EnhancerProps } from './types/enhancers'

type PreservedProps = Without<React.ComponentProps<any>, keyof EnhancerProps>

interface EnhancePropsResult {
  className: string
  enhancedProps: PreservedProps
}

const SELECTORS_PROP = 'selectors'

/**
 * Converts the CSS props to class names and inserts the styles.
 */
export default function enhanceProps(
  props: EnhancerProps & React.ComponentPropsWithoutRef<any>,
  selectorHead = '',
  parentProperty = ''
): EnhancePropsResult {
  const propsMap = expandAliases(props)
  const preservedProps: PreservedProps = {}
  let className: string = props.className || ''

  for (const [property, value] of propsMap) {
    const isSelectorOrChildProp = property === SELECTORS_PROP || parentProperty.length > 0
    // Only attempt to process objects for the `selectors` prop or the individual selectors below it
    if (isObject(value) && isSelectorOrChildProp) {
      const prop = property === SELECTORS_PROP ? '' : property

      // If the selector head includes a comma, map over selectorHead and attach property for nested selectors so it isn't just added to the last entry
      // i.e. [aria-current="page"],[aria-selected="true"] + :before -> [aria-current="page"]:before,[aria-selected="true"]:before instead of [aria-current="page"],[aria-selected="true"]:before
      const newSelectorHead = selectorHead.includes(',')
        ? selectorHead
            .split(',')
            .map(selector => `${selector}${prop}`)
            .join(',')
        : `${selectorHead}${prop}`
      const parsed = enhanceProps(value, noAnd(newSelectorHead), property)
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

const isObject = (value: BoxPropValue | object): value is object => value != null && typeof value === 'object'

const noAnd = (value: string): string => value.replace(/&/g, '')
