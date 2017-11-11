import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

export const propTypes = {
  background: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundPosition: PropTypes.string,
  backgroundSize: PropTypes.string,
  backgroundOrigin: PropTypes.string,
  backgroundRepeat: PropTypes.string,
  backgroundClip: PropTypes.string,
  backgroundBlendMode: PropTypes.string,
}

export const keysPropTypes = Object.keys(propTypes)

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
    background !== undefined && insertSingleProperty('background', background),
    backgroundColor !== undefined &&
      insertSingleProperty('backgroundColor', backgroundColor),
    backgroundImage !== undefined &&
      insertSingleProperty('backgroundImage', backgroundImage),
    backgroundPosition !== undefined &&
      insertSingleProperty('backgroundPosition', backgroundPosition),
    backgroundSize !== undefined &&
      insertSingleProperty('backgroundSize', backgroundSize),
    backgroundOrigin !== undefined &&
      insertSingleProperty('backgroundOrigin', backgroundOrigin),
    backgroundRepeat !== undefined &&
      insertSingleProperty('backgroundRepeat', backgroundRepeat),
    backgroundClip !== undefined &&
      insertSingleProperty('backgroundClip', backgroundClip),
    backgroundBlendMode !== undefined &&
      insertSingleProperty('backgroundBlendMode', backgroundBlendMode),
  ),
})
