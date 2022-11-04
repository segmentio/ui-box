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
  alignContent: (value: PropEnhancerValueType, selector: string) => getCss(alignContent, value, selector),
  alignItems: (value: PropEnhancerValueType, selector: string) => getCss(alignItems, value, selector),
  alignSelf: (value: PropEnhancerValueType, selector: string) => getCss(alignSelf, value, selector),
  flex: (value: PropEnhancerValueType, selector: string) => getCss(flex, value, selector),
  flexBasis: (value: PropEnhancerValueType, selector: string) => getCss(flexBasis, value, selector),
  flexDirection: (value: PropEnhancerValueType, selector: string) => getCss(flexDirection, value, selector),
  flexFlow: (value: PropEnhancerValueType, selector: string) => getCss(flexFlow, value, selector),
  flexGrow: (value: PropEnhancerValueType, selector: string) => getCss(flexGrow, value, selector),
  flexShrink: (value: PropEnhancerValueType, selector: string) => getCss(flexShrink, value, selector),
  flexWrap: (value: PropEnhancerValueType, selector: string) => getCss(flexWrap, value, selector),
  justifyContent: (value: PropEnhancerValueType, selector: string) => getCss(justifyContent, value, selector),
  justifyItems: (value: PropEnhancerValueType, selector: string) => getCss(justifyItems, value, selector),
  justifySelf: (value: PropEnhancerValueType, selector: string) => getCss(justifySelf, value, selector),
  order: (value: PropEnhancerValueType, selector: string) => getCss(order, value, selector),
  placeContent: (value: PropEnhancerValueType, selector: string) => getCss(placeContent, value, selector),
  placeItems: (value: PropEnhancerValueType, selector: string) => getCss(placeItems, value, selector),
  placeSelf: (value: PropEnhancerValueType, selector: string) => getCss(placeSelf, value, selector)
}
