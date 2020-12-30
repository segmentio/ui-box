import PropTypes from 'prop-types'
import getCss from '../get-css'
import { PropEnhancerValueType, PropValidators, PropEnhancers, PropTypesMapping, PropAliases } from '../types/enhancers'

export const propTypes: PropTypesMapping = {
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

export const propAliases: PropAliases = {}
export const propValidators: PropValidators = {}

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

export const propEnhancers: PropEnhancers = {
  alignContent: (value: PropEnhancerValueType, prefix?: string) => getCss(alignContent, value, prefix),
  alignItems: (value: PropEnhancerValueType, prefix?: string) => getCss(alignItems, value, prefix),
  alignSelf: (value: PropEnhancerValueType, prefix?: string) => getCss(alignSelf, value, prefix),
  flex: (value: PropEnhancerValueType, prefix?: string) => getCss(flex, value, prefix),
  flexBasis: (value: PropEnhancerValueType, prefix?: string) => getCss(flexBasis, value, prefix),
  flexDirection: (value: PropEnhancerValueType, prefix?: string) => getCss(flexDirection, value, prefix),
  flexFlow: (value: PropEnhancerValueType, prefix?: string) => getCss(flexFlow, value, prefix),
  flexGrow: (value: PropEnhancerValueType, prefix?: string) => getCss(flexGrow, value, prefix),
  flexShrink: (value: PropEnhancerValueType, prefix?: string) => getCss(flexShrink, value, prefix),
  flexWrap: (value: PropEnhancerValueType, prefix?: string) => getCss(flexWrap, value, prefix),
  justifyContent: (value: PropEnhancerValueType, prefix?: string) => getCss(justifyContent, value, prefix),
  justifyItems: (value: PropEnhancerValueType, prefix?: string) => getCss(justifyItems, value, prefix),
  justifySelf: (value: PropEnhancerValueType, prefix?: string) => getCss(justifySelf, value, prefix),
  order: (value: PropEnhancerValueType, prefix?: string) => getCss(order, value, prefix),
  placeContent: (value: PropEnhancerValueType, prefix?: string) => getCss(placeContent, value, prefix),
  placeItems: (value: PropEnhancerValueType, prefix?: string) => getCss(placeItems, value, prefix),
  placeSelf: (value: PropEnhancerValueType, prefix?: string) => getCss(placeSelf, value, prefix)
}
