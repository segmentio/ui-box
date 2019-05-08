import PropTypes from 'prop-types'
import getCss from '../get-css'
import { PropEnhancerValueType, PropValidators, PropEnhancers, PropTypesMapping, PropAliases } from '../types/enhancers'

export const propTypes: PropTypesMapping = {
  transition: PropTypes.string,
  transitionDelay: PropTypes.string,
  transitionDuration: PropTypes.string,
  transitionProperty: PropTypes.string,
  transitionTimingFunction: PropTypes.string
}

export const propAliases: PropAliases = {}

export const propValidators: PropValidators = {}

const transition = {
  className: 'tstn',
  cssName: 'transition',
  jsName: 'transition',
  complexValue: true
}
const transitionDelay = {
  className: 'tstn-dly',
  cssName: 'transition-delay',
  jsName: 'transitionDelay',
  complexValue: true
}
const transitionDuration = {
  className: 'tstn-drn',
  cssName: 'transition-duration',
  jsName: 'transitionDuration',
  complexValue: true
}
const transitionProperty = {
  className: 'tstn-pty',
  cssName: 'transition-property',
  jsName: 'transitionProperty',
  complexValue: true
}
const transitionTimingFunction = {
  className: 'tstn-tf',
  cssName: 'transition-timing-function',
  jsName: 'transitionTimingFunction',
  complexValue: true
}

export const propEnhancers: PropEnhancers = {
  transition: (value: PropEnhancerValueType) => getCss(transition, value),
  transitionDelay: (value: PropEnhancerValueType) => getCss(transitionDelay, value),
  transitionDuration: (value: PropEnhancerValueType) => getCss(transitionDuration, value),
  transitionProperty: (value: PropEnhancerValueType) => getCss(transitionProperty, value),
  transitionTimingFunction: (value: PropEnhancerValueType) => getCss(transitionTimingFunction, value)
}
