import PropTypes from 'prop-types'

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
  className,
  ...props
}) => ({
  ...props,
  className: cx(
    className,
    position !== undefined && css({ position }).toString(),
    top !== undefined && css({ top }).toString(),
    right !== undefined && css({ right }).toString(),
    bottom !== undefined && css({ bottom }).toString(),
    left !== undefined && css({ left }).toString(),
  )
})
