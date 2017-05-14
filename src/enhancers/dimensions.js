import PropTypes from 'prop-types'

export const propTypes = {
  width: PropTypes.string,
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
  ...props
}) => {
  return {
    ...props,
    className: cx(
      className,
      width !== undefined && css({ width }).toString(),
      height !== undefined && css({ height }).toString(),
      minWidth !== undefined && css({ minWidth }).toString(),
      minHeight !== undefined && css({ minHeight }).toString(),
      maxWidth !== undefined && css({ maxWidth }).toString(),
      maxHeight !== undefined && css({ maxHeight }).toString()
    )
  }
}
