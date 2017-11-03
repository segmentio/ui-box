import {
  dimensions,
  flex,
  interaction,
  layout,
  opacity,
  position,
  spacing,
  transform,
} from '../enhancers'
import splitProps from './splitProps'

const wrapperKeys = [
  ...Object.keys(dimensions.propTypes),
  ...Object.keys(flex.propTypes),
  ...Object.keys(interaction.propTypes),
  ...Object.keys(layout.propTypes),
  ...Object.keys(opacity.propTypes),
  ...Object.keys(position.propTypes),
  ...Object.keys(spacing.propTypes),
  ...Object.keys(transform.propTypes),
]

/**
 * Convience method to split wrapper props
 */
export default function splitWrapperProps(props) {
  return splitProps(props, wrapperKeys)
}
