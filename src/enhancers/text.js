import PropTypes from 'prop-types'
import getCss from '../css/get-css'

export const propTypes = {
  color: PropTypes.string,
  font: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontStyle: PropTypes.string,
  fontVariant: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  letterSpacing: PropTypes.string,
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
  textOverflow: PropTypes.string,
  textShadow: PropTypes.string,
  textTransform: PropTypes.string,
  whiteSpace: PropTypes.string,
  wordBreak: PropTypes.string,
  wordWrap: PropTypes.string
}

export const propNames = Object.keys(propTypes)

export const propAliases = {}

export const propEnhancers = {
  color: color => getCss('color', color),
  font: font => getCss('font', font),
  fontFamily: fontFamily => getCss('fontFamily', fontFamily),
  fontSize: fontSize => getCss('fontSize', fontSize),
  fontStyle: fontStyle => getCss('fontStyle', fontStyle),
  fontVariant: fontVariant => getCss('fontVariant', fontVariant),
  fontWeight: fontWeight => getCss('fontWeight', fontWeight),
  letterSpacing: letterSpacing => getCss('letterSpacing', letterSpacing),
  lineHeight: lineHeight => getCss('lineHeight', lineHeight),
  textAlign: textAlign => getCss('textAlign', textAlign),
  textDecoration: textDecoration => getCss('textDecoration', textDecoration),
  textOverflow: textOverflow => getCss('textOverflow', textOverflow),
  textShadow: textShadow => getCss('textShadow', textShadow),
  textTransform: textTransform => getCss('textTransform', textTransform),
  whiteSpace: whiteSpace => getCss('whiteSpace', whiteSpace),
  wordBreak: wordBreak => getCss('wordBreak', wordBreak),
  wordWrap: wordWrap => getCss('wordWrap', wordWrap)
}
