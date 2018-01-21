import * as background from './background'
import * as borderRadius from './border-radius'
import * as borders from './borders'
import * as boxShadow from './box-shadow'
import * as dimensions from './dimensions'
import * as layout from './layout'
import * as opacity from './opacity'
import * as flex from './flex'
import * as overflow from './overflow'
import * as position from './position'
import * as spacing from './spacing'
import * as text from './text'
import * as transform from './transform'
import * as interaction from './interaction'

export {
  background,
  borderRadius,
  borders,
  boxShadow,
  dimensions,
  layout,
  opacity,
  flex,
  overflow,
  position,
  spacing,
  text,
  transform,
  interaction
}

export const allEnhancers = [
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
]

export const propTypes = {
  ...background.propTypes,
  ...borderRadius.propTypes,
  ...borders.propTypes,
  ...boxShadow.propTypes,
  ...dimensions.propTypes,
  ...layout.propTypes,
  ...opacity.propTypes,
  ...flex.propTypes,
  ...overflow.propTypes,
  ...position.propTypes,
  ...spacing.propTypes,
  ...text.propTypes,
  ...transform.propTypes,
  ...interaction.propTypes
}

export const propNames = [
  ...background.propNames,
  ...borderRadius.propNames,
  ...borders.propNames,
  ...boxShadow.propNames,
  ...dimensions.propNames,
  ...flex.propNames,
  ...interaction.propNames,
  ...layout.propNames,
  ...opacity.propNames,
  ...overflow.propNames,
  ...position.propNames,
  ...spacing.propNames,
  ...text.propNames,
  ...transform.propNames
]
