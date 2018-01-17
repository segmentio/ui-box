import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

export const propTypes = {
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
  textTransform: PropTypes.string,
  textOverflow: PropTypes.string,
  color: PropTypes.string,
  font: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontStyle: PropTypes.string,
  fontVariant: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  wordBreak: PropTypes.string,
  wordWrap: PropTypes.string,
  letterSpacing: PropTypes.string
}

export const keysPropTypes = Object.keys(propTypes)

export const parseProps = ({
  textAlign,
  textDecoration,
  textTransform,
  textShadow,
  textOverflow,
  color,
  font,
  fontFamily,
  fontSize,
  fontStyle,
  fontVariant,
  fontWeight,
  lineHeight,
  wordBreak,
  wordWrap,
  whiteSpace,
  letterSpacing
}) => {
  return cx(
    textAlign !== undefined && insertSingleProperty('textAlign', textAlign),
    textDecoration !== undefined &&
      insertSingleProperty('textDecoration', textDecoration),
    textTransform !== undefined &&
      insertSingleProperty('textTransform', textTransform),
    textShadow !== undefined && insertSingleProperty('textShadow', textShadow),
    textOverflow !== undefined &&
      insertSingleProperty('textOverflow', textOverflow),
    color !== undefined && insertSingleProperty('color', color),
    font !== undefined && insertSingleProperty('font', font),
    fontFamily !== undefined && insertSingleProperty('fontFamily', fontFamily),
    fontSize !== undefined && insertSingleProperty('fontSize', fontSize),
    fontStyle !== undefined && insertSingleProperty('fontStyle', fontStyle),
    fontVariant !== undefined &&
      insertSingleProperty('fontVariant', fontVariant),
    fontWeight !== undefined && insertSingleProperty('fontWeight', fontWeight),
    lineHeight !== undefined && insertSingleProperty('lineHeight', lineHeight),
    wordBreak !== undefined && insertSingleProperty('wordBreak', wordBreak),
    wordWrap !== undefined && insertSingleProperty('wordWrap', wordWrap),
    whiteSpace !== undefined && insertSingleProperty('whiteSpace', whiteSpace),
    letterSpacing !== undefined &&
      insertSingleProperty('letterSpacing', letterSpacing)
  )
}
