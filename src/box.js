import React from 'react'
import PropTypes from 'prop-types'
import {css as gcss} from 'glamor'
import cx from 'classnames'
import once from 'lodash.once'
import {propTypes} from './enhancers'
import enhanceProps from './enhance-props'

const cssWarning = once(() =>
  console.warn(
    'ui-box deprecation: the `css` prop will be removed in the next major version in favour of importing glamor directly and passing it՚s generated class to the `className` prop.'
  )
)

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
      if (process.env.NODE_ENV !== 'production') {
        cssWarning()
      }
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
