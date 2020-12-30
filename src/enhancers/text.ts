import PropTypes from 'prop-types'
import getCss from '../get-css'
import { PropEnhancerValueType, PropValidators, PropEnhancers, PropTypesMapping, PropAliases } from '../types/enhancers'

export const propTypes: PropTypesMapping = {
  color: PropTypes.string,
  font: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontStyle: PropTypes.string,
  fontVariant: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  letterSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
  textOverflow: PropTypes.string,
  textShadow: PropTypes.string,
  textTransform: PropTypes.string,
  verticalAlign: PropTypes.string,
  whiteSpace: PropTypes.string,
  wordBreak: PropTypes.string,
  wordWrap: PropTypes.string
}

export const propAliases: PropAliases = {}
export const propValidators: PropValidators = {}

const textAlign = {
  className: 'txt-algn',
  safeValue: true,
  cssName: 'text-align',
  jsName: 'textAlign'
}
const textDecoration = {
  className: 'txt-deco',
  cssName: 'text-decoration',
  jsName: 'textDecoration'
}
const textTransform = {
  className: 'txt-trns',
  cssName: 'text-transform',
  jsName: 'textTransform',
  safeValue: true
}
const textShadow = {
  className: 'txt-shdw',
  cssName: 'text-shadow',
  jsName: 'textShadow',
  complexValue: true
}
const textOverflow = {
  className: 'txt-ovrf',
  cssName: 'text-overflow',
  jsName: 'textOverflow',
  safeValue: true
}
const color = {
  className: 'color',
  cssName: 'color',
  jsName: 'color'
}
const font = {
  className: 'fnt',
  cssName: 'font',
  jsName: 'font',
  complexValue: true
}
const fontFamily = {
  className: 'fnt-fam',
  cssName: 'font-family',
  jsName: 'fontFamily',
  complexValue: true
}
const fontSize = {
  className: 'fnt-sze',
  cssName: 'font-size',
  jsName: 'fontSize'
}
const fontStyle = {
  className: 'fnt-stl',
  cssName: 'font-style',
  jsName: 'fontStyle',
  safeValue: true
}
const fontVariant = {
  className: 'f-vari',
  cssName: 'font-variant',
  jsName: 'fontVariant'
}
const fontWeight = {
  className: 'f-wght',
  cssName: 'font-weight',
  jsName: 'fontWeight',
  safeValue: true,
  defaultUnit: ''
}
const lineHeight = {
  className: 'ln-ht',
  cssName: 'line-height',
  jsName: 'lineHeight',
  defaultUnit: ''
}
const verticalAlign = {
  className: 'ver-algn',
  cssName: 'vertical-align',
  jsName: 'verticalAlign',
  safeValue: true
}
const wordBreak = {
  className: 'wrd-brk',
  cssName: 'word-break',
  jsName: 'wordBreak',
  safeValue: true
}
const wordWrap = {
  className: 'wrd-wrp',
  cssName: 'word-wrap',
  jsName: 'wordWrap',
  safeValue: true
}
const whiteSpace = {
  className: 'wht-spc',
  cssName: 'white-space',
  jsName: 'whiteSpace',
  safeValue: true
}
const letterSpacing = {
  className: 'ltr-spc',
  cssName: 'letter-spacing',
  jsName: 'letterSpacing'
}

export const propEnhancers: PropEnhancers = {
  color: (value: PropEnhancerValueType, prefix?: string) => getCss(color, value, prefix),
  font: (value: PropEnhancerValueType, prefix?: string) => getCss(font, value, prefix),
  fontFamily: (value: PropEnhancerValueType, prefix?: string) => getCss(fontFamily, value, prefix),
  fontSize: (value: PropEnhancerValueType, prefix?: string) => getCss(fontSize, value, prefix),
  fontStyle: (value: PropEnhancerValueType, prefix?: string) => getCss(fontStyle, value, prefix),
  fontVariant: (value: PropEnhancerValueType, prefix?: string) => getCss(fontVariant, value, prefix),
  fontWeight: (value: PropEnhancerValueType, prefix?: string) => getCss(fontWeight, value, prefix),
  letterSpacing: (value: PropEnhancerValueType, prefix?: string) => getCss(letterSpacing, value, prefix),
  lineHeight: (value: PropEnhancerValueType, prefix?: string) => getCss(lineHeight, value, prefix),
  textAlign: (value: PropEnhancerValueType, prefix?: string) => getCss(textAlign, value, prefix),
  textDecoration: (value: PropEnhancerValueType, prefix?: string) => getCss(textDecoration, value, prefix),
  textOverflow: (value: PropEnhancerValueType, prefix?: string) => getCss(textOverflow, value, prefix),
  textShadow: (value: PropEnhancerValueType, prefix?: string) => getCss(textShadow, value, prefix),
  textTransform: (value: PropEnhancerValueType, prefix?: string) => getCss(textTransform, value, prefix),
  verticalAlign: (value: PropEnhancerValueType, prefix?: string) => getCss(verticalAlign, value, prefix),
  whiteSpace: (value: PropEnhancerValueType, prefix?: string) => getCss(whiteSpace, value, prefix),
  wordBreak: (value: PropEnhancerValueType, prefix?: string) => getCss(wordBreak, value, prefix),
  wordWrap: (value: PropEnhancerValueType, prefix?: string) => getCss(wordWrap, value, prefix)
}
