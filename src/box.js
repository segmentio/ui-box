import React from 'react'
import PropTypes from 'prop-types'
import {css as gcss} from 'glamor'
import cx from 'classnames'
import {propTypes} from './enhancers'
import enhanceProps from './enhance-props'
import {flush} from './styles'

export default class Box extends React.PureComponent {
  static displayName = 'Box'

  static propTypes = {
    ...propTypes,
    css: PropTypes.object,
    innerRef: PropTypes.func,
    is: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    boxSizing: propTypes.boxSizing,
  }

  static defaultProps = {
    css: null,
    innerRef: null,
    is: 'div',
    boxSizing: 'border-box',
  }

  render() {
    const {is, css, innerRef, children, ...props} = this.props
    const [className, parsedProps] = enhanceProps(props)
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

  componentDidMount() {
    flush()
  }

  componentDidUpdate() {
    flush()
  }
}
