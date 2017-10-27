import PropTypes from 'prop-types'
import { css } from 'glamor'
import cx from 'classnames'

export const propTypes = {
  onClick: PropTypes.func
}

export const parseProps = ({
  onClick,
  ...props
}) => ({
  onClick,
  ...props
})
