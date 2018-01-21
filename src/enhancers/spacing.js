import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'
import getFirstValidProp from '../utils/get-first-valid-prop'

export const propTypes = {
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingY: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginY: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const propNames = Object.keys(propTypes)

export const parseProps = ({
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY
}) => {
  return cx(
    margin !== undefined && insertSingleProperty('margin', margin),
    padding !== undefined && insertSingleProperty('padding', padding),
    getFirstValidProp('marginTop', marginTop, marginY),
    getFirstValidProp('marginRight', marginRight, marginX),
    getFirstValidProp('marginBottom', marginBottom, marginY),
    getFirstValidProp('marginLeft', marginLeft, marginX),
    getFirstValidProp('paddingTop', paddingTop, paddingY),
    getFirstValidProp('paddingRight', paddingRight, paddingX),
    getFirstValidProp('paddingBottom', paddingBottom, paddingY),
    getFirstValidProp('paddingLeft', paddingLeft, paddingX)
  )
}
