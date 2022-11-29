import PropTypes from 'prop-types'
import getCss from '../get-css'
import { PropEnhancerValueType, PropValidators, PropEnhancers, PropTypesMapping, PropAliases } from '../types/enhancers'

export const propTypes: PropTypesMapping = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeDasharray: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeDashoffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  strokeLinecap: PropTypes.string,
  strokeMiterlimit: PropTypes.number,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const propAliases: PropAliases = {}
export const propValidators: PropValidators = {}

const fill = {
  className: 'fill',
  cssName: 'fill',
  jsName: 'fill'
}

const stroke = { className: 'strk', cssName: 'stroke', jsName: 'stroke' }

const strokeDasharray = {
  className: 'strk-dshary',
  cssName: 'stroke-dasharray',
  jsName: 'strokeDasharray',
  defaultUnit: ''
}

const strokeDashoffset = {
  className: 'strk-dshofst',
  cssName: 'stroke-dashoffset',
  jsName: 'strokeDashoffset',
  defaultUnit: ''
}

const strokeLinecap = { className: 'strk-lncp', cssName: 'stroke-linecap', jsName: 'strokeLinecap', safeValue: true }

const strokeMiterlimit = {
  className: 'strk-mtrlmt',
  cssName: 'stroke-miterlimit',
  jsName: 'strokeMiterlimit',
  defaultUnit: ''
}

const strokeWidth = { className: 'strk-w', cssName: 'stroke-width', jsName: 'strokeWidth', defaultUnit: '' }

export const propEnhancers: PropEnhancers = {
  fill: (value: PropEnhancerValueType, selector: string) => getCss(fill, value, selector),
  stroke: (value: PropEnhancerValueType, selector: string) => getCss(stroke, value, selector),
  strokeDasharray: (value: PropEnhancerValueType, selector: string) => getCss(strokeDasharray, value, selector),
  strokeDashoffset: (value: PropEnhancerValueType, selector: string) => getCss(strokeDashoffset, value, selector),
  strokeLinecap: (value: PropEnhancerValueType, selector: string) => getCss(strokeLinecap, value, selector),
  strokeMiterlimit: (value: PropEnhancerValueType, selector: string) => getCss(strokeMiterlimit, value, selector),
  strokeWidth: (value: PropEnhancerValueType, selector: string) => getCss(strokeWidth, value, selector)
}
