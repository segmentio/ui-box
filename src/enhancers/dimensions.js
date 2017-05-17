import PropTypes from 'prop-types'
import { css } from 'glamor'
import cx from 'classnames'

export const propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const parseProps = ({
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  className,
  ...props
}) => ({
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
})
