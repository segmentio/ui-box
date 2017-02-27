import React, { PropTypes } from 'react'
import theme from '../components/theme'

const RoundedPropType = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.oneOf(theme.borderRadius.map((_, i) => i + 1)),
  PropTypes.string
])

export const propTypes = {
  circle: PropTypes.bool,
  rounded: RoundedPropType,
  roundedTop: RoundedPropType,
  roundedTopLeft: RoundedPropType,
  roundedTopRight: RoundedPropType,
  roundedBottom: RoundedPropType,
  roundedBottomLeft: RoundedPropType,
  roundedBottomRight: RoundedPropType,
  roundedLeft: RoundedPropType,
  roundedRight: RoundedPropType
}

const parseUnit = (unit) => {
  if (unit === undefined) {
    return `0`
  } else if (typeof unit === 'boolean') {
    return theme.borderRadius[0]
  } else if (Number.isInteger(unit)) {
    return theme.borderRadius[unit - 1]
  }
  return unit
}

const parseBorderRadius = ({ topLeft, topRight, bottomLeft, bottomRight }) =>
  `${parseUnit(topLeft)} ${parseUnit(topRight)} ${parseUnit(bottomRight)} ${parseUnit(bottomLeft)}`

const getFirstValidValue = (...args) => {
  for (let i = 0, len = args.length; i < len; i++) {
    if (args[i] !== undefined) {
      return args[i]
    }
  }
}

export const parseProps = ({
  circle,
  rounded,
  roundedTop,
  roundedTopLeft,
  roundedTopRight,
  roundedBottom,
  roundedBottomLeft,
  roundedBottomRight,
  roundedLeft,
  roundedRight,
  style,
  ...props
}) => {
  const styles = {}

  if (circle) styles.borderRadius = '9999px'
  else if (rounded !== undefined
  || roundedTop !== undefined
  || roundedTopLeft !== undefined
  || roundedTopRight !== undefined
  || roundedBottom !== undefined
  || roundedBottomLeft !== undefined
  || roundedBottomRight !== undefined
  || roundedLeft !== undefined
  || roundedRight !== undefined) {
    styles.borderRadius = parseBorderRadius({
      topLeft: getFirstValidValue(roundedTopLeft, roundedTop, roundedLeft, rounded),
      topRight: getFirstValidValue(roundedTopRight, roundedTop, roundedRight, rounded),
      bottomLeft: getFirstValidValue(roundedBottomLeft, roundedBottom, roundedLeft, rounded),
      bottomRight: getFirstValidValue(roundedBottomRight, roundedBottom, roundedRight, rounded)
    })
  }

  return { style: { ...styles, ...style }, ...props }
}
