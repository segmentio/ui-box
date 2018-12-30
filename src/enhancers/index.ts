import * as background from './background'
import * as borderRadius from './border-radius'
import * as borders from './borders'
import * as boxShadow from './box-shadow'
import * as dimensions from './dimensions'
import * as flex from './flex'
import * as grid from './grid'
import * as interaction from './interaction'
import * as layout from './layout'
import * as list from './list'
import * as opacity from './opacity'
import * as overflow from './overflow'
import * as position from './position'
import * as spacing from './spacing'
import * as text from './text'
import * as transform from './transform'
import * as transition from './transition'

export {
  background,
  borderRadius,
  borders,
  boxShadow,
  dimensions,
  flex,
  grid,
  interaction,
  layout,
  list,
  opacity,
  overflow,
  position,
  spacing,
  text,
  transform,
  transition
}

export const propTypes = {
  ...background.propTypes,
  ...borderRadius.propTypes,
  ...borders.propTypes,
  ...boxShadow.propTypes,
  ...dimensions.propTypes,
  ...flex.propTypes,
  ...grid.propTypes,
  ...interaction.propTypes,
  ...layout.propTypes,
  ...list.propTypes,
  ...opacity.propTypes,
  ...overflow.propTypes,
  ...position.propTypes,
  ...spacing.propTypes,
  ...text.propTypes,
  ...transform.propTypes,
  ...transition.propTypes
}

export const propNames = Object.keys(propTypes)

export const propAliases = {
  ...background.propAliases,
  ...borderRadius.propAliases,
  ...borders.propAliases,
  ...boxShadow.propAliases,
  ...dimensions.propAliases,
  ...flex.propAliases,
  ...grid.propAliases,
  ...interaction.propAliases,
  ...layout.propAliases,
  ...list.propAliases,
  ...opacity.propAliases,
  ...overflow.propAliases,
  ...position.propAliases,
  ...spacing.propAliases,
  ...text.propAliases,
  ...transform.propAliases,
  ...transition.propAliases
}

export const propValidators = {
  ...background.propValidators,
  ...borderRadius.propValidators,
  ...borders.propValidators,
  ...boxShadow.propValidators,
  ...dimensions.propValidators,
  ...flex.propValidators,
  ...grid.propValidators,
  ...interaction.propValidators,
  ...layout.propValidators,
  ...list.propValidators,
  ...opacity.propValidators,
  ...overflow.propValidators,
  ...position.propValidators,
  ...spacing.propValidators,
  ...text.propValidators,
  ...transform.propValidators,
  ...transition.propValidators
}

export const propEnhancers = {
  ...background.propEnhancers,
  ...borderRadius.propEnhancers,
  ...borders.propEnhancers,
  ...boxShadow.propEnhancers,
  ...dimensions.propEnhancers,
  ...flex.propEnhancers,
  ...grid.propEnhancers,
  ...interaction.propEnhancers,
  ...layout.propEnhancers,
  ...list.propEnhancers,
  ...opacity.propEnhancers,
  ...overflow.propEnhancers,
  ...position.propEnhancers,
  ...spacing.propEnhancers,
  ...text.propEnhancers,
  ...transform.propEnhancers,
  ...transition.propEnhancers
}
