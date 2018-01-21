import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

export const propTypes = {
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
  alignSelf: PropTypes.string,
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexBasis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexDirection: PropTypes.string,
  flexGrow: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexShrink: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexWrap: PropTypes.string,
  justifyContent: PropTypes.string,
  justifySelf: PropTypes.string,
  order: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export const propNames = Object.keys(propTypes)

export const parseProps = ({
  alignContent,
  alignItems,
  alignSelf,
  flex,
  flexBasis,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  justifyContent,
  justifySelf,
  order
}) => {
  return cx(
    alignContent !== undefined &&
      insertSingleProperty('alignContent', alignContent),
    alignItems !== undefined && insertSingleProperty('alignItems', alignItems),
    alignSelf !== undefined && insertSingleProperty('alignSelf', alignSelf),
    flex !== undefined && insertSingleProperty('flex', flex),
    flexBasis !== undefined && insertSingleProperty('flexBasis', flexBasis),
    flexDirection !== undefined &&
      insertSingleProperty('flexDirection', flexDirection),
    flexGrow !== undefined && insertSingleProperty('flexGrow', flexGrow),
    flexShrink !== undefined && insertSingleProperty('flexShrink', flexShrink),
    flexWrap !== undefined && insertSingleProperty('flexWrap', flexWrap),
    justifyContent !== undefined &&
      insertSingleProperty('justifyContent', justifyContent),
    justifySelf !== undefined &&
      insertSingleProperty('justifySelf', justifySelf),
    order !== undefined && insertSingleProperty('order', order)
  )
}
