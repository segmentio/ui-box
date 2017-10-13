import PropTypes from 'prop-types'
import { css } from 'glamor'
import cx from 'classnames'

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
  letterSpacing: PropTypes.string,
}

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
  letterSpacing,
  className,
  ...props
}) => ({
  ...props,
  className: cx(
    className,
    textAlign !== undefined && css({ textAlign }).toString(),
    textDecoration !== undefined && css({ textDecoration }).toString(),
    textTransform !== undefined && css({ textTransform }).toString(),
    textShadow !== undefined && css({ textShadow }).toString(),
    textOverflow !== undefined && css({ textOverflow }).toString(),
    color !== undefined && css({ color }).toString(),
    font !== undefined && css({ font }).toString(),
    fontFamily !== undefined && css({ fontFamily }).toString(),
    fontSize !== undefined && css({ fontSize }).toString(),
    fontStyle !== undefined && css({ fontStyle }).toString(),
    fontVariant !== undefined && css({ fontVariant }).toString(),
    fontWeight !== undefined && css({ fontWeight }).toString(),
    lineHeight !== undefined && css({ lineHeight }).toString(),
    wordBreak !== undefined && css({ wordBreak }).toString(),
    wordWrap !== undefined && css({ wordWrap }).toString(),
    whiteSpace !== undefined && css({ whiteSpace }).toString(),
    letterSpacing !== undefined && css({ letterSpacing }).toString()
  ),
})
