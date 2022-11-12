import PropTypes from 'prop-types'
import getCss from '../get-css'
import { PropValidators, PropTypesMapping, PropEnhancerValueType, PropAliases, PropEnhancers } from '../types/enhancers'

export const propTypes: PropTypesMapping = {
  animation: PropTypes.string,
  animationDelay: PropTypes.string,
  animationDirection: PropTypes.string,
  animationDuration: PropTypes.string,
  animationFillMode: PropTypes.string,
  animationIterationCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  animationName: PropTypes.string,
  animationPlayState: PropTypes.string,
  animationTimingFunction: PropTypes.string
}

export const propAliases: PropAliases = {}

export const propValidators: PropValidators = {}

const animation = {
  className: 'a',
  cssName: 'animation',
  jsName: 'animation',
  complexValue: true
}

const animationDelay = {
  className: 'a-dly',
  cssName: 'animation-delay',
  jsName: 'animationDelay',
  defaultUnit: 'ms'
}

const animationDirection = {
  className: 'a-dir',
  cssName: 'animation-direction',
  jsName: 'animationDirection',
  safeValue: true
}

const animationDuration = {
  className: 'a-dur',
  cssName: 'animation-duration',
  jsName: 'animationDuration',
  defaultUnit: 'ms'
}

const animationFillMode = {
  className: 'a-fill-md',
  cssName: 'animation-fill-mode',
  jsName: 'animationFillMode',
  safeValue: true
}

const animationIterationCount = {
  className: 'a-itr-ct',
  cssName: 'animation-iteration-count',
  jsName: 'animationIterationCount',
  defaultUnit: ''
}

const animationName = {
  className: 'a-nm',
  cssName: 'animation-name',
  jsName: 'animationName'
}

const animationPlayState = {
  className: 'a-ply-ste',
  cssName: 'animation-play-state',
  jsName: 'animationPlayState',
  safeValue: true
}

const animationTimingFunction = {
  className: 'a-tmng-fn',
  cssName: 'animation-timing-function',
  jsName: 'animationTimingFunction',
  complexValue: true
}

export const propEnhancers: PropEnhancers = {
  animation: (value: PropEnhancerValueType, selector: string) => getCss(animation, value, selector),
  animationDelay: (value: PropEnhancerValueType, selector: string) => getCss(animationDelay, value, selector),
  animationDirection: (value: PropEnhancerValueType, selector: string) => getCss(animationDirection, value, selector),
  animationDuration: (value: PropEnhancerValueType, selector: string) => getCss(animationDuration, value, selector),
  animationFillMode: (value: PropEnhancerValueType, selector: string) => getCss(animationFillMode, value, selector),
  animationIterationCount: (value: PropEnhancerValueType, selector: string) =>
    getCss(animationIterationCount, value, selector),
  animationName: (value: PropEnhancerValueType, selector: string) => getCss(animationName, value, selector),
  animationPlayState: (value: PropEnhancerValueType, selector: string) => getCss(animationPlayState, value, selector),
  animationTimingFunction: (value: PropEnhancerValueType, selector: string) =>
    getCss(animationTimingFunction, value, selector)
}
