import PropTypes from 'prop-types'
import getCss from '../get-css'
import { PropEnhancerValueType, PropValidators, PropEnhancers, PropTypesMapping } from '../types/enhancers'

export const propTypes: PropTypesMapping = {
  outline: PropTypes.string
}

export const propAliases = {}

export const propValidators: PropValidators = {}

const outline = {
  className: 'otln',
  cssName: 'outline',
  jsName: 'outline',
  complexValue: true
}

export const propEnhancers: PropEnhancers = {
  outline: (value: PropEnhancerValueType, selector: string) => getCss(outline, value, selector)
}
