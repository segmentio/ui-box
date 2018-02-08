import PropTypes from 'prop-types'
import getCss from '../get-css'

export const propTypes = {
  cursor: PropTypes.string,
  pointerEvents: PropTypes.string,
  userSelect: PropTypes.string,
  visibility: PropTypes.string
}

export const propNames = Object.keys(propTypes)

export const propAliases = {}

export const propEnhancers = {
  cursor: cursor => getCss('cursor', cursor),
  pointerEvents: pointerEvents => getCss('pointerEvents', pointerEvents),
  userSelect: userSelect => getCss('userSelect', userSelect),
  visibility: visibility => getCss('visibility', visibility)
}
