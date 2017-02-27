import React, { PropTypes } from 'react'
import { css } from 'glamor'
import cx from 'classnames'

const dimensionPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.string)
])

const propTypes = {
  width: dimensionPropType,
  height: dimensionPropType,
  minWidth: dimensionPropType,
  minHeight: dimensionPropType,
  maxWidth: dimensionPropType,
  maxHeight: dimensionPropType
}

const createCSSProp = (key, prop, parser) => {
  if (Array.isArray(prop)) {
    return parser(value => ({ [key]: value }), prop)
  } else {
    return `${css({ [key]: prop })}`
  }
}

const parseProps = ({
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  className,
  ...props
}) => {
  const classNames = []

  if (width) classNames.push(createCSSProp('width', width, props.responsiveCSSParser))
  if (height) classNames.push(createCSSProp('height', height, props.responsiveCSSParser))

  if (minHeight) classNames.push(createCSSProp('minHeight', minHeight, props.responsiveCSSParser))
  if (minWidth) classNames.push(createCSSProp('minWidth', minWidth, props.responsiveCSSParser))

  if (maxWidth) classNames.push(createCSSProp('maxWidth', maxWidth, props.responsiveCSSParser))
  if (maxHeight) classNames.push(createCSSProp('maxHeight', maxHeight, props.responsiveCSSParser))

  return { ...props, className: cx(className, classNames) }
}

export default function dimensions () {
  return {
    propTypes,
    parseProps
  }
}
