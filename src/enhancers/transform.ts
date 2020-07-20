import PropTypes from 'prop-types'
import getCss from '../get-css'
import { PropEnhancerValueType, PropValidators, PropEnhancers, PropTypesMapping, PropAliases } from '../types/enhancers'

export const propTypes: PropTypesMapping = {
  transform: PropTypes.string,
  transformOrigin: PropTypes.string
}

export const propAliases: PropAliases = {}

export const propValidators: PropValidators = {}

const transform = {
  className: 'tfrm',
  cssName: 'transform',
  jsName: 'transform',
  complexValue: true
}
const transformOrigin = {
  className: 'tfrm-orgn',
  cssName: 'transform-origin',
  jsName: 'transformOrigin',
  complexValue: true
}

export const propEnhancers: PropEnhancers = {
  transform: (value: PropEnhancerValueType, selector: string) => getCss(transform, value, selector),
  transformOrigin: (value: PropEnhancerValueType, selector: string) => getCss(transformOrigin, value, selector)
}
