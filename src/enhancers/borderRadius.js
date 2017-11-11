import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

export const propTypes = {
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderTopLeftRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  borderTopRightRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  borderBottomLeftRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  borderBottomRightRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

export const keysPropTypes = Object.keys(propTypes)

export const parseProps = ({
  borderRadius,
  borderLeftRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  className,
  ...props
}) => ({
  ...props,
  className: cx(
    className,
    borderRadius !== undefined &&
      insertSingleProperty('borderRadius', borderRadius),
    borderLeftRadius !== undefined &&
      insertSingleProperty('borderLeftRadius', borderLeftRadius),
    borderTopLeftRadius !== undefined &&
      insertSingleProperty('borderTopLeftRadius', borderTopLeftRadius),
    borderTopRightRadius !== undefined &&
      insertSingleProperty('borderTopRightRadius', borderTopRightRadius),
    borderBottomLeftRadius !== undefined &&
      insertSingleProperty('borderBottomLeftRadius', borderBottomLeftRadius),
    borderBottomRightRadius !== undefined &&
      insertSingleProperty('borderBottomRightRadius', borderBottomRightRadius),
  ),
})
