import PropTypes from 'prop-types'
import getCss from '../get-css'

export const propTypes = {
  transform: PropTypes.string,
  transformOrigin: PropTypes.string,
}

export const propAliases = {}

export const propValidators = {}

export const propEnhancers = {
  transform: transform => getCss('transform', transform),
  transformOrigin: transformOrigin =>
    getCss('transformOrigin', transformOrigin),
}
