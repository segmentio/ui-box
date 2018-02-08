import PropTypes from 'prop-types'
import getCss from '../css/get-css'

export const propTypes = {
  overflow: PropTypes.string,
  overflowX: PropTypes.string,
  overflowY: PropTypes.string
}

export const propNames = Object.keys(propTypes)

export const propAliases = {
  overflow: ['overflowX', 'overflowY']
}

export const propEnhancers = {
  overflowX: overflowX => getCss('overflowX', overflowX),
  overflowY: overflowY => getCss('overflowY', overflowY)
}
