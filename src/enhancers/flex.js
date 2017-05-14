import React, { PropTypes } from 'react'
import { css } from 'glamor'
import cx from 'classnames'

export const propTypes = {
  flex: PropTypes.string,
  alignItems: PropTypes.oneOf([
    'stretch',
    'center',
    'baseline',
    'flex-start',
    'flex-end'
  ]),
  alignSelf: PropTypes.oneOf([
    'stretch',
    'center',
    'baseline',
    'flex-start',
    'flex-end'
  ]),
  alignContent: PropTypes.oneOf([
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
  ]),
  flexWrap: PropTypes.oneOf([
    'nowrap',
    'wrap',
    'wrap-reverse'
  ]),
  flexGrow: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  flexShrink: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  flexBasis: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  order: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export const parseProps = ({
  flex,
  alignItems,
  alignSelf,
  alignContent,
  justifyContent,
  flexDirection,
  flexWrap,
  flexGrow,
  flexShrink,
  flexBasis,
  order,
  className,
  ...props
}) => ({
  ...props,
  className: cx(
    className,
    flex !== undefined && css({ flex }).toString(),
    alignItems !== undefined && css({ alignItems }).toString(),
    alignSelf !== undefined && css({ alignSelf }).toString(),
    alignContent !== undefined && css({ alignContent }).toString(),
    justifyContent !== undefined && css({ justifyContent }).toString(),
    flexDirection !== undefined && css({ flexDirection }).toString(),
    flexWrap !== undefined && css({ flexWrap }).toString(),
    flexGrow !== undefined && css({ flexGrow }).toString(),
    flexShrink !== undefined && css({ flexShrink }).toString(),
    flexBasis !== undefined && css({ flexBasis }).toString(),
    order !== undefined && css({ order }).toString()
  )
})
