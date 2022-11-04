import PropTypes from 'prop-types'
import getCss from '../get-css'
import { PropEnhancerValueType, PropValidators, PropEnhancers, PropTypesMapping, PropAliases } from '../types/enhancers'

export const propTypes: PropTypesMapping = {
  overflow: PropTypes.string,
  overflowX: PropTypes.string,
  overflowY: PropTypes.string
}

export const propAliases: PropAliases = {
  overflow: ['overflowX', 'overflowY']
}

export const propValidators: PropValidators = {}

const overflowY = {
  className: 'ovflw-y',
  cssName: 'overflow-y',
  jsName: 'overflowY',
  safeValue: true
}
const overflowX = {
  className: 'ovflw-x',
  cssName: 'overflow-x',
  jsName: 'overflowX',
  safeValue: true
}

export const propEnhancers: PropEnhancers = {
  overflowX: (value: PropEnhancerValueType, selector: string) => getCss(overflowX, value, selector),
  overflowY: (value: PropEnhancerValueType, selector: string) => getCss(overflowY, value, selector)
}
