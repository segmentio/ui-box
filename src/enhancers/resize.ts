import PropTypes from 'prop-types'
import getCss from '../get-css'
import { PropEnhancerValueType, PropValidators, PropEnhancers, PropTypesMapping } from '../types/enhancers'

export const propTypes: PropTypesMapping = {
  resize: PropTypes.string
}

export const propAliases = {}

export const propValidators: PropValidators = {}

const resize = {
  className: 'rsz',
  cssName: 'resize',
  jsName: 'resize'
}

export const propEnhancers: PropEnhancers = {
  resize: (value: PropEnhancerValueType, selector: string) => getCss(resize, value, selector)
}
