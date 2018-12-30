import * as PropTypes from 'prop-types'
import getCss from '../get-css'
import {spacesOutsideParentheses} from '../utils/regex'
import {PropEncharValueType as ValueType} from './types'

export const propTypes = {
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginY: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingY: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const propAliases = {
  margin: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginBottom', 'marginTop'],
  padding: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingBottom', 'paddingTop']
}

interface Validators {
  margin? : (value: string) => string | undefined
  marginX? : (value: string) => string | undefined
  marginY? : (value: string) => string | undefined
  padding? : (value: string) => string | undefined
  paddingX? : (value: string) => string | undefined
  paddingY? : (value: string) => string | undefined
}

export const propValidators: Validators = {}

if (process.env.NODE_ENV !== 'production') {
  propValidators.margin = value => {
    if (spacesOutsideParentheses.test(value)) {
      return `multiple values (“${value}”) aren՚t supported with “margin”. Use “marginX”, “marginY” “marginBottom”, “marginLeft”, “marginRight” and “marginTop” instead.`
    }
    return
  }
  propValidators.marginX = value => {
    if (spacesOutsideParentheses.test(value)) {
      return `multiple values (“${value}”) aren՚t supported with “marginX”. Use “marginLeft” and “marginRight” instead.`
    }
    return
  }
  propValidators.marginY = value => {
    if (spacesOutsideParentheses.test(value)) {
      return `multiple values (“${value}”) aren՚t supported with “marginY”. Use “marginBottom” and “marginTop” instead.`
    }
    return
  }
  propValidators.padding = value => {
    if (spacesOutsideParentheses.test(value)) {
      return `multiple values (“${value}”) aren՚t supported with “padding”. Use “paddingX”, “paddingY” “paddingBottom”, “paddingLeft”, “paddingRight” and “paddingTop” instead.`
    }
    return
  }
  propValidators.paddingX = value => {
    if (spacesOutsideParentheses.test(value)) {
      return `multiple values (“${value}”) aren՚t supported with “paddingX”. Use “paddingLeft” and “paddingRight” instead.`
    }
    return
  }
  propValidators.paddingY = value => {
    if (spacesOutsideParentheses.test(value)) {
      return `multiple values (“${value}”) aren՚t supported with “paddingY”. Use “paddingBottom” and “paddingTop” instead.`
    }
    return
  }
}

const marginTop = {
  className: 'mt',
  cssName: 'margin-top',
  jsName: 'marginTop'
}
const marginRight = {
  className: 'mr',
  cssName: 'margin-right',
  jsName: 'marginRight'
}
const marginBottom = {
  className: 'mb',
  cssName: 'margin-bottom',
  jsName: 'marginBottom'
}
const marginLeft = {
  className: 'ml',
  cssName: 'margin-left',
  jsName: 'marginLeft'
}
const paddingTop = {
  className: 'pt',
  cssName: 'padding-top',
  jsName: 'paddingTop'
}
const paddingRight = {
  className: 'pr',
  cssName: 'padding-right',
  jsName: 'paddingRight'
}
const paddingBottom = {
  className: 'pb',
  cssName: 'padding-bottom',
  jsName: 'paddingBottom'
}
const paddingLeft = {
  className: 'pl',
  cssName: 'padding-left',
  jsName: 'paddingLeft'
}

export const propEnhancers = {
  marginBottom: (value: ValueType) => getCss(marginBottom, value),
  marginLeft: (value: ValueType) => getCss(marginLeft, value),
  marginRight: (value: ValueType) => getCss(marginRight, value),
  marginTop: (value: ValueType) => getCss(marginTop, value),
  paddingBottom: (value: ValueType) => getCss(paddingBottom, value),
  paddingLeft: (value: ValueType) => getCss(paddingLeft, value),
  paddingRight: (value: ValueType) => getCss(paddingRight, value),
  paddingTop: (value: ValueType) => getCss(paddingTop, value)
}
