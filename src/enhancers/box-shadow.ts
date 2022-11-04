import PropTypes from 'prop-types'
import getCss from '../get-css'
import { PropEnhancerValueType, PropValidators, PropEnhancers, PropTypesMapping, PropAliases } from '../types/enhancers'

export const propTypes: PropTypesMapping = {
  boxShadow: PropTypes.string
}

export const propAliases: PropAliases = {}

export const propValidators: PropValidators = {}

const boxShadow = {
  className: 'bs',
  cssName: 'box-shadow',
  jsName: 'boxShadow',
  complexValue: true
}

export const propEnhancers: PropEnhancers = {
  boxShadow: (value: PropEnhancerValueType, selector: string) => getCss(boxShadow, value, selector)
}
