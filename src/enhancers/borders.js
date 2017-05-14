import PropTypes from 'prop-types'

export const propTypes = {
  borderColor: PropTypes.string,
  border: PropTypes.string,
  borderLeft: PropTypes.string,
  borderRight: PropTypes.string,
  borderTop: PropTypes.string,
  borderBottom: PropTypes.string
}

export const parseProps = ({
  border,
  borderColor,
  borderLeft,
  borderRight,
  borderTop,
  borderBottom,
  className,
  ...props
}) => ({
  ...props,
  className: cx(
    className,
    border !== undefined && css({ border }),
    borderColor !== undefined && css({ borderColor }),
    borderLeft !== undefined && css({ borderLeft }),
    borderRight !== undefined && css({ borderRight }),
    borderTop !== undefined && css({ borderTop }),
    borderBottom !== undefined && css({ borderBottom })
  )
})
