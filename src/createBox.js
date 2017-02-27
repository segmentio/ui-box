import React, { PropTypes } from 'react'
import { css, media } from 'glamor'
import * as enhancers from './behavior'
import cx from 'classnames'

export default function createBox (config) {
  const enhancersArray = Object.keys(enhancers).map(key => enhancers[key](config))

  console.log(enhancersArray)

  const mediaRanges = config.mediaRanges || {
    lower: {
      compound: `(max-width: 620px)`,
      lower: `(max-width: 440px)`,
      upper: `(min-width: 440px) and (max-width: 620px)`
    },
    upper: {
      compound: `(min-width: 620px)`,
      lower: `(min-width: 620px) and (max-width: 980px)`,
      upper: `(min-width: 980px)`
    }
  }

  const responsiveCSSParser = (fn, values) => {
    if (values.length !== 2) {
      throw new Error(`Passing in responsive properties can only contain two values. Example: ['inline', 'display']`)
    }

    let className = ''

    if (Array.isArray(values[0])) {
      className = cx(className, `${css(media(mediaRanges.lower.lower, fn(values[0][0])))}`)
      className = cx(className, `${css(media(mediaRanges.lower.upper, fn(values[0][1])))}`)
    } else {
      className = cx(className, `${css(media(mediaRanges.lower.compound, fn(values[0])))}`)
    }

    if (Array.isArray(values[1])) {
      className = cx(className, `${css(media(mediaRanges.upper.lower, fn(values[1][0])))}`)
      className = cx(className, `${css(media(mediaRanges.upper.upper, fn(values[1][1])))}`)
    } else {
      className = cx(className, `${css(media(mediaRanges.upper.compound, fn(values[1])))}`)
    }

    return className
  }

  const propTypes = enhancersArray.reduce((memo, { propTypes }) => {
    if (propTypes) memo = { ...memo, ...propTypes }
  }, {
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
    ...props
  }) => {
    const { className, responsiveCSSParser, ...parsedProps } = parseProps(props)
    return React.createElement(is, { ...parsedProps, className: cx(className) })
  }

  Box.propTypes = propTypes

  Box.defaultProps = {
    is: 'div',
    responsiveCSSParser
  }

  Box.displayName = 'Box'

  return Box
}
