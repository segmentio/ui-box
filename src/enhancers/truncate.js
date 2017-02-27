import React, { PropTypes } from 'react'

export const propTypes = {
  truncate: PropTypes.bool
}

export const parseProps = ({
  truncate,
  style,
  ...props
}) => {
  const styles = {}

  if (truncate) {
    styles.whiteSpace = 'nowrap'
    styles.overflow = 'hidden'
    styles.textOverflow = 'ellipsis'
  }

  return { style: { ...styles, ...style }, ...props }
}
