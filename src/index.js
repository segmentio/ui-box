import * as cache from './cache'
import * as styles from './styles'

export {default} from './box'
export {default as splitProps} from './utils/split-props'
export {default as splitBoxProps} from './utils/split-box-props'

export {css} from 'glamor'
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

export function hydrate(entries) {
  cache.hydrate(entries)
}

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
