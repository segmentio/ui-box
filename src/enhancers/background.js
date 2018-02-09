import PropTypes from 'prop-types'
import getCss from '../get-css'

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

export const propAliases = {}

export const propEnhancers = {
  background: background => getCss('background', background),
  backgroundBlendMode: backgroundBlendMode =>
    getCss('backgroundBlendMode', backgroundBlendMode),
  backgroundClip: backgroundClip => getCss('backgroundClip', backgroundClip),
  backgroundColor: backgroundColor =>
    getCss('backgroundColor', backgroundColor),
  backgroundImage: backgroundImage =>
    getCss('backgroundImage', backgroundImage),
  backgroundOrigin: backgroundOrigin =>
    getCss('backgroundOrigin', backgroundOrigin),
  backgroundPosition: backgroundPosition =>
    getCss('backgroundPosition', backgroundPosition),
  backgroundRepeat: backgroundRepeat =>
    getCss('backgroundRepeat', backgroundRepeat),
  backgroundSize: backgroundSize => getCss('backgroundSize', backgroundSize)
}
