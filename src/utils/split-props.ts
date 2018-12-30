/* tslint:disable */
import {PropTypesMapping} from '../enhancers/types'

/**
 * Utility to split props based on an array of keys
 */
export default function splitProps(props: PropTypesMapping, keys: any) {
  const matchedProps: any = {}
  const remainingProps: any = {}
  const propKeys = Object.keys(props)

  for (let i = 0; i < propKeys.length; i++) {
    const propKey = propKeys[i]
    const propValue = props[propKey]

    if (keys.includes(propKey)) {
      matchedProps[propKey] = propValue
    } else {
      remainingProps[propKey] = propValue
    }
  }

  return { matchedProps, remainingProps }
}
