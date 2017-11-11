import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

export const propTypes = {
  border: PropTypes.string,
  borderColor: PropTypes.string,
  borderStyle: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderLeft: PropTypes.string,
  borderLeftColor: PropTypes.string,
  borderLeftStyle: PropTypes.string,
  borderLeftWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRight: PropTypes.string,
  borderRightColor: PropTypes.string,
  borderRightStyle: PropTypes.string,
  borderRightWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderTop: PropTypes.string,
  borderTopColor: PropTypes.string,
  borderTopStyle: PropTypes.string,
  borderTopWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderBottom: PropTypes.string,
  borderBottomColor: PropTypes.string,
  borderBottomStyle: PropTypes.string,
  borderBottomWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export const keysPropTypes = Object.keys(propTypes)

export const parseProps = ({
  border,
  borderColor,
  borderStyle,
  borderWidth,
  borderLeft,
  borderLeftColor,
  borderLeftStyle,
  borderLeftWidth,
  borderRight,
  borderRightColor,
  borderRightStyle,
  borderRightWidth,
  borderTop,
  borderTopColor,
  borderTopStyle,
  borderTopWidth,
  borderBottom,
  borderBottomColor,
  borderBottomStyle,
  borderBottomWidth,
  className,
  ...props
}) => ({
  ...props,
  className: cx(
    className,
    border !== undefined && insertSingleProperty('border', border),
    borderColor !== undefined &&
      insertSingleProperty('borderColor', borderColor),
    borderStyle !== undefined &&
      insertSingleProperty('borderStyle', borderStyle),
    borderWidth !== undefined &&
      insertSingleProperty('borderWidth', borderWidth),
    borderLeft !== undefined && insertSingleProperty('borderLeft', borderLeft),
    borderLeftColor !== undefined &&
      insertSingleProperty('borderLeftColor', borderLeftColor),
    borderLeftStyle !== undefined &&
      insertSingleProperty('borderLeftStyle', borderLeftStyle),
    borderLeftWidth !== undefined &&
      insertSingleProperty('borderLeftWidth', borderLeftWidth),
    borderRight !== undefined &&
      insertSingleProperty('borderRight', borderRight),
    borderRightColor !== undefined &&
      insertSingleProperty('borderRightColor', borderRightColor),
    borderRightStyle !== undefined &&
      insertSingleProperty('borderRightStyle', borderRightStyle),
    borderRightWidth !== undefined &&
      insertSingleProperty('borderRightWidth', borderRightWidth),
    borderTop !== undefined && insertSingleProperty('borderTop', borderTop),
    borderTopColor !== undefined &&
      insertSingleProperty('borderTopColor', borderTopColor),
    borderTopStyle !== undefined &&
      insertSingleProperty('borderTopStyle', borderTopStyle),
    borderTopWidth !== undefined &&
      insertSingleProperty('borderTopWidth', borderTopWidth),
    borderBottom !== undefined &&
      insertSingleProperty('borderBottom', borderBottom),
    borderBottomColor !== undefined &&
      insertSingleProperty('borderBottomColor', borderBottomColor),
    borderBottomStyle !== undefined &&
      insertSingleProperty('borderBottomStyle', borderBottomStyle),
    borderBottomWidth !== undefined &&
      insertSingleProperty('borderBottomWidth', borderBottomWidth),
  ),
})
