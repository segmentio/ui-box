import PropTypes from 'prop-types'
import { css } from 'glamor'
import cx from 'classnames'

export const propTypes = {
  border: PropTypes.string,
  borderColor: PropTypes.string,
  borderStyle: PropTypes.string,
  borderLeft: PropTypes.string,
  borderLeftColor: PropTypes.string,
  borderLeftStyle: PropTypes.string,
  borderRight: PropTypes.string,
  borderRightColor: PropTypes.string,
  borderRightStyle: PropTypes.string,
  borderTop: PropTypes.string,
  borderTopColor: PropTypes.string,
  borderTopStyle: PropTypes.string,
  borderBottom: PropTypes.string,
  borderBottomColor: PropTypes.string,
  borderBottomStyle: PropTypes.string
}

export const parseProps = ({
  border,
  borderColor,
  borderStyle,
  borderLeft,
  borderLeftColor,
  borderLeftStyle,
  borderRight,
  borderRightColor,
  borderRightStyle,
  borderTop,
  borderTopColor,
  borderTopStyle,
  borderBottom,
  borderBottomColor,
  borderBottomStyle,
  className,
  ...props
}) => ({
  ...props,
  className: cx(
    className,
    border !== undefined && css({ border }).toString(),
    borderColor !== undefined && css({ borderColor }).toString(),
    borderStyle !== undefined && css({ borderStyle }).toString(),
    borderLeft !== undefined && css({ borderLeft }).toString(),
    borderLeftColor !== undefined && css({ borderLeftColor }).toString(),
    borderLeftStyle !== undefined && css({ borderLeftStyle }).toString(),
    borderRight !== undefined && css({ borderRight }).toString(),
    borderRightColor !== undefined && css({ borderRightColor }).toString(),
    borderRightStyle !== undefined && css({ borderRightStyle }).toString(),
    borderTop !== undefined && css({ borderTop }).toString(),
    borderTopColor !== undefined && css({ borderTopColor }).toString(),
    borderTopStyle !== undefined && css({ borderTopStyle }).toString(),
    borderBottom !== undefined && css({ borderBottom }).toString(),
    borderBottomColor !== undefined && css({ borderBottomColor }).toString(),
    borderBottomStyle !== undefined && css({ borderBottomStyle }).toString()
  )
})
