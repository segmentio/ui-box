import PropTypes from 'prop-types'
import getCss from '../get-css'

export const propTypes = {
  boxShadow: PropTypes.string
}

export const propNames = Object.keys(propTypes)

export const propAliases = {}

export const propEnhancers = {
  boxShadow: boxShadow => getCss('boxShadow', boxShadow)
}
