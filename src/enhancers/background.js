import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

export const propTypes = {
  background: PropTypes.string,
  backgroundBlendMode: PropTypes.string,
  backgroundClip: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundOrigin: PropTypes.string,
  backgroundPosition: PropTypes.string,
  backgroundRepeat: PropTypes.string,
  backgroundSize: PropTypes.string
}

export const propNames = Object.keys(propTypes)

export const parseProps = ({
  background,
  backgroundBlendMode,
  backgroundClip,
  backgroundColor,
  backgroundImage,
  backgroundOrigin,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize
}) => {
  return cx(
    background !== undefined && insertSingleProperty('background', background),
    backgroundBlendMode !== undefined &&
      insertSingleProperty('backgroundBlendMode', backgroundBlendMode),
    backgroundClip !== undefined &&
      insertSingleProperty('backgroundClip', backgroundClip),
    backgroundColor !== undefined &&
      insertSingleProperty('backgroundColor', backgroundColor),
    backgroundImage !== undefined &&
      insertSingleProperty('backgroundImage', backgroundImage),
    backgroundOrigin !== undefined &&
      insertSingleProperty('backgroundOrigin', backgroundOrigin),
    backgroundPosition !== undefined &&
      insertSingleProperty('backgroundPosition', backgroundPosition),
    backgroundRepeat !== undefined &&
      insertSingleProperty('backgroundRepeat', backgroundRepeat),
    backgroundSize !== undefined &&
      insertSingleProperty('backgroundSize', backgroundSize)
  )
}
