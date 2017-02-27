import React, { PropTypes } from 'react'

const SpacingPropType = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.string
])

const NegativeIncludedSpacingPropType = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.string
])

export const propTypes = {
  padding: SpacingPropType,
  paddingTop: SpacingPropType,
  paddingRight: SpacingPropType,
  paddingBottom: SpacingPropType,
  paddingLeft: SpacingPropType,
  paddingX: SpacingPropType,
  paddingY: SpacingPropType,
  margin: NegativeIncludedSpacingPropType,
  marginTop: NegativeIncludedSpacingPropType,
  marginRight: NegativeIncludedSpacingPropType,
  marginBottom: NegativeIncludedSpacingPropType,
  marginLeft: NegativeIncludedSpacingPropType,
  marginX: NegativeIncludedSpacingPropType,
  marginY: NegativeIncludedSpacingPropType
}

const parseUnit = (unit) => {
  return unit
}

const parseStyleProps = ({ all, top, right, bottom, left }) => {
  const pAll = parseUnit(all) || 0
  return `${parseUnit(top) || pAll} ${parseUnit(right) || pAll} ${parseUnit(bottom) || pAll} ${parseUnit(left) || pAll}`
}

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
  marginY,
  style,
  ...props
}) => {
  const styles = {}

  if (padding !== undefined
  || paddingTop !== undefined
  || paddingRight !== undefined
  || paddingBottom !== undefined
  || paddingLeft !== undefined
  || paddingX !== undefined
  || paddingY !== undefined) {
    styles.padding = parseStyleProps({
      all: padding,
      top: paddingTop !== undefined ? paddingTop : paddingY,
      right: paddingRight !== undefined ? paddingRight : paddingX,
      bottom: paddingBottom !== undefined ? paddingBottom : paddingY,
      left: paddingLeft !== undefined ? paddingLeft : paddingX
    })
  }

  if (margin !== undefined
  || marginTop !== undefined
  || marginRight !== undefined
  || marginBottom !== undefined
  || marginLeft !== undefined
  || marginX !== undefined
  || marginY !== undefined) {
    styles.margin = parseStyleProps({
      all: margin,
      top: marginTop !== undefined ? marginTop : marginY,
      right: marginRight !== undefined ? marginRight : marginX,
      bottom: marginBottom !== undefined ? marginBottom : marginY,
      left: marginLeft !== undefined ? marginLeft : marginX
    })
  }

  return { style: { ...styles, ...style }, ...props }
}
