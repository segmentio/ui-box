import PropTypes from 'prop-types'
import getCss from '../get-css'

export const propTypes = {
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
  alignSelf: PropTypes.string,
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexBasis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexDirection: PropTypes.string,
  flexGrow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexShrink: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexWrap: PropTypes.string,
  flexFlow: PropTypes.string,
  justifyContent: PropTypes.string,
  justifySelf: PropTypes.string,
  order: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
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

export const propEnhancers = {
  alignContent: value => getCss(alignContent, value),
  alignItems: value => getCss(alignItems, value),
  alignSelf: value => getCss(alignSelf, value),
  flex: value => getCss(flex, value),
  flexBasis: value => getCss(flexBasis, value),
  flexDirection: value => getCss(flexDirection, value),
  flexGrow: value => getCss(flexGrow, value),
  flexShrink: value => getCss(flexShrink, value),
  flexWrap: value => getCss(flexWrap, value),
  justifyContent: value => getCss(justifyContent, value),
  justifySelf: value => getCss(justifySelf, value),
  order: value => getCss(order, value),
  flexFlow: value => getCss(flexFlow, value)
}
