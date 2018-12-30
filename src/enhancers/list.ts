import * as PropTypes from 'prop-types'
import getCss from '../get-css'
import {PropEncharValueType as ValueType} from './types'

export const propTypes = {
  listStyle: PropTypes.string,
  listStyleType: PropTypes.string,
  listStyleImage: PropTypes.string,
  listStylePosition: PropTypes.string
}

export const propAliases = {}

export const propValidators = {}

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

export const propEnhancers = {
  listStyle: (value: ValueType) => getCss(listStyle, value),
  listStyleType: (value: ValueType) => getCss(listStyleType, value),
  listStyleImage: (value: ValueType) => getCss(listStyleImage, value),
  listStylePosition: (value: ValueType) => getCss(listStylePosition, value)
}
