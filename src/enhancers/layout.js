import PropTypes from 'prop-types'
import { css } from 'glamor'
import cx from 'classnames'

export const propTypes = {
  display: PropTypes.string,
  clearfix: PropTypes.string,
  float: PropTypes.string,
  clear: PropTypes.string,
  boxSizing: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

const cssClearfix = {
  '&:before, &:after': {
    display: 'table',
    clear: 'both',
    content: '""',
  },
}

export const parseProps = ({
  display,
  clearfix,
  float,
  clear,
  boxSizing
  zIndex,
  className,
  ...props
}) => ({
  ...props,
  className: cx(
    className,
    display !== undefined && css({ display }).toString(),
    clearfix && css(cssClearfix).toString(),
    float !== undefined && css({ float }).toString(),
    clear !== undefined && css({ clear }).toString(),
    boxSizing !== undefined && css({ boxSizing }).toString(),
    zIndex !== undefined && css({ zIndex }).toString(),
  ),
})
