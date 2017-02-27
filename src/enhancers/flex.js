import React, { PropTypes } from 'react'
import { css } from 'glamor'
import cx from 'classnames'

export const propTypes = {
  flex: PropTypes.string,
  flexAuto: PropTypes.bool,
  flexNone: PropTypes.bool,
  flexColumn: PropTypes.bool,
  flexWrap: PropTypes.bool,
  alignItems: PropTypes.oneOf([
    'stretch',
    'center',
    'baseline',
    'flex-start',
    'flex-end'
  ]),
  justifyContent: PropTypes.oneOf([
    'center',
    'space-around',
    'space-between',
    'flex-start',
    'flex-end'
  ]),
  flexDirection: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse'
  ])
}

const getFlex = ({ flex, flexAuto, flexNone }) => {
  if (flexAuto) return { flex: 'auto' }
  if (flexNone) return { flex: 'none' }
  if (flex) return { flex: flex }
  return {}
}

const getFlexDirection = ({ flexColumn, flexDirection }) => {
  if (flexColumn) return { flexDirection: 'column' }
  if (flexDirection) return { flexDirection: flexDirection }
  return {}
}

const getFlexWrap = ({ flexWrap }) => {
  if (flexWrap) return { flexWrap: 'wrap' }
  return {}
}

export const parseProps = ({
  flex,
  flexAuto,
  flexNone,
  flexColumn,
  flexDirection,
  flexWrap,
  alignItems,
  justifyContent,
  className,
  ...props
}) => {
  if (flex !== undefined
  || flexAuto !== undefined
  || flexNone !== undefined
  || flexColumn !== undefined
  || flexDirection !== undefined
  || flexWrap !== undefined
  || alignItems !== undefined
  || justifyContent !== undefined) {
    return {
      className: cx(className, `${css({
        ...getFlex({ flex, flexAuto, flexNone }),
        ...getFlexDirection({ flexColumn, flexDirection }),
        ...getFlexWrap({ flexWrap }),
        ...(alignItems ? { alignItems: alignItems } : {}),
        ...(justifyContent ? { justifyContent: justifyContent } : {})
      })}`),
      ...props
    }
  }

  return { className, ...props }
}
