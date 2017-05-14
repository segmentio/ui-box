import PropTypes from 'prop-types'
import { css } from 'glamor'
import cx from 'classnames'

export const propTypes = {
  background: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string
}

export const parseProps = ({
  background,
  backgroundColor,
  backgroundImage,
  className,
  ...props
}) => ({
  ...props,
  className: cx({
    className,
    background !== undefined && css({ background }).toString(),
    backgroundColor !== undefined && css({ backgroundColor }).toString(),
    backgroundImage !== undefined && css({ backgroundImage }).toString()
  })
})
