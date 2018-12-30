import * as PropTypes from 'prop-types'
import getCss from '../get-css'
import {PropEncharValueType as ValueType} from './types'

export const propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const propAliases = {}
export const propValidators = {}

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

export const propEnhancers = {
  height: (value: ValueType) => getCss(height, value),
  maxHeight: (value: ValueType) => getCss(maxHeight, value),
  maxWidth: (value: ValueType) => getCss(maxWidth, value),
  minHeight: (value: ValueType) => getCss(minHeight, value),
  minWidth: (value: ValueType) => getCss(minWidth, value),
  width: (value: ValueType) => getCss(width, value)
}
