import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

export const propTypes = {
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  position: PropTypes.oneOf([
    'relative',
    'absolute',
    'fixed',
    'static',
    'sticky',
    'inherit',
    'initial'
  ]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const propNames = Object.keys(propTypes)

export const parseProps = ({ bottom, left, position, right, top }) => {
  return cx(
    bottom !== undefined && insertSingleProperty('bottom', bottom),
    left !== undefined && insertSingleProperty('left', left),
    position !== undefined && insertSingleProperty('position', position),
    right !== undefined && insertSingleProperty('right', right),
    top !== undefined && insertSingleProperty('top', top)
  )
}
