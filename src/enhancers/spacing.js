import PropTypes from 'prop-types'

export const propTypes = {
  padding: PropTypes.number,
  paddingTop: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingX: PropTypes.number,
  paddingY: PropTypes.number,
  margin: PropTypes.number,
  marginTop: PropTypes.number,
  marginRight: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginX: PropTypes.number,
  marginY: PropTypes.number
}

const parseStyleProps = ({ all, top, right, bottom, left }) => {
  const pAll = all || 0
  return `${top || pAll} ${right || pAll} ${bottom || pAll} ${left || pAll}`
}

export const parseProps = ({
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY,
  style,
  ...props
}) => ({
  const styles = {}

  if (padding !== undefined ||
  paddingTop !== undefined ||
  paddingRight !== undefined ||
  paddingBottom !== undefined ||
  paddingLeft !== undefined ||
  paddingX !== undefined ||
  paddingY !== undefined) {
    styles.padding = parseStyleProps({
      all: padding,
      top: paddingTop !== undefined ? paddingTop : paddingY,
      right: paddingRight !== undefined ? paddingRight : paddingX,
      bottom: paddingBottom !== undefined ? paddingBottom : paddingY,
      left: paddingLeft !== undefined ? paddingLeft : paddingX
    })
  }

  if (margin !== undefined ||
  marginTop !== undefined ||
  marginRight !== undefined ||
  marginBottom !== undefined ||
  marginLeft !== undefined ||
  marginX !== undefined ||
  marginY !== undefined) {
    styles.margin = parseStyleProps({
      all: margin,
      top: marginTop !== undefined ? marginTop : marginY,
      right: marginRight !== undefined ? marginRight : marginX,
      bottom: marginBottom !== undefined ? marginBottom : marginY,
      left: marginLeft !== undefined ? marginLeft : marginX
    })
  }

  return { style: { ...styles, ...style }, ...props }
})
