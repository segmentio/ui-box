import React, { PropTypes } from 'react'

export const propTypes = {
  display: PropTypes.oneOf([
    'block',
    'inline-block',
    'inline',
    'table',
    'table-row',
    'table-cell',
    'flex',
    'inline-flex'
  ])
}

export const parseProps = ({
  display,
  style,
  ...props
}) => {
  const styles = {}

  if (display) styles.display = display

  return { style: { ...styles, ...style }, ...props }
}
