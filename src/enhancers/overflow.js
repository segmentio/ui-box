import PropTypes from 'prop-types'
import { css } from 'glamor'
import cx from 'classnames'

export const propTypes = {
  overflow: PropTypes.string,
  overflowY: PropTypes.string,
  overflowX: PropTypes.string
}

export const parseProps = ({
  overflow,
  overflowX,
  overflowY,
  className,
  ...props
}) => ({
  ...props,
  className: cx(
    className,
    overflow !== undefined && css({ overflow }).toString(),
    overflowX !== undefined && css({ overflowX }).toString(),
    overflowY !== undefined && css({ overflowY }).toString()
  )
})
