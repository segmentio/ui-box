import PropTypes from 'prop-types'
import getCss from '../get-css'

export const propTypes = {
  borderBottomLeftRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  borderBottomRightRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderTopLeftRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  borderTopRightRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export const propAliases = {
  borderRadius: [
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderTopLeftRadius',
    'borderTopRightRadius'
  ]
}

export const propEnhancers = {
  borderBottomLeftRadius: borderBottomLeftRadius =>
    getCss('borderBottomLeftRadius', borderBottomLeftRadius),
  borderBottomRightRadius: borderBottomRightRadius =>
    getCss('borderBottomRightRadius', borderBottomRightRadius),
  borderTopLeftRadius: borderTopLeftRadius =>
    getCss('borderTopLeftRadius', borderTopLeftRadius),
  borderTopRightRadius: borderTopRightRadius =>
    getCss('borderTopRightRadius', borderTopRightRadius)
}
