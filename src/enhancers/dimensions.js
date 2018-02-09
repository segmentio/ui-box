import PropTypes from 'prop-types'
import getCss from '../get-css'

export const propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const propAliases = {}

export const propEnhancers = {
  height: height => getCss('height', height),
  maxHeight: maxHeight => getCss('maxHeight', maxHeight),
  maxWidth: maxWidth => getCss('maxWidth', maxWidth),
  minHeight: minHeight => getCss('minHeight', minHeight),
  minWidth: minWidth => getCss('minWidth', minWidth),
  width: width => getCss('width', width)
}
