import PropTypes from 'prop-types'
import { css } from 'glamor'
import cx from 'classnames'

export const propTypes = {
  boxShadow: PropTypes.string
}

export const parseProps = ({
  boxShadow,
  className,
  ...props
}) => ({
  ...props,
  className: cx(
    className,
    boxShadow !== undefined && css({ boxShadow }).toString()
  )
})
