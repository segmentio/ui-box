import PropTypes from 'prop-types'
import { css } from 'glamor'
import cx from 'classnames'

export const propTypes = {
  background: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundPosition: PropTypes.string,
  backgroundSize: PropTypes.string,
  backgroundOrigin: PropTypes.string,
  backgroundRepeat: PropTypes.string,
  backgroundClip: PropTypes.string,
  backgroundBlendMode: PropTypes.string
}

export const parseProps = ({
  background,
  backgroundColor,
  backgroundImage,
  backgroundPosition,
  backgroundSize,
  backgroundOrigin,
  backgroundRepeat,
  backgroundClip,
  backgroundBlendMode,
  className,
  ...props
}) => ({
  ...props,
  className: cx(
    className,
    background !== undefined && css({ background }).toString(),
    backgroundColor !== undefined && css({ backgroundColor }).toString(),
    backgroundImage !== undefined && css({ backgroundImage }).toString(),
    backgroundPosition !== undefined && css({ backgroundPosition }).toString(),
    backgroundSize !== undefined && css({ backgroundSize }).toString(),
    backgroundOrigin !== undefined && css({ backgroundOrigin }).toString(),
    backgroundRepeat !== undefined && css({ backgroundRepeat }).toString(),
    backgroundClip !== undefined && css({ backgroundClip }).toString(),
    backgroundBlendMode !== undefined && css({ backgroundBlendMode }).toString()
  )
})
