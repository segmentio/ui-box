import { PropTypes } from 'react'

export const propTypes = {
  position: PropTypes.oneOf([
    'relative',
    'absolute',
    'fixed',
    'static'
  ]),
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const parseProps = ({
  position,
  top,
  right,
  bottom,
  left,
  style,
  ...props
}) => {
  const newStyles = {}

  if (position !== undefined) newStyles.position = position
  if (top !== undefined) newStyles.top = top
  if (right !== undefined) newStyles.right = right
  if (bottom !== undefined) newStyles.bottom = bottom
  if (left !== undefined) newStyles.left = left

  return { style: { ...newStyles, ...style }, ...props }
}
