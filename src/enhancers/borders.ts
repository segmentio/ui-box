import PropTypes from 'prop-types'
import getCss from '../get-css'
import {spacesOutsideParentheses} from '../utils/regex'
import { PropEnhancerValueType, PropValidators, PropEnhancers, PropTypesMapping } from '../types/enhancers'

export const propTypes: PropTypesMapping = {
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

export const propValidators: PropValidators = {}

if (process.env.NODE_ENV !== 'production') {
  propValidators.borderColor = value => {
    if (spacesOutsideParentheses.test(value)) {
      return `multiple values (“${value}”) aren՚t supported with “borderColor”. Use “borderBottomColor”, “borderLeftColor” “borderRightColor” and “borderTopColor” instead.`
    }

    return
  }
  propValidators.borderStyle = value => {
    if (spacesOutsideParentheses.test(value)) {
      return `multiple values (“${value}”) aren՚t supported with “borderStyle”. Use “borderBottomStyle”, “borderLeftStyle” “borderRightStyle” and “borderTopStyle” instead.`
    }

    return
  }
  propValidators.borderWidth = value => {
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

export const propEnhancers: PropEnhancers = {
  borderBottom: (value: PropEnhancerValueType, selector: string) => getCss(borderBottom, value, selector),
  borderBottomColor: (value: PropEnhancerValueType, selector: string) => getCss(borderBottomColor, value, selector),
  borderBottomStyle: (value: PropEnhancerValueType, selector: string) => getCss(borderBottomStyle, value, selector),
  borderBottomWidth: (value: PropEnhancerValueType, selector: string) => getCss(borderBottomWidth, value, selector),
  borderLeft: (value: PropEnhancerValueType, selector: string) => getCss(borderLeft, value, selector),
  borderLeftColor: (value: PropEnhancerValueType, selector: string) => getCss(borderLeftColor, value, selector),
  borderLeftStyle: (value: PropEnhancerValueType, selector: string) => getCss(borderLeftStyle, value, selector),
  borderLeftWidth: (value: PropEnhancerValueType, selector: string) => getCss(borderLeftWidth, value, selector),
  borderRight: (value: PropEnhancerValueType, selector: string) => getCss(borderRight, value, selector),
  borderRightColor: (value: PropEnhancerValueType, selector: string) => getCss(borderRightColor, value, selector),
  borderRightStyle: (value: PropEnhancerValueType, selector: string) => getCss(borderRightStyle, value, selector),
  borderRightWidth: (value: PropEnhancerValueType, selector: string) => getCss(borderRightWidth, value, selector),
  borderTop: (value: PropEnhancerValueType, selector: string) => getCss(borderTop, value, selector),
  borderTopColor: (value: PropEnhancerValueType, selector: string) => getCss(borderTopColor, value, selector),
  borderTopStyle: (value: PropEnhancerValueType, selector: string) => getCss(borderTopStyle, value, selector),
  borderTopWidth: (value: PropEnhancerValueType, selector: string) => getCss(borderTopWidth, value, selector)
}
