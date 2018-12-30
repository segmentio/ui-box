import * as PropTypes from 'prop-types'
import getCss from '../get-css'
import {PropEncharValueType as ValueType} from './types'

export const propTypes = {
  boxShadow: PropTypes.string
}

export const propAliases = {}

export const propValidators = {}

const boxShadow = {
  className: 'bs',
  cssName: 'box-shadow',
  jsName: 'boxShadow',
  complexValue: true
}

export const propEnhancers = {
  boxShadow: (value: ValueType) => getCss(boxShadow, value)
}
