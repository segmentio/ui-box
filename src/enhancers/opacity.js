import PropTypes from 'prop-types'
import { css } from 'glamor'
import cx from 'classnames'

export const propTypes = {
  opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export const parseProps = ({ opacity, className, ...props }) => ({
  ...props,
  className: cx(
    className,
    opacity !== undefined && css({ opacity }).toString()
  ),
})
