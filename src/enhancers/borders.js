import PropTypes from 'prop-types'
import getCss from '../get-css'
import {spacesOutsideParentheses} from '../utils/regex'

export const propTypes = {
  border: PropTypes.string,
  borderBottom: PropTypes.string,
  borderBottomColor: PropTypes.string,
  borderBottomStyle: PropTypes.string,
  borderBottomWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderColor: PropTypes.string,
  borderLeft: PropTypes.string,
  borderLeftColor: PropTypes.string,
  borderLeftStyle: PropTypes.string,
  borderLeftWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRight: PropTypes.string,
  borderRightColor: PropTypes.string,
  borderRightStyle: PropTypes.string,
  borderRightWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderStyle: PropTypes.string,
  borderTop: PropTypes.string,
  borderTopColor: PropTypes.string,
  borderTopStyle: PropTypes.string,
  borderTopWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export const propAliases = {
  border: ['borderBottom', 'borderLeft', 'borderRight', 'borderTop'],
  borderColor: [
    'borderBottomColor',
    'borderLeftColor',
    'borderRightColor',
    'borderTopColor',
  ],
  borderStyle: [
    'borderBottomStyle',
    'borderLeftStyle',
    'borderRightStyle',
    'borderTopStyle',
  ],
  borderWidth: [
    'borderBottomWidth',
    'borderLeftWidth',
    'borderRightWidth',
    'borderTopWidth',
  ],
}

export const propValidators = {}

if (process.env.NODE_ENV !== 'production') {
  propValidators.borderColor = value => {
    if (spacesOutsideParentheses.test(value)) {
      return `multiple values (“${value}”) aren՚t supported with “borderColor”. Use “borderBottomColor”, “borderLeftColor” “borderRightColor” and “borderTopColor” instead.`
    }
  }
  propValidators.borderStyle = value => {
    if (spacesOutsideParentheses.test(value)) {
      return `multiple values (“${value}”) aren՚t supported with “borderStyle”. Use “borderBottomStyle”, “borderLeftStyle” “borderRightStyle” and “borderTopStyle” instead.`
    }
  }
  propValidators.borderWidth = value => {
    if (spacesOutsideParentheses.test(value)) {
      return `multiple values (“${value}”) aren՚t supported with “borderWidth”. Use “borderBottomWidth”, “borderLeftWidth” “borderRightWidth” and “borderTopWidth” instead.`
    }
  }
}

export const propEnhancers = {
  borderBottom: borderBottom => getCss('borderBottom', borderBottom),
  borderBottomColor: borderBottomColor =>
    getCss('borderBottomColor', borderBottomColor),
  borderBottomStyle: borderBottomStyle =>
    getCss('borderBottomStyle', borderBottomStyle),
  borderBottomWidth: borderBottomWidth =>
    getCss('borderBottomWidth', borderBottomWidth),
  borderLeft: borderLeft => getCss('borderLeft', borderLeft),
  borderLeftColor: borderLeftColor =>
    getCss('borderLeftColor', borderLeftColor),
  borderLeftStyle: borderLeftStyle =>
    getCss('borderLeftStyle', borderLeftStyle),
  borderLeftWidth: borderLeftWidth =>
    getCss('borderLeftWidth', borderLeftWidth),
  borderRight: borderRight => getCss('borderRight', borderRight),
  borderRightColor: borderRightColor =>
    getCss('borderRightColor', borderRightColor),
  borderRightStyle: borderRightStyle =>
    getCss('borderRightStyle', borderRightStyle),
  borderRightWidth: borderRightWidth =>
    getCss('borderRightWidth', borderRightWidth),
  borderTop: borderTop => getCss('borderTop', borderTop),
  borderTopColor: borderTopColor => getCss('borderTopColor', borderTopColor),
  borderTopStyle: borderTopStyle => getCss('borderTopStyle', borderTopStyle),
  borderTopWidth: borderTopWidth => getCss('borderTopWidth', borderTopWidth),
}
