import React from 'react'
import { EnhancerProps } from './enhancers'

/**
 * @template T Object
 * @template K Union of T keys
 */
export type Without<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

/**
 * "is" prop
 * @template P Props
 */
export type Is<P = any> = React.ElementType<P>

/**
 * Generic component props with "is" prop
 * @template P Additional props
 * @template T React component or string element
 */
export type BoxProps<T extends Is> = &
  Without<React.ComponentProps<T>, "is"> &
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

export interface BoxComponent<T extends Is> {
  // This is the desired type (inspired by reakit)
  // <TT extends Is = T>(props: BoxProps<TT>): JSX.Element
  // Unfortunately, TypeScript doesn't like it. It works for string elements
  // and functional components without generics, but it breaks on generics.
  // The following two types are a workaround.
  <TT extends Is>(props: BoxProps<TT> & { is?: TT }): React.ReactElement | null
  (props: BoxProps<T>): React.ReactElement | null
}
