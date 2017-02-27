import React, { PropTypes } from 'react'
import { css } from 'glamor'
import cx from 'classnames'
import * as enhancers from './enhancers'

const enhancersArray = Object.keys(enhancers).map(key => enhancers[key])

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

const n = 'ui-lib-box'

// Add these styles globally until glamor properly supports &:matches
//
css.global('.ui-lib-box', {
  fontSize: '100%',
  font: 'inherit',
  verticalAlign: 'baseline'
})

css.global(`article.${n}, aside.${n}, details.${n}, figcaption.${n}, figure.${n}, footer.${n}, header.${n}, hgroup.${n}, menu.${n}, nav.${n}, section.${n}`, {
  display: 'block'
})

css.global(`ol.${n}, ul.${n}`, {
  listStyle: 'none'
})

css.global(`bloquote.${n}, q.${n}`, {
  quotes: 'none'
})

css.global(`table.${n}`, {
  borderCollapse: 'collapse',
  borderSpacing: '0'
})

css.global(`input.${n}, textarea.${n}`, {
  border: 'none',
  outline: 'none'
})

css.global(`strong.${n}`, {
  fontWeight: '500'
})

css.global(`em.${n}`, {
  fontStyle: 'italic'
})

css.global(`*.${n}, *.${n}:before, *.${n}:after`, {
  boxSizing: 'border-box'
})

const cssBaseStyles = css({
  margin: '0',
  padding: '0',
  border: '0',
  fontSize: '100%',
  lineHeight: '1',
  verticalAlign: 'baseline',
  MozOsxFontSmoothing: 'grayscale',
  WebkitFontSmoothing: 'antialiased',
  fontSmoothing: 'antialiased'
  // fontFamily: theme.fonts.sans,
  // fontSize: theme.textStyles.body1.fontSize,
  // fontWeight: theme.textStyles.body1.fontWeight,
  // letterSpacing: theme.textStyles.body1.letterSpacing
})

const Box = ({
  is,
  theme, // filter out for now
  ...props
}) => {
  const { className, ...parsedProps } = parseProps(props)
  return React.createElement(is, { ...parsedProps, className: cx(n, `${cssBaseStyles}`, className) })
}

Box.propTypes = propTypes

Box.defaultProps = {
  is: 'div'
}

Box.displayName = 'Box'

export default Box
