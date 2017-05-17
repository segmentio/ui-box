import PropTypes from 'prop-types'
import { css } from 'glamor'
import cx from 'classnames'

export const propTypes = {
  transform: PropTypes.string
}

export const parseProps = ({
  transform,
  transformOrigin,
  className,
  ...props
}) => ({
  ...props,
  className: cx(
    className,
    transform !== undefined && css({ transform }).toString(),
    transformOrigin !== undefined && css({ transformOrigin }).toString(),
  )
})
