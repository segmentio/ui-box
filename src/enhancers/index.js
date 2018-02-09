import * as background from './background'
import * as borderRadius from './border-radius'
import * as borders from './borders'
import * as boxShadow from './box-shadow'
import * as dimensions from './dimensions'
import * as flex from './flex'
import * as interaction from './interaction'
import * as layout from './layout'
import * as opacity from './opacity'
import * as overflow from './overflow'
import * as position from './position'
import * as spacing from './spacing'
import * as text from './text'
import * as transform from './transform'

export {
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
}

export const propTypes = {
  ...background.propTypes,
  ...borderRadius.propTypes,
  ...borders.propTypes,
  ...boxShadow.propTypes,
  ...dimensions.propTypes,
  ...flex.propTypes,
  ...interaction.propTypes,
  ...layout.propTypes,
  ...opacity.propTypes,
  ...overflow.propTypes,
  ...position.propTypes,
  ...spacing.propTypes,
  ...text.propTypes,
  ...transform.propTypes
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

export const propAliases = {
  ...background.propAliases,
  ...borderRadius.propAliases,
  ...borders.propAliases,
  ...boxShadow.propAliases,
  ...dimensions.propAliases,
  ...flex.propAliases,
  ...interaction.propAliases,
  ...layout.propAliases,
  ...opacity.propAliases,
  ...overflow.propAliases,
  ...position.propAliases,
  ...spacing.propAliases,
  ...text.propAliases,
  ...transform.propAliases
}

export const propEnhancers = {
  ...background.propEnhancers,
  ...borderRadius.propEnhancers,
  ...borders.propEnhancers,
  ...boxShadow.propEnhancers,
  ...dimensions.propEnhancers,
  ...flex.propEnhancers,
  ...interaction.propEnhancers,
  ...layout.propEnhancers,
  ...opacity.propEnhancers,
  ...overflow.propEnhancers,
  ...position.propEnhancers,
  ...spacing.propEnhancers,
  ...text.propEnhancers,
  ...transform.propEnhancers
}
