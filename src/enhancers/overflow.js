import { PropTypes } from 'react'

export const propTypes = {
  overflow: PropTypes.oneOf([
    'hidden',
    'visible',
    'scroll',
    'auto',
    'inherit',
    'initial'
  ])
}

export const parseProps = ({ overflow, style, ...props }) => {
  const newStyles = {}

  newStyles.overflow = overflow

  return { style: { ...newStyles, ...style }, ...props }
}
