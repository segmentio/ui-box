import PropTypes from 'prop-types'
import { css } from 'glamor'
import getCss from '../get-css'

export const propTypes = {
  boxSizing: PropTypes.string,
  clear: PropTypes.string,
  clearfix: PropTypes.bool,
  display: PropTypes.string,
  float: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const propNames = Object.keys(propTypes)

const cssClearfix = {
  '&:before, &:after': {
    display: 'table',
    clear: 'both',
    content: '""'
  }
}

export const propAliases = {}

export const propEnhancers = {
  boxSizing: boxSizing => getCss('boxSizing', boxSizing),
  clear: clear => getCss('clear', clear),
  clearfix: () => ({
    className: css(cssClearfix).toString()
  }),
  display: display => getCss('display', display),
  float: float => getCss('float', float),
  zIndex: zIndex => getCss('zIndex', zIndex)
}
