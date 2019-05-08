import {propNames} from '../enhancers/index'
import splitProps from './split-props'
import { EnhancerProps } from '../types/enhancers'

interface SplitBoxProps<P extends EnhancerProps> {
  matchedProps: Pick<P, keyof EnhancerProps>
  remainingProps: Pick<P, Exclude<keyof P, keyof EnhancerProps>>
}

/**
 * Convenience method to split the Box props.
 *
 * Useful for when you want to pass all of the Box props to the root Box and
 * pass the remaining props to a child element (e.g: disabled, readOnly, required, etc).
 */
export default function splitBoxProps<P extends EnhancerProps>(props: P): SplitBoxProps<P> {
  return splitProps(props, propNames as Array<keyof EnhancerProps>)
}
