import React, { PropTypes } from 'react'

export const propTypes = {
  borderColor: PropTypes.string,
  border: PropTypes.bool,
  borderLeft: PropTypes.bool,
  borderRight: PropTypes.bool,
  borderTop: PropTypes.bool,
  borderBottom: PropTypes.bool
}

export const parseProps = ({
  border,
  borderColor,
  borderLeft,
  borderRight,
  borderTop,
  borderBottom,
  style,
  ...props
}) => {
  const styles = {}

  if (border || borderLeft) styles.borderLeft = '1px solid'
  if (border || borderRight) styles.borderRight = '1px solid'
  if (border || borderTop) styles.borderTop = '1px solid'
  if (border || borderBottom) styles.borderBottom = '1px solid'
  if (border || borderColor) styles.borderColor = borderColor

  return { style: { ...styles, ...style }, ...props }
}
