import PropTypes from 'prop-types'
import { css } from 'glamor'
import cx from 'classnames'

export const propTypes = {
  transform: PropTypes.string
}

const parseTransform = (transform) => css({
  transform
})

export const parseProps = ({ transform, className, ...props }) => ({
  className: transform !== undefined ? cx(`${parseTransform(transform)}`, className) : className,
  ...props
})
