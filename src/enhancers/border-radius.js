import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

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

export const propNames = Object.keys(propTypes)

export const parseProps = ({
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius
}) => {
  return cx(
    borderBottomLeftRadius !== undefined &&
      insertSingleProperty('borderBottomLeftRadius', borderBottomLeftRadius),
    borderBottomRightRadius !== undefined &&
      insertSingleProperty('borderBottomRightRadius', borderBottomRightRadius),
    borderRadius !== undefined &&
      insertSingleProperty('borderRadius', borderRadius),
    borderTopLeftRadius !== undefined &&
      insertSingleProperty('borderTopLeftRadius', borderTopLeftRadius),
    borderTopRightRadius !== undefined &&
      insertSingleProperty('borderTopRightRadius', borderTopRightRadius)
  )
}
