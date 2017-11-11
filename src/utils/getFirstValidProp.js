import { insertSingleProperty } from '../css'

export default function getFirstValidProp(property, ...props) {
  const val = props.find(p => p !== undefined)
  if (val === undefined) return
  // eslint-disable-next-line
  return insertSingleProperty(property, val)
}
