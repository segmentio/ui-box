import React from 'react'
import PropTypes from 'prop-types'
import { css as gcss } from 'glamor'
import cx from 'classnames'
import StyleSheet from './css/style-sheet'
import cache from './cache'
import { propEnhancers, propTypes } from './enhancers'
import expandAliases from './css/expand-aliases'

// Create and inject the stylesheet
export const styleSheet = new StyleSheet()
styleSheet.inject()

// This is optimized for performance. It gets called a lot of times
const parseProps = rawProps => {
  const propsMap = expandAliases(rawProps)
  const parsedProps = {}
  let className = rawProps.className || ''

  for (const [propName, propValue] of propsMap) {
    const cachedClassName = cache.get(propName, propValue)
    if (cachedClassName) {
      className = cx(className, cachedClassName)
      continue
    }

    const enhancer = propEnhancers[propName]
    // Skip false boolean enhancers. e.g: clearfix={false}
    if (enhancer && !propValue) {
      continue
    } else if (!enhancer) {
      // Native prop. e.g: disabled, value, type
      parsedProps[propName] = propValue
      continue
    }

    const newCss = enhancer(propValue)
    // Glamor props (clearfix) don't have css
    if (newCss.css) {
      styleSheet.insert(newCss.css)
    }
    cache.set(propName, propValue, newCss.className)
    className = cx(className, newCss.className)
  }

  return [className, parsedProps]
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
    is: 'div',
    boxSizing: 'border-box' // eslint-disable-line react/default-props-match-prop-types
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
