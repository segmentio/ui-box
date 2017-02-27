import React, { PropTypes } from 'react'
import { css } from 'glamor'
import cx from 'classnames'

export const propTypes = {
  clearfix: PropTypes.bool
}

const cssClearfix = css({
  '&:before, &:after': {
    display: 'table',
    clear: 'both',
    content: '""'
  }
})

export const parseProps = ({ clearfix, className, ...props }) => ({
  className: clearfix ? cx(`${cssClearfix}`, className) : className,
  ...props
})
