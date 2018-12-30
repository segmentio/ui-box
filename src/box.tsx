import * as React from 'react'
import {BoxProps} from './box-types'
import {css as gcss} from 'glamor'
import enhanceProps from './enhance-props'

let cssWarned = false
class Box extends React.Component<BoxProps, {}> {
  static defaultProps = {
    css: null,
    innerRef: null,
    is: 'div',
    boxSizing: 'border-box'
  }

  render() {
    const {is = 'div', css, innerRef, children, ...props} = this.props
    // Convert the CSS props to class names (and inject the styles)
    const {className, enhancedProps: parsedProps} = enhanceProps(props)

    // Add glamor class
    if (css) {
      // Warn that it's deprecated in the development
      if (process.env.NODE_ENV !== 'production' && !cssWarned) {
        // Don't spam the warning
        cssWarned = true
        console.warn(
          `📦 ui-box deprecation: the “css” prop will be removed in the next major version in favour of importing glamor directly and passing it՚s generated class to the “className” prop.`
        )
      }
      parsedProps.className = `${className} ${gcss(css).toString()}`
    } else {
      parsedProps.className = className
    }

    if (innerRef) {
      parsedProps.ref = (node: React.ReactNode) => {
        innerRef(node)
      }
    }

    return React.createElement(is, parsedProps, children)
  }
}

export default Box
