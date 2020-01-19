import React from 'react'
import PropTypes from 'prop-types'
import {BoxComponent} from './types/box-types'
import {propTypes} from './enhancers'
import enhanceProps from './enhance-props'

const Box: BoxComponent = ({ is = 'div', innerRef, children, ...props }) => {
  // Convert the CSS props to class names (and inject the styles)
  const {className, enhancedProps: parsedProps} = enhanceProps(props)

  parsedProps.className = className

  if (innerRef) {
    parsedProps.ref = innerRef
  }

  return React.createElement(is, parsedProps, children)
}

Box.displayName = 'Box'

Box.propTypes = {
  ...propTypes,
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.element })
  ]),
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.elementType])
}

Box.defaultProps = {
  innerRef: null,
  is: 'div',
  boxSizing: 'border-box'
}

export default Box
