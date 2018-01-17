import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

export const propTypes = {
  boxShadow: PropTypes.string
}

export const keysPropTypes = Object.keys(propTypes)

export const parseProps = ({ boxShadow }) => {
  return cx(
    boxShadow !== undefined && insertSingleProperty('boxShadow', boxShadow)
  )
}
