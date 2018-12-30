import * as PropTypes from 'prop-types'
import getCss from '../get-css'
import {PropEncharValueType as ValueType} from './types'

export const propTypes = {
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
  alignSelf: PropTypes.string,
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexBasis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexDirection: PropTypes.string,
  flexFlow: PropTypes.string,
  flexGrow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexShrink: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexWrap: PropTypes.string,
  justifyContent: PropTypes.string,
  justifyItems: PropTypes.string,
  justifySelf: PropTypes.string,
  order: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeContent: PropTypes.string,
  placeItems: PropTypes.string,
  placeSelf: PropTypes.string
}

export const propAliases = {}
export const propValidators = {}

const flex = {
  className: 'flx',
  cssName: 'flex',
  jsName: 'flex',
  isPrefixed: true,
  defaultUnit: ''
}
const alignItems = {
  className: 'algn-itms',
  cssName: 'align-items',
  jsName: 'alignItems',
  isPrefixed: true
}
const alignSelf = {
  className: 'algn-slf',
  cssName: 'align-self',
  jsName: 'alignSelf',
  isPrefixed: true
}
const alignContent = {
  className: 'algn-cnt',
  cssName: 'align-content',
  jsName: 'alignContent',
  isPrefixed: true
}
const justifyContent = {
  className: 'just-cnt',
  cssName: 'justify-content',
  jsName: 'justifyContent',
  isPrefixed: true
}
const justifyItems = {
  className: 'just-items',
  cssName: 'justify-items',
  jsName: 'justifyItems',
  isPrefixed: true
}
const justifySelf = {
  className: 'just-self',
  cssName: 'justify-self',
  jsName: 'justifySelf',
  isPrefixed: true
}
const flexDirection = {
  className: 'flx-drct',
  cssName: 'flex-direction',
  jsName: 'flexDirection',
  isPrefixed: true,
  safeValue: true
}
const flexWrap = {
  className: 'flx-wrap',
  cssName: 'flex-wrap',
  jsName: 'flexWrap',
  isPrefixed: true,
  safeValue: true
}
const flexGrow = {
  className: 'flx-grow',
  cssName: 'flex-grow',
  jsName: 'flexGrow',
  isPrefixed: true,
  defaultUnit: ''
}
const flexShrink = {
  className: 'flx-srnk',
  cssName: 'flex-shrink',
  jsName: 'flexShrink',
  isPrefixed: true,
  defaultUnit: ''
}
const flexBasis = {
  className: 'flx-basis',
  cssName: 'flex-basis',
  jsName: 'flexBasis',
  isPrefixed: true
}
const order = {
  className: 'order',
  cssName: 'order',
  jsName: 'order',
  isPrefixed: true,
  defaultUnit: '',
  safeValue: true
}
const flexFlow = {
  className: 'flx-flow',
  cssName: 'flex-flow',
  jsName: 'flexFlow',
  isPrefixed: true,
  defaultUnit: ''
}
const placeContent = {
  className: 'plc-cnt',
  cssName: 'place-content',
  jsName: 'placeContent'
}
const placeItems = {
  className: 'plc-items',
  cssName: 'place-items',
  jsName: 'placeItems'
}
const placeSelf = {
  className: 'plc-self',
  cssName: 'place-self',
  jsName: 'placeSelf'
}

export const propEnhancers = {
  alignContent: (value: ValueType) => getCss(alignContent, value),
  alignItems: (value: ValueType) => getCss(alignItems, value),
  alignSelf: (value: ValueType) => getCss(alignSelf, value),
  flex: (value: ValueType) => getCss(flex, value),
  flexBasis: (value: ValueType) => getCss(flexBasis, value),
  flexDirection: (value: ValueType) => getCss(flexDirection, value),
  flexFlow: (value: ValueType) => getCss(flexFlow, value),
  flexGrow: (value: ValueType) => getCss(flexGrow, value),
  flexShrink: (value: ValueType) => getCss(flexShrink, value),
  flexWrap: (value: ValueType) => getCss(flexWrap, value),
  justifyContent: (value: ValueType) => getCss(justifyContent, value),
  justifyItems: (value: ValueType) => getCss(justifyItems, value),
  justifySelf: (value: ValueType) => getCss(justifySelf, value),
  order: (value: ValueType) => getCss(order, value),
  placeContent: (value: ValueType) => getCss(placeContent, value),
  placeItems: (value: ValueType) => getCss(placeItems, value),
  placeSelf: (value: ValueType) => getCss(placeSelf, value)
}
