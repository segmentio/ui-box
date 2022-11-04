import PropTypes from 'prop-types'
import getCss from '../get-css'
import { getClassNamePrefix } from '../get-class-name'
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
  boxSizing: (value: PropEnhancerValueType, selector: string) => getCss(boxSizing, value, selector),
  clear: (value: PropEnhancerValueType, selector: string) => getCss(clear, value, selector),
  clearfix: () => ({
    className: `${getClassNamePrefix()}clearfix`,
    styles: `
.${getClassNamePrefix()}clearfix:before, .${getClassNamePrefix()}clearfix:after {
  display: table;
  clear: both;
  content: "";
}`
  }),
  display: (value: PropEnhancerValueType, selector: string) => getCss(display, value, selector),
  float: (value: PropEnhancerValueType, selector: string) => getCss(float, value, selector),
  zIndex: (value: PropEnhancerValueType, selector: string) => getCss(zIndex, value, selector)
}
