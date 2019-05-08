import PropTypes from 'prop-types'
import getCss from '../get-css'
import { PropEnhancerValueType, PropValidators, PropEnhancers, PropTypesMapping, PropAliases } from '../types/enhancers'

export const propTypes: PropTypesMapping = {
  boxSizing: PropTypes.string,
  clear: PropTypes.string,
  clearfix: PropTypes.bool,
  display: PropTypes.string,
  float: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const propAliases: PropAliases = {}
export const propValidators: PropValidators = {}

const display = {
  className: 'dspl',
  cssName: 'display',
  jsName: 'display',
  safeValue: true,
  isPrefixed: true
}
const float = {
  className: 'flt',
  cssName: 'float',
  jsName: 'float',
  safeValue: true
}
const clear = {
  className: 'clr',
  cssName: 'clear',
  jsName: 'clear',
  safeValue: true
}
const zIndex = {
  className: 'z-idx',
  cssName: 'z-index',
  jsName: 'zIndex',
  safeValue: true,
  defaultUnit: ''
}
const boxSizing = {
  className: 'box-szg',
  cssName: 'box-sizing',
  jsName: 'boxSizing',
  safeValue: true
}

export const propEnhancers: PropEnhancers = {
  boxSizing: (value: PropEnhancerValueType) => getCss(boxSizing, value),
  clear: (value: PropEnhancerValueType) => getCss(clear, value),
  clearfix: () => ({
    className: '📦clearfix',
    styles: `
.📦clearfix:before, .📦clearfix:after {
  display: table;
  clear: both;
  content: "";
}`
  }),
  display: (value: PropEnhancerValueType) => getCss(display, value),
  float: (value: PropEnhancerValueType) => getCss(float, value),
  zIndex: (value: PropEnhancerValueType) => getCss(zIndex, value)
}
