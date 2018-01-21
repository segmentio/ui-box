import { propNames } from '../enhancers'
import splitProps from './split-props'

/**
 * Convience method to split wrapper props
 */
export default function splitWrapperProps(props) {
  return splitProps(props, propNames)
}
