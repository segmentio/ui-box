import PropTypes from 'prop-types'
import getCss from '../get-css'
import { PropEnhancerValueType, PropValidators, PropEnhancers, PropTypesMapping, PropAliases } from '../types/enhancers'

export const propTypes: PropTypesMapping = {
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  position: PropTypes.string,
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const propAliases: PropAliases = {}
export const propValidators: PropValidators = {}

const position = {
  className: 'pst',
  cssName: 'position',
  jsName: 'position',
  safeValue: true,
  isPrefixed: true
}
const top = {
  className: 'top',
  cssName: 'top',
  jsName: 'top'
}
const right = {
  className: 'rgt',
  cssName: 'right',
  jsName: 'right'
}
const bottom = {
  className: 'btm',
  cssName: 'bottom',
  jsName: 'bottom'
}
const left = {
  className: 'lft',
  cssName: 'left',
  jsName: 'left'
}

export const propEnhancers: PropEnhancers = {
  bottom: (value: PropEnhancerValueType) => getCss(bottom, value),
  left: (value: PropEnhancerValueType) => getCss(left, value),
  position: (value: PropEnhancerValueType) => getCss(position, value),
  right: (value: PropEnhancerValueType) => getCss(right, value),
  top: (value: PropEnhancerValueType) => getCss(top, value)
}
