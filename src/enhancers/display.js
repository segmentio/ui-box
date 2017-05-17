import PropTypes from 'prop-types'
import { css } from 'glamor'
import cx from 'classnames'

export const propTypes = {
  display: PropTypes.string
}

export const parseProps = ({
  display,
  className,
  ...props
}) => ({
  ...props,
  className: cx(
    className,
    display !== undefined && css({ display }).toString()
  )
})
