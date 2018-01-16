import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

export const propTypes = {
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alignItems: PropTypes.string,
  alignSelf: PropTypes.string,
  alignContent: PropTypes.string,
  justifyContent: PropTypes.string,
  justifySelf: PropTypes.string,
  flexDirection: PropTypes.string,
  flexWrap: PropTypes.string,
  flexGrow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexShrink: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexBasis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  order: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const keysPropTypes = Object.keys(propTypes)

export const parseProps = ({
  flex,
  alignItems,
  alignSelf,
  alignContent,
  justifyContent,
  justifySelf,
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
    flex !== undefined && insertSingleProperty('flex', flex),
    alignItems !== undefined && insertSingleProperty('alignItems', alignItems),
    alignSelf !== undefined && insertSingleProperty('alignSelf', alignSelf),
    alignContent !== undefined &&
      insertSingleProperty('alignContent', alignContent),
    justifyContent !== undefined &&
      insertSingleProperty('justifyContent', justifyContent),
    justifySelf !== undefined &&
      insertSingleProperty('justifySelf', justifySelf),
    flexDirection !== undefined &&
      insertSingleProperty('flexDirection', flexDirection),
    flexWrap !== undefined && insertSingleProperty('flexWrap', flexWrap),
    flexGrow !== undefined && insertSingleProperty('flexGrow', flexGrow),
    flexShrink !== undefined && insertSingleProperty('flexShrink', flexShrink),
    flexBasis !== undefined && insertSingleProperty('flexBasis', flexBasis),
    order !== undefined && insertSingleProperty('order', order)
  )
})
