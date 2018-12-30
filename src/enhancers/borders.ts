import * as PropTypes from 'prop-types'
import getCss from '../get-css'
import {spacesOutsideParentheses} from '../utils/regex'
import {PropEncharValueType as ValueType} from './types'

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
  borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const propAliases = {
  border: ['borderBottom', 'borderLeft', 'borderRight', 'borderTop'],
  borderColor: [
    'borderBottomColor',
    'borderLeftColor',
    'borderRightColor',
    'borderTopColor'
  ],
  borderStyle: [
    'borderBottomStyle',
    'borderLeftStyle',
    'borderRightStyle',
    'borderTopStyle'
  ],
  borderWidth: [
    'borderBottomWidth',
    'borderLeftWidth',
    'borderRightWidth',
    'borderTopWidth'
  ]
}

interface Validators {
  borderColor?: (value: string) => string | undefined
  borderStyle?: (value: string) => string | undefined
  borderWidth?: (value: string) => string | undefined
}

export const propValidators: Validators = { }

if (process.env.NODE_ENV !== 'production') {
  propValidators.borderColor = (value: string) => {
    if (spacesOutsideParentheses.test(value)) {
      return `multiple values (“${value}”) aren՚t supported with “borderColor”. Use “borderBottomColor”, “borderLeftColor” “borderRightColor” and “borderTopColor” instead.`
    }

    return
  }
  propValidators.borderStyle = (value: string) => {
    if (spacesOutsideParentheses.test(value)) {
      return `multiple values (“${value}”) aren՚t supported with “borderStyle”. Use “borderBottomStyle”, “borderLeftStyle” “borderRightStyle” and “borderTopStyle” instead.`
    }

    return
  }
  propValidators.borderWidth = (value: string) => {
    if (spacesOutsideParentheses.test(value)) {
      return `multiple values (“${value}”) aren՚t supported with “borderWidth”. Use “borderBottomWidth”, “borderLeftWidth” “borderRightWidth” and “borderTopWidth” instead.`
    }

    return
  }
}

const borderLeft = {
  className: 'b-lft',
  cssName: 'border-left',
  jsName: 'borderLeft'
}
const borderLeftColor = {
  className: 'b-lft-clr',
  cssName: 'border-left-color',
  jsName: 'borderLeftColor'
}
const borderLeftStyle = {
  className: 'b-lft-stl',
  cssName: 'border-left-style',
  jsName: 'borderLeftStyle',
  safeValue: true
}
const borderLeftWidth = {
  className: 'b-lft-wdt',
  cssName: 'border-left-width',
  jsName: 'borderLeftWidth'
}
const borderRight = {
  className: 'b-rgt',
  cssName: 'border-right',
  jsName: 'borderRight'
}
const borderRightColor = {
  className: 'b-rgt-clr',
  cssName: 'border-right-color',
  jsName: 'borderRightColor'
}
const borderRightStyle = {
  className: 'b-rgt-stl',
  cssName: 'border-right-style',
  jsName: 'borderRightStyle',
  safeValue: true
}
const borderRightWidth = {
  className: 'b-rgt-wdt',
  cssName: 'border-right-width',
  jsName: 'borderRightWidth'
}
const borderTop = {
  className: 'b-top',
  cssName: 'border-top',
  jsName: 'borderTop'
}
const borderTopColor = {
  className: 'b-top-clr',
  cssName: 'border-top-color',
  jsName: 'borderTopColor'
}
const borderTopStyle = {
  className: 'b-top-stl',
  cssName: 'border-top-style',
  jsName: 'borderTopStyle',
  safeValue: true
}
const borderTopWidth = {
  className: 'b-top-wdt',
  cssName: 'border-top-width',
  jsName: 'borderTopWidth'
}
const borderBottom = {
  className: 'b-btm',
  cssName: 'border-bottom',
  jsName: 'borderBottom'
}
const borderBottomColor = {
  className: 'b-btm-clr',
  cssName: 'border-bottom-color',
  jsName: 'borderBottomColor'
}
const borderBottomStyle = {
  className: 'b-btm-stl',
  cssName: 'border-bottom-style',
  jsName: 'borderBottomStyle',
  safeValue: true
}
const borderBottomWidth = {
  className: 'b-btm-wdt',
  cssName: 'border-bottom-width',
  jsName: 'borderBottomWidth'
}

export const propEnhancers = {
  borderBottom: (value: ValueType) => getCss(borderBottom, value),
  borderBottomColor: (value: ValueType) => getCss(borderBottomColor, value),
  borderBottomStyle: (value: ValueType) => getCss(borderBottomStyle, value),
  borderBottomWidth: (value: ValueType) => getCss(borderBottomWidth, value),
  borderLeft: (value: ValueType) => getCss(borderLeft, value),
  borderLeftColor: (value: ValueType) => getCss(borderLeftColor, value),
  borderLeftStyle: (value: ValueType) => getCss(borderLeftStyle, value),
  borderLeftWidth: (value: ValueType) => getCss(borderLeftWidth, value),
  borderRight: (value: ValueType) => getCss(borderRight, value),
  borderRightColor: (value: ValueType) => getCss(borderRightColor, value),
  borderRightStyle: (value: ValueType) => getCss(borderRightStyle, value),
  borderRightWidth: (value: ValueType) => getCss(borderRightWidth, value),
  borderTop: (value: ValueType) => getCss(borderTop, value),
  borderTopColor: (value: ValueType) => getCss(borderTopColor, value),
  borderTopStyle: (value: ValueType) => getCss(borderTopStyle, value),
  borderTopWidth: (value: ValueType) => getCss(borderTopWidth, value)
}
