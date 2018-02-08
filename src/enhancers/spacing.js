import PropTypes from 'prop-types'
import getCss from '../css/get-css'

export const propTypes = {
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginY: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingY: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const propNames = Object.keys(propTypes)

export const propAliases = {
  margin: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginBottom', 'marginTop'],
  padding: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingBottom', 'paddingTop']
}

export const propEnhancers = {
  marginBottom: marginBottom => getCss('marginBottom', marginBottom),
  marginLeft: marginLeft => getCss('marginLeft', marginLeft),
  marginRight: marginRight => getCss('marginRight', marginRight),
  marginTop: marginTop => getCss('marginTop', marginTop),
  paddingBottom: paddingBottom => getCss('paddingBottom', paddingBottom),
  paddingLeft: paddingLeft => getCss('paddingLeft', paddingLeft),
  paddingRight: paddingRight => getCss('paddingRight', paddingRight),
  paddingTop: paddingTop => getCss('paddingTop', paddingTop)
}
