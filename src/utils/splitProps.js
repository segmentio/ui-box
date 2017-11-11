/**
 * Utility to split props based on an array of keys
 */
export default function splitProps(props, keys) {
  const matchedProps = {}
  const restProps = {}

  // eslint-disable-next-line
  for (let key in props) {
    // eslint-disable-next-line
    if (props.hasOwnProperty(key)) {
      if (keys.indexOf(key) > -1) {
        matchedProps[key] = props[key]
      } else {
        restProps[key] = props[key]
      }
    }
  }

  return { matchedProps, restProps }
}
