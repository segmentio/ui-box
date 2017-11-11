import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

export const propTypes = {
  opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export const keysPropTypes = Object.keys(propTypes)

export const parseProps = ({ opacity, className, ...props }) => ({
  ...props,
  className: cx(
    className,
    opacity !== undefined && insertSingleProperty('opacity', opacity),
  ),
})
