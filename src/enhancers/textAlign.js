import PropTypes from 'prop-types'
import objectValues from 'object-values'

const TextAlign = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center'
}

export const propTypes = {
  textAlign: PropTypes.oneOf(objectValues(TextAlign))
}

export const parseProps = ({
  textAlign,
  style,
  ...props
}) => {
  const styles = {}

  styles.textAlign = textAlign

  return { style: { ...styles, ...style }, ...props }
}
