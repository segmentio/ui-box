import PropTypes from 'prop-types'
import getCss from '../get-css'

export const propTypes = {
  boxSizing: PropTypes.string,
  clear: PropTypes.string,
  clearfix: PropTypes.bool,
  display: PropTypes.string,
  float: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const propAliases = {}

export const propValidators = {}

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

export const propEnhancers = {
  boxSizing: value => getCss(boxSizing, value),
  clear: value => getCss(clear, value),
  clearfix: () => ({
    className: '📦clearfix',
    styles: `
.📦clearfix:before, .📦clearfix:after {
  display: table;
  clear: both;
  content: "";
}`
  }),
  display: value => getCss(display, value),
  float: value => getCss(float, value),
  zIndex: value => getCss(zIndex, value)
}
