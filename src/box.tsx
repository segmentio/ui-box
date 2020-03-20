import React from 'react'
import PropTypes from 'prop-types'
import {BoxComponent} from './types/box-types'
import {propTypes} from './enhancers'
import enhanceProps from './enhance-props'
import {getURLInfo, getUseSafeHref} from './utils/safeHref'

const Box: BoxComponent = ({ is = 'div', innerRef, children, ...props }) => {
  // Convert the CSS props to class names (and inject the styles)
  const {className, enhancedProps: parsedProps} = enhanceProps(props)

  parsedProps.className = className

  if (innerRef) {
    parsedProps.ref = innerRef
  }

  if (getUseSafeHref() && is === 'a' && parsedProps.href) {
    const urlInfo = getURLInfo(parsedProps.href)
    parsedProps.href = urlInfo.url

    if (urlInfo.url) {
      parsedProps.rel = parsedProps.rel ? parsedProps.rel : ''

      if (!parsedProps.rel.includes('noopener')) {
        parsedProps.rel += `${parsedProps.rel.length > 0 ? ' ' : ''}noopener`
      }

      if (!parsedProps.rel.includes('noreferrer') && !urlInfo.sameOrigin) {
        parsedProps.rel += `${parsedProps.rel.length > 0 ? ' ' : ''}noreferrer`
      }
    }
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
