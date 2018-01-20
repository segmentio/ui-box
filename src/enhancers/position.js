import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

export const propTypes = {
  position: PropTypes.oneOf([
    'relative',
    'absolute',
    'fixed',
    'static',
    'sticky',
    'inherit',
    'initial'
  ]),
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const keysPropTypes = Object.keys(propTypes)

export const parseProps = ({ position, top, right, bottom, left }) => {
  return cx(
    position !== undefined && insertSingleProperty('position', position),
    top !== undefined && insertSingleProperty('top', top),
    right !== undefined && insertSingleProperty('right', right),
    bottom !== undefined && insertSingleProperty('bottom', bottom),
    left !== undefined && insertSingleProperty('left', left)
  )
}
