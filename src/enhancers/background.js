import React, { PropTypes } from 'react'
import { css } from 'glamor'
import cx from 'classnames'
import theme from '../components/theme'

export const propTypes = {
  background: PropTypes.oneOf(Object.keys(theme.backgrounds)),
  interactive: PropTypes.bool
}

const parseBackground = (val, interactive) => {
  if (theme.backgrounds.hasOwnProperty(val)) {
    const bg = theme.backgrounds[val]
    return css({
      color: bg.textColor,
      backgroundColor: bg.backgroundColor,
      borderColor: `${bg.borderColor} !important`,
      ...(interactive ? {
        '&:hover, &:active': {
          borderColor: `${bg.borderColorInteractive} !important`
        }
      } : {})
    })
  }
}

export const parseProps = ({ background, interactive, className, ...props }) => ({
  className: background !== undefined ? cx(`${parseBackground(background, interactive)}`, className) : className,
  ...props
})
