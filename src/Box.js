import React, { PropTypes } from 'react'
import { css as gcss } from 'glamor'
import cx from 'classnames'
import * as enhancers from './enhancers'

const enhancersArray = Object.keys(enhancers).map(key => enhancers[key])

const propTypes = enhancersArray.reduce((memo, { propTypes }) => {
  if (propTypes) memo = { ...memo, ...propTypes }
}, {
  css: PropTypes.object,
  onRef: PropTypes.func,
  is: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ])
})

const parseProps = (props) => {
  return enhancersArray.reduce((props, { parseProps }) => {
    if (parseProps) props = parseProps(props)
    return props
  }, props)
}

const Box = ({
  is,
  css,
  onRef,
  ...props
}) => {
  const { className, ...parsedProps } = parseProps(props)
  let generatedClassName
  if (css) generatedClassName = gcss(css)

  return React.createElement(is, {
    ...parsedProps,
    className: cx(generatedClassName, className),
    ...(onRef ? {
      ref: (node) => { onRef(node) }
    } : {})
}

Box.propTypes = propTypes

Box.defaultProps = {
  is: 'div'
}

Box.displayName = 'Box'

export default Box
