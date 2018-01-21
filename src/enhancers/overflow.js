import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

export const propTypes = {
  overflow: PropTypes.string,
  overflowY: PropTypes.string,
  overflowX: PropTypes.string
}

export const propNames = Object.keys(propTypes)

export const parseProps = ({ overflow, overflowX, overflowY }) => {
  return cx(
    overflow !== undefined && insertSingleProperty('overflow', overflow),
    overflowX !== undefined && insertSingleProperty('overflowX', overflowX),
    overflowY !== undefined && insertSingleProperty('overflowY', overflowY)
  )
}
