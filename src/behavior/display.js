import React, { PropTypes } from 'react'
import { css } from 'glamor'
import cx from 'classnames'

const displayPropType = PropTypes.oneOf([
  'block',
  'inline-block',
  'inline',
  'table',
  'table-row',
  'table-cell',
  'flex',
  'inline-flex'
])

const propTypes = {
  display: PropTypes.oneOfType([
    displayPropType,
    PropTypes.arrayOf(displayPropType)
  ])
}

const parseProps = ({
  display,
  responsiveCSSParser,
  className,
  ...props
}) => {
  let c
  if (Array.isArray(display)) {
    c = responsiveCSSParser(value => ({ 'display': value }), display)
  } else {
    c = `${css({ 'display': display })}`
  }

  return { ...props, className: cx(className, c), responsiveCSSParser }
}

export default function display () {
  return {
    propTypes,
    parseProps
  }
}
