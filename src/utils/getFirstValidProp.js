import { css } from 'glamor'

export default function getFirstValidProp (key, ...props) {
  const val = props.find(p => p !== undefined)
  if (val === undefined) return val
  return css({
    [key]: val
  }).toString()
}
