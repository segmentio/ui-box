import React from 'react'
import PropTypes from 'prop-types'
import {BoxProps} from './box-types'
import {propTypes} from './enhancers'
import enhanceProps from './enhance-props'

export default class Box extends React.Component<BoxProps, {}> {
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
    const {is = 'div', css, innerRef, children, ...props} = this.props
    // Convert the CSS props to class names (and inject the styles)
    const {className, enhancedProps: parsedProps} = enhanceProps(props)

    parsedProps.className = className

    if (innerRef) {
      parsedProps.ref = (node: React.ReactNode) => {
        innerRef(node)
      }
    }

    return React.createElement(is, parsedProps, children)
  }
}
