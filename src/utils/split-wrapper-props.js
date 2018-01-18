import {
  background,
  borderRadius,
  borders,
  boxShadow,
  dimensions,
  flex,
  interaction,
  layout,
  opacity,
  overflow,
  position,
  spacing,
  text,
  transform
} from '../enhancers'
import splitProps from './split-props'

const wrapperKeys = [
  ...background.keysPropTypes,
  ...borderRadius.keysPropTypes,
  ...borders.keysPropTypes,
  ...boxShadow.keysPropTypes,
  ...dimensions.keysPropTypes,
  ...flex.keysPropTypes,
  ...interaction.keysPropTypes,
  ...layout.keysPropTypes,
  ...opacity.keysPropTypes,
  ...overflow.keysPropTypes,
  ...position.keysPropTypes,
  ...spacing.keysPropTypes,
  ...text.keysPropTypes,
  ...transform.keysPropTypes
]

/**
 * Convience method to split wrapper props
 */
export default function splitWrapperProps(props) {
  return splitProps(props, wrapperKeys)
}
