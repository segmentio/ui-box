import PropTypes from 'prop-types'
import { css } from 'glamor'
import cx from 'classnames'

export const propTypes = {
  display: PropTypes.oneOf([
    'block',
    'inline-block',
    'inline',
    'table',
    'table-row',
    'table-cell',
    'flex',
    'inline-flex'
  ])
}

export const parseProps = ({
  display,
  className,
  ...props
}) => {
  return {
    ...props,
    className: cx(
      className,
      display !== undefined && css({ display }).toString()
    )
  }
}
