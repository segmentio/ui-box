import {css as gcss} from 'glamor'
import once from 'lodash.once'
import * as cache from './cache'
import * as styles from './styles'

export default from './box'
export splitProps from './utils/split-props'
export splitBoxProps from './utils/split-box-props'

const cssWarning = once(() =>
  console.warn(
    'ui-box deprecation: the `css` export will be removed in the next major version in favour of importing glamor directly.'
  )
)

export function css(...args) {
  if (process.env.NODE_ENV !== 'production') {
    cssWarning()
  }
  return gcss(...args)
}

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
  propEnhancers,
} from './enhancers'

export function hydrate(entries) {
  cache.hydrate(entries)
}

export function extractStyles() {
  return {
    cache: cache.entries(),
    styles: styles.getAll(),
  }
}

export function clearStyles() {
  cache.clear()
  styles.clear()
}
