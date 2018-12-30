import * as PropTypes from 'prop-types'
import getCss from '../get-css'
import {PropEncharValueType as ValueType} from './types'

export const propTypes = {
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

export const propAliases = {}

export const propValidators = {}

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

export const propEnhancers = {
  background: (value: ValueType) => getCss(background, value),
  backgroundBlendMode: (value: ValueType) => getCss(backgroundBlendMode, value),
  backgroundClip: (value: ValueType) => getCss(backgroundClip, value),
  backgroundColor: (value: ValueType) => getCss(backgroundColor, value),
  backgroundImage: (value: ValueType) => getCss(backgroundImage, value),
  backgroundOrigin: (value: ValueType) => getCss(backgroundOrigin, value),
  backgroundPosition: (value: ValueType) => getCss(backgroundPosition, value),
  backgroundRepeat: (value: ValueType) => getCss(backgroundRepeat, value),
  backgroundSize: (value: ValueType) => getCss(backgroundSize, value)
}
