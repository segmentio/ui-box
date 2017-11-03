/**
 * Utility to split props based on an array of keys
 */
export default function splitProps(props, keys) {
  const matchedProps = {}
  const restProps = {}

  for (let key in props) {
    if (props.hasOwnProperty(key)) {
      if (keys.indexOf(key)) {
        matchedProps[key] = props[key]
      } else {
        restProps[key] = props[key]
      }
    }
  }

  return { matchedProps, restProps }
}
