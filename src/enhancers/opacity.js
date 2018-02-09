import PropTypes from 'prop-types'
import getCss from '../get-css'

export const propTypes = {
  opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const propAliases = {}

export const propEnhancers = {
  opacity: opacity => getCss('opacity', opacity)
}
