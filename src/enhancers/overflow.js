import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

export const propTypes = {
  overflow: PropTypes.string,
  overflowY: PropTypes.string,
  overflowX: PropTypes.string,
}

export const keysPropTypes = Object.keys(propTypes)

export const parseProps = ({
  overflow,
  overflowX,
  overflowY,
  className,
  ...props
}) => ({
  ...props,
  className: cx(
    className,
    overflow !== undefined && insertSingleProperty('overflow', overflow),
    overflowX !== undefined && insertSingleProperty('overflowX', overflowX),
    overflowY !== undefined && insertSingleProperty('overflowY', overflowY),
  ),
})
