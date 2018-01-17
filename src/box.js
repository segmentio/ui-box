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
  const { className } = props
  const finalProps = {}
  const propKeys = Object.keys(props)
  let parsedProps = ['children'] // Skip children
  let finalClassName = className || ''

  for (let i = 0; i < propKeys.length; i++) {
    const propKey = propKeys[i]
    let newClassName

    if (parsedProps.includes(propKey)) continue

    for (let i = 0; i < enhancersArray.length; i += 1) {
      const enhancer = enhancersArray[i]

      if (enhancer.propTypes[propKey]) {
        newClassName = enhancer.parseProps(props)
        finalClassName = `${finalClassName} ${newClassName}`

        // Assume all the enhancers parse unique props
        parsedProps = parsedProps.concat(enhancer.keysPropTypes)
        break
      }
    }

    // Only pass through props that weren't parsed
    if (!newClassName) {
      finalProps[propKey] = props[propKey]
    }
  }

  finalProps.className = finalClassName

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
    const { is, css, innerRef, children, ...props } = this.props
    const { className, ...parsedProps } = parseProps(props)
    let generatedClassName
    if (css) generatedClassName = gcss(css).toString()

    return React.createElement(
      is,
      {
        ...parsedProps,
        className: cx(generatedClassName, className),
        ...(innerRef
          ? {
              ref: node => {
                innerRef(node)
              }
            }
          : {})
      },
      children
    )
  }
}
