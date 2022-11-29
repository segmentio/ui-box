import React from 'react'
import { EnhancerProps } from './enhancers'

/**
 * @template T Object
 * @template K Union of keys (not necessarily present in T)
 */
export type Without<T, K> = Pick<T, Exclude<keyof T, K>>

/**
 * @see {@link https://github.com/emotion-js/emotion/blob/b4214b8757c7ede1db1688075251946b2082f9d1/packages/styled-base/types/helper.d.ts#L6-L8}
 */
export type PropsOf<
  E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>

/**
 * Generic component props with "is" prop
 * @template P Additional props
 * @template T React component or string element
 */
export type BoxOwnProps<E extends React.ElementType = React.ElementType, P = {}> = Without<EnhancerProps, keyof P> & {
  /**
   * Replaces the underlying element
   */
  is?: E

  /**
   * Allows the high level value of safeHref to be overwritten on an individual component basis
   */
  allowUnsafeHref?: boolean
}

export type BoxProps<E extends React.ElementType> = BoxOwnProps<E> & Without<PropsOf<E>, keyof BoxOwnProps>

/**
 * Convenience type for defining your own component props that extend Box and pass-through props
 */
export type PolymorphicBoxProps<
  E extends React.ElementType,
  // optional additional props (which we get removed from BoxOwnProps and PropsOf)
  // this is useful for defining some pass-through props on a wrapper for Box
  P = {}
> = BoxOwnProps<E, P> & Without<PropsOf<E>, keyof (BoxOwnProps & P)> & P

/**
 * Convenience type for defining your own components that extend Box and pass-through props
 */
export type BoxComponent<P = {}, D extends React.ElementType = React.ElementType> = <E extends React.ElementType = D>(
  props: PolymorphicBoxProps<E, P>
) => JSX.Element
