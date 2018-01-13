import { insertSingleProperty } from '../css'

export default function getFirstValidProp(property, ...properties) {
  const val = properties.find(p => p !== undefined)
  if (val === undefined) return
  return insertSingleProperty(property, val)
}
