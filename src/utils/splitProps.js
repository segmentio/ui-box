export default function splitProps (props, regExp) {
  const matchedProps = {}
  const unmatchedProps = {}

  for (let key in props) {
    if (props.hasOwnProperty(key)) {
      if (key.match(regExp)) {
        matchedProps[key] = props[key]
      } else {
        unmatchedProps[key] = props[key]
      }
    }
  }

  return { matchedProps, unmatchedProps }
}
