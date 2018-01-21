import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

export const propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const propNames = Object.keys(propTypes)

export const parseProps = ({
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  width
}) => {
  return cx(
    height !== undefined && insertSingleProperty('height', height),
    maxHeight !== undefined && insertSingleProperty('maxHeight', maxHeight),
    maxWidth !== undefined && insertSingleProperty('maxWidth', maxWidth),
    minHeight !== undefined && insertSingleProperty('minHeight', minHeight),
    minWidth !== undefined && insertSingleProperty('minWidth', minWidth),
    width !== undefined && insertSingleProperty('width', width)
  )
}
