import PropTypes from 'prop-types'
import getCss from '../get-css'
import { PropEnhancerValueType, PropValidators, PropEnhancers, PropTypesMapping, PropAliases } from '../types/enhancers'

export const propTypes: PropTypesMapping = {
  opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const propAliases: PropAliases = {}

export const propValidators: PropValidators = {}

const opacity = {
  className: 'opct',
  cssName: 'opacity',
  jsName: 'opacity',
  defaultUnit: ''
}

export const propEnhancers: PropEnhancers = {
  opacity: (value: PropEnhancerValueType, selector: string) => getCss(opacity, value, selector)
}
