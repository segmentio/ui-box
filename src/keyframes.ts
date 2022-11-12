import { KeyframesTimeline, KeyframesTimelineKey } from './types/keyframes'
import hash from '@emotion/hash'
import flattenObject from './utils/flatten-object'
import { propEnhancers } from './enhancers'
import { BoxCssProps, CssProps } from './types/enhancers'
import { Rule } from './prefixer'
import isProduction from './utils/is-production'
import * as stylesheet from './styles'
import * as cache from './cache'

/**
 * Generates a unique keyframe name and injects the styles into the stylesheet.
 * @returns Generated name of the keyframe to use in animation props, i.e. `openAnimation_65p985`
 *
 * @example
 * const openAnimation = keyframes('openAnimation', {
 *   from: {
 *     opacity: 0,
 *     transform: 'translateY(-120%)'
 *   },
 *   to: {
 *     transform: 'translateY(0)'
 *   }
 * })
 *
 * <Box animation={`${openAnimation} 240ms cubic-bezier(0.175, 0.885, 0.320, 1.175) both`} ... />
 */
const keyframes = (friendlyName: string, timeline: KeyframesTimeline): string => {
  const hashedValue = hash(flattenObject(timeline))
  const name = `${friendlyName}_${hashedValue}`

  // Check for styles in cache before continuing
  const cachedStyles = cache.get(friendlyName, hashedValue, 'keyframe')
  if (cachedStyles != null) {
    return name
  }

  const keys = Object.keys(timeline) as KeyframesTimelineKey[]
  const timelineStyles = keys.map(key => getStylesForTimelineKey(key, timeline[key] || {}))

  const styles = getKeyframesStyles(name, timelineStyles)

  cache.set(friendlyName, hashedValue, styles, 'keyframe')
  stylesheet.add(styles)

  return name
}

const flatten = <T>(values: T[][]): T[] => {
  const flattenedValues: T[] = []
  return flattenedValues.concat(...values)
}

/**
 * Returns the style string with the rules for the given timeline key
 * @example
 * ```
 * from {
 *   opacity: 0;
 *   transform: translateY(-120%);
 * }```
 */
const getStylesForTimelineKey = (timelineKey: KeyframesTimelineKey, cssProps: BoxCssProps<CssProps>): string => {
  const cssPropKeys = Object.keys(cssProps) as Array<keyof BoxCssProps<CssProps>>
  const rules = flatten(cssPropKeys.map(cssPropKey => getRulesForKey(cssPropKey, cssProps)))
  const key = timelineKeyToString(timelineKey)
  const rulesString = rules
    .map(rule => {
      const { property, value } = rule
      if (isProduction()) {
        return `${property}:${value};`
      }

      return `    ${property}: ${value};`
    })
    .join(isProduction() ? '' : '\n')

  if (isProduction()) {
    return `${key} {${rulesString}}`
  }

  return `  ${key} {\n${rulesString}\n  }`
}

const getRulesForKey = (key: keyof BoxCssProps<CssProps>, cssProps: BoxCssProps<CssProps>): Rule[] => {
  const value = cssProps[key]
  const enhancer = propEnhancers[key]

  if (enhancer == null || value == null || value === false) {
    return []
  }

  const enhancedProp = enhancer(value, '')
  if (enhancedProp == null) {
    return []
  }

  return enhancedProp.rules
}

/**
 * Returns keyframes style string for insertion into the stylesheet
 * @example
 * ```@keyframes openAnimation_65p985 {
 *   from {
 *     opacity: 0;
 *     transform: translateY(-120%);
 *   }
 *   to {
 *     transform: translateY(0);
 *   }
 * }```
 */
const getKeyframesStyles = (name: string, rules: string[]): string => {
  const separator = isProduction() ? '' : '\n'
  const openBrace = `{${separator}`
  const closeBrace = `${separator}}`
  const concatenatedRules = rules.join(separator)

  return `@keyframes ${name} ${openBrace}${concatenatedRules}${closeBrace}`
}

const timelineKeyToString = (timelineKey: KeyframesTimelineKey): string => {
  const isNumber = !isNaN(Number(timelineKey))
  return isNumber ? `${timelineKey}%` : timelineKey.toString()
}

export default keyframes
