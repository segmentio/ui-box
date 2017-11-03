import PropTypes from 'prop-types'
import { css } from 'glamor'
import cx from 'classnames'

export const propTypes = {
  cursor: PropTypes.string,
  userSelect: PropTypes.string,
  visibility: PropTypes.string,
  pointerEvents: PropTypes.string,
}

export const parseProps = ({
  cursor,
  userSelect,
  visibility,
  pointerEvents,
  className,
  ...props
}) => ({
  ...props,
  className: cx(
    className,
    cursor !== undefined && css({ cursor }).toString(),
    userSelect !== undefined && css({ userSelect }).toString(),
    visibility !== undefined && css({ visibility }).toString(),
    pointerEvents !== undefined && css({ pointerEvents }).toString()
  ),
})
