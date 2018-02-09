import PropTypes from 'prop-types'
import getCss from '../get-css'

export const propTypes = {
  listStyle: PropTypes.string,
  listStyleType: PropTypes.string,
  listStyleImage: PropTypes.string,
  listStylePosition: PropTypes.string
}

export const propAliases = {}

export const propEnhancers = {
  listStyle: listStyle => getCss('listStyle', listStyle),
  listStyleType: listStyleType => getCss('listStyleType', listStyleType),
  listStyleImage: listStyleImage => getCss('listStyleImage', listStyleImage),
  listStylePosition: listStylePosition =>
    getCss('listStylePosition', listStylePosition)
}
