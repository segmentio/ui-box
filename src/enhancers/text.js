import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

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

export const parseProps = ({
  color,
  font,
  fontFamily,
  fontSize,
  fontStyle,
  fontVariant,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  textDecoration,
  textOverflow,
  textShadow,
  textTransform,
  whiteSpace,
  wordBreak,
  wordWrap
}) => {
  return cx(
    color !== undefined && insertSingleProperty('color', color),
    font !== undefined && insertSingleProperty('font', font),
    fontFamily !== undefined && insertSingleProperty('fontFamily', fontFamily),
    fontSize !== undefined && insertSingleProperty('fontSize', fontSize),
    fontStyle !== undefined && insertSingleProperty('fontStyle', fontStyle),
    fontVariant !== undefined &&
      insertSingleProperty('fontVariant', fontVariant),
    fontWeight !== undefined && insertSingleProperty('fontWeight', fontWeight),
    letterSpacing !== undefined &&
      insertSingleProperty('letterSpacing', letterSpacing),
    lineHeight !== undefined && insertSingleProperty('lineHeight', lineHeight),
    textAlign !== undefined && insertSingleProperty('textAlign', textAlign),
    textDecoration !== undefined &&
      insertSingleProperty('textDecoration', textDecoration),
    textOverflow !== undefined &&
      insertSingleProperty('textOverflow', textOverflow),
    textShadow !== undefined && insertSingleProperty('textShadow', textShadow),
    textTransform !== undefined &&
      insertSingleProperty('textTransform', textTransform),
    whiteSpace !== undefined && insertSingleProperty('whiteSpace', whiteSpace),
    wordBreak !== undefined && insertSingleProperty('wordBreak', wordBreak),
    wordWrap !== undefined && insertSingleProperty('wordWrap', wordWrap)
  )
}
