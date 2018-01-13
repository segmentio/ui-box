import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

export const propTypes = {
  boxShadow: PropTypes.string
}

export const keysPropTypes = Object.keys(propTypes)

export const parseProps = ({ boxShadow, className, ...props }) => ({
  ...props,
  className: cx(
    className,
    boxShadow !== undefined && insertSingleProperty('boxShadow', boxShadow)
  )
})
