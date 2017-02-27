import React, { PropTypes } from 'react'

const TextAlign = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center'
}

export const propTypes = {
  textAlign: PropTypes.oneOf(Object.values(TextAlign))
}

export const parseProps = ({
  textAlign,
  style,
  ...props
}) => {
  const styles = {}

  styles.textAlign = textAlign

  return { style: { ...styles, ...style }, ...props }
}
