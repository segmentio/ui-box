import PropTypes from 'prop-types'

export const propTypes = {
  borderRadius: PropTypes.string,
  borderTopLeftRadius: PropTypes.string,
  borderTopRightRadius: PropTypes.string,
  borderBottomLeftRadius: PropTypes.string,
  borderBottomRightRadius: PropTypes.string
}
export const parseProps = ({
  borderRadius,
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
    borderTopLeftRadius !== undefined && css({ borderTopLeftRadius }).toString(),
    borderTopRightRadius !== undefined && css({ borderTopRightRadius }).toString(),
    borderBottomLeftRadius !== undefined && css({ borderBottomLeftRadius }).toString(),
    borderBottomRightRadius !== undefined && css({ borderBottomRightRadius }).toString()
  )
})
