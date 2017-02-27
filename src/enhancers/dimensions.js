import React, { PropTypes } from 'react'

export const propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  ]),
  height: PropTypes.string,
  minWidth: PropTypes.string,
  minHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  maxHeight: PropTypes.string
}

export const parseProps = ({
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  style,
  ...props
}) => {
  const styles = {}

  if (width) {
    if (typeof width === 'number') {
      styles.width = `${width/0.12}%`
    } else {
      styles.width = width
    }
  }

  if (height) styles.height = height

  if (minWidth) styles.minWidth = minWidth
  if (minHeight) styles.minHeight = minHeight
  if (maxWidth) styles.maxWidth = maxWidth
  if (maxHeight) styles.maxHeight = maxHeight

  return { style: { ...styles, ...style }, ...props }
}
