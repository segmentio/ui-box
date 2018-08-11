import React from 'react'
import PropTypes from 'prop-types'
import {css as gcss} from 'glamor'
import {propTypes} from './enhancers'
import enhanceProps from './enhance-props'

let cssWarned = false

export default class Box extends React.Component {
  static displayName = 'Box'

  static propTypes = {
    ...propTypes,
    css: PropTypes.object,
    innerRef: PropTypes.func,
    is: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    boxSizing: propTypes.boxSizing
  }

  static defaultProps = {
    css: null,
    innerRef: null,
    is: 'div',
    boxSizing: 'border-box'
  }

  render() {
    const {is, css, innerRef, children, ...props} = this.props
    // Convert the CSS props to class names (and inject the styles)
    const [className, parsedProps] = enhanceProps(props)

    // Add glamor class
    if (css) {
      // Warn that it's deprecated in the development
      if (process.env.NODE_ENV !== 'production') {
        // Don't spam the warning
        if (!cssWarned) {
          cssWarned = true
          console.warn(
            `📦 ui-box deprecation: the “css” prop will be removed in the next major version in favour of importing glamor directly and passing it՚s generated class to the “className” prop.`
          )
        }
      }
      parsedProps.className = `${className} ${gcss(css).toString()}`
    } else {
      parsedProps.className = className
    }

    if (innerRef) {
      parsedProps.ref = node => {
        innerRef(node)
      }
    }

    return React.createElement(is, parsedProps, children)
  }
}
