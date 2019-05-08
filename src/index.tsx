import * as cache from './cache'
import * as styles from './styles'

export { default } from './box'
export { splitProps } from './utils/split-props'
export { splitBoxProps } from './utils/split-box-props'
export { BoxProps } from './types/box-types'

export {
  background,
  borderRadius,
  borders,
  boxShadow,
  dimensions,
  flex,
  interaction,
  layout,
  list,
  opacity,
  overflow,
  position,
  spacing,
  text,
  transform,
  propTypes,
  propNames,
  propAliases,
  propEnhancers
} from './enhancers'

export const hydrate = cache.hydrate

export function extractStyles() {
  const output = {
    cache: cache.entries(),
    styles: styles.getAll()
  }
  clearStyles()
  return output
}

export function clearStyles() {
  cache.clear()
  styles.clear()
}
