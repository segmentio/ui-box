import PropTypes from 'prop-types'
import getCss from '../get-css'

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

export const propAliases = {}

export const propEnhancers = {
  bottom: bottom => getCss('bottom', bottom),
  left: left => getCss('left', left),
  position: position => getCss('position', position),
  right: right => getCss('right', right),
  top: top => getCss('top', top)
}
