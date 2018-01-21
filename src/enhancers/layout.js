import PropTypes from 'prop-types'
import { css } from 'glamor'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

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

export const parseProps = ({
  boxSizing,
  clear,
  clearfix,
  display,
  float,
  zIndex
}) => {
  return cx(
    boxSizing !== undefined && insertSingleProperty('boxSizing', boxSizing),
    clear !== undefined && insertSingleProperty('clear', clear),
    clearfix && css(cssClearfix).toString(),
    display !== undefined && insertSingleProperty('display', display),
    float !== undefined && insertSingleProperty('float', float),
    zIndex !== undefined && insertSingleProperty('zIndex', zIndex)
  )
}
