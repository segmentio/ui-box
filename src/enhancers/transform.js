import PropTypes from 'prop-types'
import getCss from '../css/get-css'

export const propTypes = {
  transform: PropTypes.string,
  transformOrigin: PropTypes.string
}

export const propNames = Object.keys(propTypes)

export const propAliases = {}

export const propEnhancers = {
  transform: transform => getCss('transform', transform),
  transformOrigin: transformOrigin => getCss('transformOrigin', transformOrigin)
}
