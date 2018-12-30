import * as PropTypes from 'prop-types'
import getCss from '../get-css'
import {PropEncharValueType as ValueType} from './types'

export const propTypes = {
  transition: PropTypes.string,
  transitionDelay: PropTypes.string,
  transitionDuration: PropTypes.string,
  transitionProperty: PropTypes.string,
  transitionTimingFunction: PropTypes.string
}

export const propAliases = {}

export const propValidators = {}

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

export const propEnhancers = {
  transition: (value: ValueType) => getCss(transition, value),
  transitionDelay: (value: ValueType) => getCss(transitionDelay, value),
  transitionDuration: (value: ValueType) => getCss(transitionDuration, value),
  transitionProperty: (value: ValueType) => getCss(transitionProperty, value),
  transitionTimingFunction: (value: ValueType) => getCss(transitionTimingFunction, value)
}
