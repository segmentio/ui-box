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
  color: (value: PropEnhancerValueType, selector: string) => getCss(color, value, selector),
  font: (value: PropEnhancerValueType, selector: string) => getCss(font, value, selector),
  fontFamily: (value: PropEnhancerValueType, selector: string) => getCss(fontFamily, value, selector),
  fontSize: (value: PropEnhancerValueType, selector: string) => getCss(fontSize, value, selector),
  fontStyle: (value: PropEnhancerValueType, selector: string) => getCss(fontStyle, value, selector),
  fontVariant: (value: PropEnhancerValueType, selector: string) => getCss(fontVariant, value, selector),
  fontWeight: (value: PropEnhancerValueType, selector: string) => getCss(fontWeight, value, selector),
  letterSpacing: (value: PropEnhancerValueType, selector: string) => getCss(letterSpacing, value, selector),
  lineHeight: (value: PropEnhancerValueType, selector: string) => getCss(lineHeight, value, selector),
  textAlign: (value: PropEnhancerValueType, selector: string) => getCss(textAlign, value, selector),
  textDecoration: (value: PropEnhancerValueType, selector: string) => getCss(textDecoration, value, selector),
  textOverflow: (value: PropEnhancerValueType, selector: string) => getCss(textOverflow, value, selector),
  textShadow: (value: PropEnhancerValueType, selector: string) => getCss(textShadow, value, selector),
  textTransform: (value: PropEnhancerValueType, selector: string) => getCss(textTransform, value, selector),
  verticalAlign: (value: PropEnhancerValueType, selector: string) => getCss(verticalAlign, value, selector),
  whiteSpace: (value: PropEnhancerValueType, selector: string) => getCss(whiteSpace, value, selector),
  wordBreak: (value: PropEnhancerValueType, selector: string) => getCss(wordBreak, value, selector),
  wordWrap: (value: PropEnhancerValueType, selector: string) => getCss(wordWrap, value, selector)
}
