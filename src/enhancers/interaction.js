import PropTypes from 'prop-types'
import getCss from '../get-css'

export const propTypes = {
  cursor: PropTypes.string,
  pointerEvents: PropTypes.string,
  userSelect: PropTypes.string,
  visibility: PropTypes.string
}

export const propAliases = {}

export const propValidators = {}

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

export const propEnhancers = {
  cursor: value => getCss(cursor, value),
  pointerEvents: value => getCss(pointerEvents, value),
  userSelect: value => getCss(userSelect, value),
  visibility: value => getCss(visibility, value)
}
