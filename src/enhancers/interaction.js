import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

export const propTypes = {
  cursor: PropTypes.string,
  userSelect: PropTypes.string,
  visibility: PropTypes.string,
  pointerEvents: PropTypes.string
}

export const propNames = Object.keys(propTypes)

export const parseProps = ({
  cursor,
  userSelect,
  visibility,
  pointerEvents
}) => {
  return cx(
    cursor !== undefined && insertSingleProperty('cursor', cursor),
    userSelect !== undefined && insertSingleProperty('userSelect', userSelect),
    visibility !== undefined && insertSingleProperty('visibility', visibility),
    pointerEvents !== undefined &&
      insertSingleProperty('pointerEvents', pointerEvents)
  )
}
