import { PropTypes } from 'react'

export const propTypes = {
  backgroundColor: PropTypes.string
}

export const parseProps = ({ backgroundColor, style, ...props }) => {
  const newStyles = {}

  newStyles.backgroundColor = backgroundColor

  return { style: { ...newStyles, ...style }, ...props }
}
