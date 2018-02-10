import Box from './box'
import * as cache from './cache'
import * as styles from './styles'

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
export splitProps from './utils/split-props'
export splitBoxProps from './utils/split-box-props'
export { css } from 'glamor'
export default Box

export function hydrate(entries) {
  cache.hydrate(entries)
}

export function extractStyles() {
  return {
    cache: cache.entries(),
    styles: styles.getAll()
  }
}

export function clearStyles() {
  cache.clear()
  styles.clear()
}
