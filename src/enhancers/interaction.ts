import PropTypes from 'prop-types'
import getCss from '../get-css'
import { PropEnhancerValueType, PropValidators, PropEnhancers, PropTypesMapping, PropAliases } from '../types/enhancers'

export const propTypes: PropTypesMapping = {
  cursor: PropTypes.string,
  pointerEvents: PropTypes.string,
  userSelect: PropTypes.string,
  visibility: PropTypes.string
}

export const propAliases: PropAliases = {}

export const propValidators: PropValidators = {}

const cursor = {
  className: 'crsr',
  cssName: 'cursor',
  jsName: 'cursor'
}
const userSelect = {
  className: 'usr-slct',
  cssName: 'user-select',
  jsName: 'userSelect',
  safeValue: true,
  isPrefixed: true
}
const visibility = {
  className: 'vsblt',
  cssName: 'visibility',
  jsName: 'visibility',
  safeValue: true
}
const pointerEvents = {
  className: 'ptr-evts',
  cssName: 'pointer-events',
  jsName: 'pointerEvents',
  safeValue: true
}

export const propEnhancers: PropEnhancers = {
  cursor: (value: PropEnhancerValueType, selector: string) => getCss(cursor, value, selector),
  pointerEvents: (value: PropEnhancerValueType, selector: string) => getCss(pointerEvents, value, selector),
  userSelect: (value: PropEnhancerValueType, selector: string) => getCss(userSelect, value, selector),
  visibility: (value: PropEnhancerValueType, selector: string) => getCss(visibility, value, selector)
}
