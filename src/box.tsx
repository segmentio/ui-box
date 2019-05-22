import React from 'react'
import PropTypes from 'prop-types'
import {Is, BoxProps, BoxComponent} from './types/box-types'
import {propTypes} from './enhancers'
import enhanceProps from './enhance-props'

type Options<T extends Is> = {
  is: T
}

function createComponent<T extends Is>({ is: defaultIs }: Options<T>) {
  const Component: BoxComponent<T> = ({ is = defaultIs, innerRef, children, ...props }: BoxProps<T>) => {
    // Convert the CSS props to class names (and inject the styles)
    const {className, enhancedProps: parsedProps} = enhanceProps(props)

    parsedProps.className = className

    if (innerRef) {
      parsedProps.ref = innerRef
    }

    return React.createElement(is, parsedProps, children)
  }

  ;(Component as any).displayName = 'Box'

  ;(Component as any).propTypes = {
    ...propTypes,
    innerRef: PropTypes.func,
    is: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  }

  ;(Component as any).defaultProps = {
    innerRef: null,
    is: 'div',
    boxSizing: 'border-box'
  }

  return Component
}

const Box = createComponent({ is: 'div' })

export default Box
