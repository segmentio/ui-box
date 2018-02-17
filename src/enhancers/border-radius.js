import PropTypes from 'prop-types'
import getCss from '../get-css'
import {spacesOutsideParentheses} from '../utils/regex'

export const propTypes = {
  borderBottomLeftRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  borderBottomRightRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderTopLeftRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  borderTopRightRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

export const propAliases = {
  borderRadius: [
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderTopLeftRadius',
    'borderTopRightRadius',
  ],
}

export const propValidators = {}

if (process.env.NODE_ENV !== 'production') {
  propValidators.borderRadius = value => {
    if (spacesOutsideParentheses.test(value)) {
      return `multiple values (“${value}”) aren՚t supported with “borderRadius”. Use “borderBottomLeftRadius”, “borderBottomRightRadius” “borderTopLeftRadius” and “borderTopRightRadius” instead.`
    }
  }
}

export const propEnhancers = {
  borderBottomLeftRadius: borderBottomLeftRadius =>
    getCss('borderBottomLeftRadius', borderBottomLeftRadius),
  borderBottomRightRadius: borderBottomRightRadius =>
    getCss('borderBottomRightRadius', borderBottomRightRadius),
  borderTopLeftRadius: borderTopLeftRadius =>
    getCss('borderTopLeftRadius', borderTopLeftRadius),
  borderTopRightRadius: borderTopRightRadius =>
    getCss('borderTopRightRadius', borderTopRightRadius),
}
