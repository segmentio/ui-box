import PropTypes from 'prop-types'
import getCss from '../get-css'

export const propTypes = {
  overflow: PropTypes.string,
  overflowX: PropTypes.string,
  overflowY: PropTypes.string
}

export const propAliases = {
  overflow: ['overflowX', 'overflowY']
}

export const propValidators = {}

const overflowY = {
  className: 'ovflw-y',
  cssName: 'overflow-y',
  jsName: 'overflowY',
  safeValue: true
}
const overflowX = {
  className: 'ovflw-x',
  cssName: 'overflow-x',
  jsName: 'overflowX',
  safeValue: true
}

export const propEnhancers = {
  overflowX: value => getCss(overflowX, value),
  overflowY: value => getCss(overflowY, value)
}
