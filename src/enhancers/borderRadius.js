import PropTypes from 'prop-types'
import { css } from 'glamor'
import cx from 'classnames'

export const propTypes = {
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderTopLeftRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderTopRightRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderBottomLeftRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderBottomRightRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const parseProps = ({
  borderRadius,
  borderLeftRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  className,
  ...props
}) => ({
  ...props,
  className: cx(
    className,
    borderRadius !== undefined && css({ borderRadius }).toString(),
    borderTopLeftRadius !== undefined && css({ borderTopLeftRadius }).toString(),
    borderTopRightRadius !== undefined && css({ borderTopRightRadius }).toString(),
    borderBottomLeftRadius !== undefined && css({ borderBottomLeftRadius }).toString(),
    borderBottomRightRadius !== undefined && css({ borderBottomRightRadius }).toString()
  )
})
