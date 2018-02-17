import PropTypes from 'prop-types'
import getCss from '../get-css'

export const propTypes = {
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
  alignSelf: PropTypes.string,
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexBasis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexDirection: PropTypes.string,
  flexGrow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexShrink: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexWrap: PropTypes.string,
  justifyContent: PropTypes.string,
  justifySelf: PropTypes.string,
  order: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export const propAliases = {}

export const propValidators = {}

export const propEnhancers = {
  alignContent: alignContent => getCss('alignContent', alignContent),
  alignItems: alignItems => getCss('alignItems', alignItems),
  alignSelf: alignSelf => getCss('alignSelf', alignSelf),
  flex: flex => getCss('flex', flex),
  flexBasis: flexBasis => getCss('flexBasis', flexBasis),
  flexDirection: flexDirection => getCss('flexDirection', flexDirection),
  flexGrow: flexGrow => getCss('flexGrow', flexGrow),
  flexShrink: flexShrink => getCss('flexShrink', flexShrink),
  flexWrap: flexWrap => getCss('flexWrap', flexWrap),
  justifyContent: justifyContent => getCss('justifyContent', justifyContent),
  justifySelf: justifySelf => getCss('justifySelf', justifySelf),
  order: order => getCss('order', order),
}
