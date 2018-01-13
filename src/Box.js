import React from 'react'
import PropTypes from 'prop-types'
import { css as gcss } from 'glamor'
import cx from 'classnames'
import {
  background,
  borderRadius,
  borders,
  boxShadow,
  dimensions,
  layout,
  opacity,
  flex,
  overflow,
  position,
  spacing,
  text,
  transform,
  interaction
} from './enhancers'

const enhancersArray = [
  background,
  borderRadius,
  borders,
  boxShadow,
  dimensions,
  layout,
  opacity,
  flex,
  overflow,
  position,
  spacing,
  text,
  transform,
  interaction
]

/**
 * This is optimized for performance.
 * It can be called many times
 */
const parseProps = props => {
  let finalProps = props
  const propKeys = Object.keys(props)

  for (let i = 0; i < propKeys.length; i++) {
    const propKey = propKeys[i]
    // Skip children
    if (propKey === 'children') continue

    for (let i = 0; i < enhancersArray.length; i += 1) {
      const enhancer = enhancersArray[i]
      if (enhancer.propTypes[propKey]) {
        finalProps = enhancer.parseProps(finalProps)
        continue
      }
    }
  }

  return finalProps
}

export default class Box extends React.PureComponent {
  static displayName = 'Box'
  static propTypes = {
    ...background.propTypes,
    ...borderRadius.propTypes,
    ...borders.propTypes,
    ...boxShadow.propTypes,
    ...dimensions.propTypes,
    ...layout.propTypes,
    ...opacity.propTypes,
    ...flex.propTypes,
    ...overflow.propTypes,
    ...position.propTypes,
    ...spacing.propTypes,
    ...text.propTypes,
    ...transform.propTypes,
    ...interaction.propTypes,
    css: PropTypes.object,
    innerRef: PropTypes.func,
    is: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func
    ])
  }
  static defaultProps = {
    css: null,
    innerRef: null,
    is: 'div'
  }

  render() {
    const { is, css, innerRef, ...props } = this.props
    const { className, ...parsedProps } = parseProps(props)
    let generatedClassName
    if (css) generatedClassName = gcss(css).toString()

    return React.createElement(is, {
      ...parsedProps,
      className: cx(generatedClassName, className),
      ...(innerRef
        ? {
            ref: node => {
              innerRef(node)
            }
          }
        : {})
    })
  }
}
