import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

export const propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const propNames = Object.keys(propTypes)

export const parseProps = ({
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight
}) => {
  return cx(
    width !== undefined && insertSingleProperty('width', width),
    height !== undefined && insertSingleProperty('height', height),
    minWidth !== undefined && insertSingleProperty('minWidth', minWidth),
    minHeight !== undefined && insertSingleProperty('minHeight', minHeight),
    maxWidth !== undefined && insertSingleProperty('maxWidth', maxWidth),
    maxHeight !== undefined && insertSingleProperty('maxHeight', maxHeight)
  )
}
