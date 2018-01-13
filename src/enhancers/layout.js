import PropTypes from 'prop-types'
import { css } from 'glamor'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

export const propTypes = {
  display: PropTypes.string,
  clearfix: PropTypes.string,
  float: PropTypes.string,
  clear: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  boxSizing: PropTypes.string
}

export const keysPropTypes = Object.keys(propTypes)

const cssClearfix = {
  '&:before, &:after': {
    display: 'table',
    clear: 'both',
    content: '""'
  }
}

export const parseProps = ({
  clearfix,
  display,
  float,
  clear,
  zIndex,
  boxSizing,
  className,
  ...props
}) => ({
  ...props,
  className: cx(
    className,
    clearfix && css(cssClearfix).toString(),
    display !== undefined && insertSingleProperty('display', display),
    float !== undefined && insertSingleProperty('float', float),
    clear !== undefined && insertSingleProperty('clear', clear),
    zIndex !== undefined && insertSingleProperty('zIndex', zIndex),
    boxSizing !== undefined && insertSingleProperty('boxSizing', boxSizing)
  )
})
