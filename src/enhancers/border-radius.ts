import * as PropTypes from 'prop-types'
import getCss from '../get-css'
import {spacesOutsideParentheses} from '../utils/regex'
import {PropEncharValueType as ValueType} from './types'

export const propTypes = {
  borderBottomLeftRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  borderBottomRightRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderTopLeftRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  borderTopRightRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export const propAliases = {
  borderRadius: [
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderTopLeftRadius',
    'borderTopRightRadius'
  ]
}

interface Validators {
  borderRadius?: (value: string) => string | undefined
}
export const propValidators: Validators = {}

if (process.env.NODE_ENV !== 'production') {
  propValidators.borderRadius = (value: string) => {
    if (spacesOutsideParentheses.test(value)) {
      return `multiple values (“${value}”) aren՚t supported with “borderRadius”. Use “borderBottomLeftRadius”, “borderBottomRightRadius” “borderTopLeftRadius” and “borderTopRightRadius” instead.`
    }

    return
  }
}

const borderTopLeftRadius = {
  className: 'btlr',
  cssName: 'border-top-left-radius',
  jsName: 'borderTopLeftRadius'
}
const borderTopRightRadius = {
  className: 'btrr',
  cssName: 'border-top-right-radius',
  jsName: 'borderTopRightRadius'
}
const borderBottomLeftRadius = {
  className: 'bblr',
  cssName: 'border-bottom-left-radius',
  jsName: 'borderBottomLeftRadius'
}
const borderBottomRightRadius = {
  className: 'bbrr',
  cssName: 'border-bottom-right-radius',
  jsName: 'borderBottomRightRadius'
}

export const propEnhancers = {
  borderBottomLeftRadius: (value: ValueType) => getCss(borderBottomLeftRadius, value),
  borderBottomRightRadius: (value: ValueType) => getCss(borderBottomRightRadius, value),
  borderTopLeftRadius: (value: ValueType) => getCss(borderTopLeftRadius, value),
  borderTopRightRadius: (value: ValueType) => getCss(borderTopRightRadius, value)
}
