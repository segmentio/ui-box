import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty, insertFirstValidProperty } from '../css'

export const propTypes = {
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginY: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingY: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const propNames = Object.keys(propTypes)

export const parseProps = ({
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  marginX,
  marginY,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingX,
  paddingY
}) => {
  return cx(
    margin !== undefined && insertSingleProperty('margin', margin),
    padding !== undefined && insertSingleProperty('padding', padding),
    insertFirstValidProperty('marginBottom', marginBottom, marginY),
    insertFirstValidProperty('marginLeft', marginLeft, marginX),
    insertFirstValidProperty('marginRight', marginRight, marginX),
    insertFirstValidProperty('marginTop', marginTop, marginY),
    insertFirstValidProperty('paddingBottom', paddingBottom, paddingY),
    insertFirstValidProperty('paddingLeft', paddingLeft, paddingX),
    insertFirstValidProperty('paddingRight', paddingRight, paddingX),
    insertFirstValidProperty('paddingTop', paddingTop, paddingY)
  )
}
