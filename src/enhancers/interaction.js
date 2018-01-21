import PropTypes from 'prop-types'
import cx from 'classnames'
import { insertSingleProperty } from '../css'

export const propTypes = {
  cursor: PropTypes.string,
  pointerEvents: PropTypes.string,
  userSelect: PropTypes.string,
  visibility: PropTypes.string
}

export const propNames = Object.keys(propTypes)

export const parseProps = ({
  cursor,
  pointerEvents,
  userSelect,
  visibility
}) => {
  return cx(
    cursor !== undefined && insertSingleProperty('cursor', cursor),
    pointerEvents !== undefined &&
      insertSingleProperty('pointerEvents', pointerEvents),
    userSelect !== undefined && insertSingleProperty('userSelect', userSelect),
    visibility !== undefined && insertSingleProperty('visibility', visibility)
  )
}
