import PropTypes from 'prop-types'
import getCss from '../get-css'
import {spacesOutsideParentheses} from '../utils/regex'
import { PropEnhancerValueType, PropValidators, PropEnhancers, PropTypesMapping } from '../types/enhancers'

export const propTypes: PropTypesMapping = {
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

export const propValidators: PropValidators = {}

if (process.env.NODE_ENV !== 'production') {
  propValidators.borderRadius = value => {
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

export const propEnhancers: PropEnhancers = {
  borderBottomLeftRadius: (value: PropEnhancerValueType, selector: string) => getCss(borderBottomLeftRadius, value, selector),
  borderBottomRightRadius: (value: PropEnhancerValueType, selector: string) => getCss(borderBottomRightRadius, value, selector),
  borderTopLeftRadius: (value: PropEnhancerValueType, selector: string) => getCss(borderTopLeftRadius, value, selector),
  borderTopRightRadius: (value: PropEnhancerValueType, selector: string) => getCss(borderTopRightRadius, value, selector)
}
