import PropTypes from 'prop-types'
import { css } from 'glamor'
import cx from 'classnames'

export const propTypes = {
  cursor: PropTypes.string,
  clearfix: PropTypes.string,
  userSelect: PropTypes.string,
  visibility: PropTypes.string,
  opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  float: PropTypes.string,
  clear: PropTypes.string,
  boxSizing: PropTypes.string,
  pointerEvents: PropTypes.string,
}

const cssClearfix = {
  '&:before, &:after': {
    display: 'table',
    clear: 'both',
    content: '""',
  },
}

export const parseProps = ({
  clearfix,
  cursor,
  userSelect,
  visibility,
  opacity,
  float,
  clear,
  boxSizing,
  pointerEvents,
  className,
  ...props
}) => ({
  ...props,
  className: cx(
    className,
    clearfix && css(cssClearfix).toString(),
    cursor !== undefined && css({ cursor }).toString(),
    userSelect !== undefined && css({ userSelect }).toString(),
    visibility !== undefined && css({ visibility }).toString(),
    opacity !== undefined && css({ opacity }).toString(),
    float !== undefined && css({ float }).toString(),
    clear !== undefined && css({ clear }).toString(),
    boxSizing !== undefined && css({ boxSizing }).toString(),
    pointerEvents !== undefined && css({ pointerEvents }).toString()
  ),
})
