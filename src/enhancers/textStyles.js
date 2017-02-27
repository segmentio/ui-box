import React, { PropTypes } from 'react'
import { css } from 'glamor'
import cx from 'classnames'
import theme from './../components/theme'

export const propTypes = {
  textStyle: PropTypes.oneOf(Object.keys(theme.textStyles)),
  bold: PropTypes.bool
}

const getTextStyle = ({ fontSize, fontWeight, lineHeight, letterSpacing }, textStyle) => ({
  '&, & .ui-lib-box': {
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    ...(textStyle.indexOf('caps') > -1 ? { textTransform: 'uppercase' } : {}),
    ...(textStyle.indexOf('mono') > -1 ? { fontFamily: theme.fonts.mono } : {})
  }
})

const getClassName = ({
  textStyle
}) => css({
  ...(textStyle ? getTextStyle(theme.textStyles[textStyle], textStyle) : {})
})

export const parseProps = ({
  textStyle,
  bold,
  className,
  ...props
}) => {
  if (textStyle !== undefined || bold !== undefined) {
    return {
      className: cx(
        `${getClassName({ textStyle, bold })}`,
        bold && `${css({ fontWeight: '500' })}`,
        className
      ),
      ...props
    }
  }
  return { className, ...props }
}
