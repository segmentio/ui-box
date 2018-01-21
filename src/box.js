import React from 'react'
import PropTypes from 'prop-types'
import { css as gcss } from 'glamor'
import cx from 'classnames'
import { allEnhancers, propTypes } from './enhancers'

/**
 * This is optimized for performance.
 * It can be called many times
 */
const parseProps = props => {
  const { className } = props
  const finalProps = {}
  const propNames = Object.keys(props)
  let parsedProps = ['children'] // Skip children
  let finalClassName = className || ''

  for (let i = 0; i < propNames.length; i++) {
    const propName = propNames[i]
    let newClassName

    if (parsedProps.includes(propName)) continue

    for (let i = 0; i < allEnhancers.length; i += 1) {
      const enhancer = allEnhancers[i]

      if (enhancer.propTypes[propName]) {
        newClassName = enhancer.parseProps(props)
        finalClassName = cx(finalClassName, newClassName)

        // Assume all the enhancers parse unique props
        parsedProps = parsedProps.concat(enhancer.propNames)
        break
      }
    }

    // Only pass through props that weren't parsed
    if (!newClassName) {
      finalProps[propName] = props[propName]
    }
  }

  return [finalClassName, finalProps]
}

export default class Box extends React.PureComponent {
  static displayName = 'Box'
  static propTypes = {
    ...propTypes,
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
    const [className, parsedProps] = parseProps(props)
    const finalProps = parsedProps

    if (css) {
      finalProps.className = cx(className, gcss(css).toString())
    } else {
      finalProps.className = className
    }

    if (innerRef) {
      finalProps.ref = node => {
        innerRef(node)
      }
    }

    return React.createElement(is, finalProps, children)
  }
}
