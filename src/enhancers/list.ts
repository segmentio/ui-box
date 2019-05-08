import PropTypes from 'prop-types'
import getCss from '../get-css'
import { PropEnhancerValueType, PropValidators, PropEnhancers, PropTypesMapping, PropAliases } from '../types/enhancers'

export const propTypes: PropTypesMapping = {
  listStyle: PropTypes.string,
  listStyleType: PropTypes.string,
  listStyleImage: PropTypes.string,
  listStylePosition: PropTypes.string
}

export const propAliases: PropAliases = {}

export const propValidators: PropValidators = {}

const listStyle = {
  className: 'ls',
  cssName: 'list-style',
  jsName: 'listStyle',
  complexValue: true
}
const listStyleType = {
  className: 'ls-typ',
  cssName: 'list-style-type',
  jsName: 'listStyleType'
}
const listStyleImage = {
  className: 'ls-img',
  cssName: 'list-style-image',
  jsName: 'listStyleImage',
  complexValue: true
}
const listStylePosition = {
  className: 'ls-pos',
  cssName: 'list-style-position',
  jsName: 'listStylePosition',
  safeValue: true
}

export const propEnhancers: PropEnhancers = {
  listStyle: (value: PropEnhancerValueType) => getCss(listStyle, value),
  listStyleType: (value: PropEnhancerValueType) => getCss(listStyleType, value),
  listStyleImage: (value: PropEnhancerValueType) => getCss(listStyleImage, value),
  listStylePosition: (value: PropEnhancerValueType) => getCss(listStylePosition, value)
}
