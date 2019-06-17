import React from 'react'
import { EnhancerProps } from './enhancers'

/**
 * @template T Object
 * @template K Union of keys (not necessarily present in T)
 */
export type Without<T, K> = Pick<T, Exclude<keyof T, K>>

/**
 * "is" prop
 * @template P Props
 */
export type Is<P = any> = React.ElementType<P>

/**
 * Remove box props from object `T` if they're present
 * @template T Object
 */
type WithoutBoxProps<T> = Without<T, "is" | "innerRef">

/**
 * Grab components passed to the `is` prop and return their props
 * @template T Component type
 */
type InheritedProps<T extends Is> = WithoutBoxProps<React.ComponentProps<T>>

/**
 * Generic component props with "is" prop
 * @template P Additional props
 * @template T React component or string element
 */
export type BoxProps<T extends Is> = InheritedProps<T> &
    EnhancerProps & {
    /**
     * Replaces the underlying element
     */
    is?: T

    /**
     * Callback that gets passed a ref to inner DOM node (or component if the
     * `is` prop is set to a React component type).
     */
    innerRef?: React.Ref<T>
  }

export interface BoxComponent {
  <T extends Is>(props: BoxProps<T>): React.ReactElement | null
  propTypes?: React.FunctionComponent['propTypes']
  defaultProps?: React.FunctionComponent['defaultProps']
  displayName?: React.FunctionComponent['displayName']
}
