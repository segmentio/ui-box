/**
 * Utility to split props based on an array of keys
 */
export default function splitProps(props, keys) {
  const matchedProps = {}
  const restProps = {}

  for (const key of Object.keys(props)) {
    if (keys.indexOf(key) > -1) {
      matchedProps[key] = props[key]
    } else {
      restProps[key] = props[key]
    }
  }

  return { matchedProps, restProps }
}
