import React, { PropTypes } from 'react'
import { css } from 'glamor'
import cx from 'classnames'
import theme from '../components/theme'

export const propTypes = {
  shadow: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(theme.shadows.map((_, i) => i))
  ])
}

const parseShadow = (val) => {
  const i = Number.isInteger(val) ? val - 1 : 0
  return css({
    boxShadow: theme.shadows[i]
  })
}

export const parseProps = ({ shadow, className, ...props }) => ({
  className: shadow !== undefined ? cx(`${parseShadow(shadow)}`, className) : className,
  ...props
})
