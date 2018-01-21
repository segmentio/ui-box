import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

export const propTypes = {
  border: PropTypes.string,
  borderBottom: PropTypes.string,
  borderBottomColor: PropTypes.string,
  borderBottomStyle: PropTypes.string,
  borderBottomWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderColor: PropTypes.string,
  borderLeft: PropTypes.string,
  borderLeftColor: PropTypes.string,
  borderLeftStyle: PropTypes.string,
  borderLeftWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderRight: PropTypes.string,
  borderRightColor: PropTypes.string,
  borderRightStyle: PropTypes.string,
  borderRightWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderStyle: PropTypes.string,
  borderTop: PropTypes.string,
  borderTopColor: PropTypes.string,
  borderTopStyle: PropTypes.string,
  borderTopWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const propNames = Object.keys(propTypes)

export const parseProps = ({
  border,
  borderBottom,
  borderBottomColor,
  borderBottomStyle,
  borderBottomWidth,
  borderColor,
  borderLeft,
  borderLeftColor,
  borderLeftStyle,
  borderLeftWidth,
  borderRight,
  borderRightColor,
  borderRightStyle,
  borderRightWidth,
  borderStyle,
  borderTop,
  borderTopColor,
  borderTopStyle,
  borderTopWidth,
  borderWidth
}) => {
  return cx(
    border !== undefined && insertSingleProperty('border', border),
    borderBottom !== undefined &&
      insertSingleProperty('borderBottom', borderBottom),
    borderBottomColor !== undefined &&
      insertSingleProperty('borderBottomColor', borderBottomColor),
    borderBottomStyle !== undefined &&
      insertSingleProperty('borderBottomStyle', borderBottomStyle),
    borderBottomWidth !== undefined &&
      insertSingleProperty('borderBottomWidth', borderBottomWidth),
    borderColor !== undefined &&
      insertSingleProperty('borderColor', borderColor),
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
    borderStyle !== undefined &&
      insertSingleProperty('borderStyle', borderStyle),
    borderTop !== undefined && insertSingleProperty('borderTop', borderTop),
    borderTopColor !== undefined &&
      insertSingleProperty('borderTopColor', borderTopColor),
    borderTopStyle !== undefined &&
      insertSingleProperty('borderTopStyle', borderTopStyle),
    borderTopWidth !== undefined &&
      insertSingleProperty('borderTopWidth', borderTopWidth),
    borderWidth !== undefined &&
      insertSingleProperty('borderWidth', borderWidth)
  )
}
