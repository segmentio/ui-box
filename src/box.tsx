import React from 'react'
import PropTypes from 'prop-types'
import {BoxComponent} from './types/box-types'
import {propTypes} from './enhancers'
import enhanceProps from './enhance-props'
import {extractAnchorProps, getUseSafeHref} from './utils/safeHref'

const Box: BoxComponent = ({ is = 'div', innerRef, children, allowUnsafeHref, ...props }) => {
  // Convert the CSS props to class names (and inject the styles)
  const {className, enhancedProps: parsedProps} = enhanceProps(props)

  parsedProps.className = className

  if (innerRef) {
    parsedProps.ref = innerRef
  }

  /**
   * If the user has enabled safe hrefs we want to make sure that the url passed
   * uses a safe protocol and that the other attributes that make the link safe are
   * added to the element
   */
  const safeHrefEnabled = (typeof allowUnsafeHref === 'boolean' ? !allowUnsafeHref : getUseSafeHref()) && is === 'a' && parsedProps.href
  if (safeHrefEnabled) {
    const {safeHref, safeRel} = extractAnchorProps(parsedProps.href, parsedProps.rel)
    parsedProps.href = safeHref
    parsedProps.rel = safeRel
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
