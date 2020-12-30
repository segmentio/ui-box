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
  cursor: (value: PropEnhancerValueType, prefix?: string) => getCss(cursor, value, prefix),
  pointerEvents: (value: PropEnhancerValueType, prefix?: string) => getCss(pointerEvents, value, prefix),
  userSelect: (value: PropEnhancerValueType, prefix?: string) => getCss(userSelect, value, prefix),
  visibility: (value: PropEnhancerValueType, prefix?: string) => getCss(visibility, value, prefix)
}
