import React from 'react'
import { EnhancerProps } from './enhancers'

export { EnhancerProps }

export type PropsOf<
	E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>

/**
 * Generic component props with "is" prop
 * @template P Additional props
 * @template T React component or string element
 */
export type BoxOwnProps<E extends React.ElementType = React.ElementType> = EnhancerProps & {
  /**
   * Replaces the underlying element
   */
  is?: E

  /**
   * Allows the high level value of safeHref to be overwritten on an individual component basis
   */
  allowUnsafeHref?: boolean
}

export type BoxProps<E extends React.ElementType> = BoxOwnProps<E> & Omit<PropsOf<E>, keyof BoxOwnProps>
