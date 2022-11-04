import PropTypes from 'prop-types'
import getCss from '../get-css'
import { PropEnhancerValueType, PropValidators, PropEnhancers, PropTypesMapping, PropAliases } from '../types/enhancers'

export const propTypes: PropTypesMapping = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const propAliases: PropAliases = {}
export const propValidators: PropValidators = {}

const width = {
  className: 'w',
  cssName: 'width',
  jsName: 'width'
}
const height = {
  className: 'h',
  cssName: 'height',
  jsName: 'height'
}
const minWidth = {
  className: 'min-w',
  cssName: 'min-width',
  jsName: 'minWidth'
}
const minHeight = {
  className: 'min-h',
  cssName: 'min-height',
  jsName: 'minHeight'
}
const maxWidth = {
  className: 'max-w',
  cssName: 'max-width',
  jsName: 'maxWidth'
}
const maxHeight = {
  className: 'max-h',
  cssName: 'max-height',
  jsName: 'maxHeight'
}

export const propEnhancers: PropEnhancers = {
  height: (value: PropEnhancerValueType, selector: string) => getCss(height, value, selector),
  maxHeight: (value: PropEnhancerValueType, selector: string) => getCss(maxHeight, value, selector),
  maxWidth: (value: PropEnhancerValueType, selector: string) => getCss(maxWidth, value, selector),
  minHeight: (value: PropEnhancerValueType, selector: string) => getCss(minHeight, value, selector),
  minWidth: (value: PropEnhancerValueType, selector: string) => getCss(minWidth, value, selector),
  width: (value: PropEnhancerValueType, selector: string) => getCss(width, value, selector)
}
