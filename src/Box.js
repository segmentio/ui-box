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
  interaction,
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
  interaction,
]

const propTypes = {
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
    PropTypes.func,
  ]),
}

/**
 * This is optimized for performance.
 * It can be called many times
 */
const parseProps = props => {
  // eslint-disable-next-line
  outer: for (const propKey in props) {
    // Skip children
    // eslint-disable-next-line
    if (propKey === 'children') continue

    for (let j = 0; j < enhancersArray.length; j += 1) {
      if (typeof enhancersArray[j].propTypes[propKey] !== 'undefined') {
        // eslint-disable-next-line
        props = enhancersArray[j].parseProps(props)
        // eslint-disable-next-line
        continue outer
      }
    }
  }

  return props
}

class Box extends React.PureComponent {
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
            },
          }
        : {}),
    })
  }
}

Box.propTypes = propTypes

Box.defaultProps = {
  is: 'div',
}

Box.displayName = 'Box'

export default Box
