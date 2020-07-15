import PropTypes from 'prop-types'
import getCss from '../get-css'
import { PropValidators, PropTypesMapping, PropEnhancerValueType, PropAliases, PropEnhancers } from '../types/enhancers'

export const propTypes: PropTypesMapping = {
  background: PropTypes.string,
  backgroundBlendMode: PropTypes.string,
  backgroundClip: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundOrigin: PropTypes.string,
  backgroundPosition: PropTypes.string,
  backgroundRepeat: PropTypes.string,
  backgroundSize: PropTypes.string
}

export const propAliases: PropAliases = {}

export const propValidators: PropValidators = {}

const background = {
  className: 'bg',
  cssName: 'background',
  jsName: 'background',
  isPrefixed: true,
  complexValue: true
}
const backgroundColor = {
  className: 'bg-clr',
  cssName: 'background-color',
  jsName: 'backgroundColor'
}
const backgroundImage = {
  className: 'bg-img',
  cssName: 'background-image',
  jsName: 'backgroundImage',
  isPrefixed: true,
  complexValue: true
}
const backgroundPosition = {
  className: 'bg-pos',
  cssName: 'background-position',
  jsName: 'backgroundPosition'
}
const backgroundSize = {
  className: 'bg-siz',
  cssName: 'background-size',
  jsName: 'backgroundSize'
}
const backgroundOrigin = {
  className: 'bg-orgn',
  cssName: 'background-origin',
  jsName: 'backgroundOrigin'
}
const backgroundRepeat = {
  className: 'bg-rpt',
  cssName: 'background-repeat',
  jsName: 'backgroundRepeat'
}
const backgroundClip = {
  className: 'bg-clp',
  cssName: 'background-clip',
  jsName: 'backgroundClip'
}
const backgroundBlendMode = {
  className: 'bg-blnd-md',
  cssName: 'background-blend-mode',
  jsName: 'backgroundBlendMode'
}

export const propEnhancers: PropEnhancers = {
  background: (value: PropEnhancerValueType) => getCss(background, value),
  backgroundBlendMode: (value: PropEnhancerValueType) => getCss(backgroundBlendMode, value),
  backgroundClip: (value: PropEnhancerValueType) => getCss(backgroundClip, value),
  backgroundColor: (value: PropEnhancerValueType) => getCss(backgroundColor, value),
  backgroundImage: (value: PropEnhancerValueType) => getCss(backgroundImage, value),
  backgroundOrigin: (value: PropEnhancerValueType) => getCss(backgroundOrigin, value),
  backgroundPosition: (value: PropEnhancerValueType) => getCss(backgroundPosition, value),
  backgroundRepeat: (value: PropEnhancerValueType) => getCss(backgroundRepeat, value),
  backgroundSize: (value: PropEnhancerValueType) => getCss(backgroundSize, value)
}
