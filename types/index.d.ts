// TypeScript Version: 3.2

import { Component, ReactType, JSXElementConstructor } from 'react'
import { EnhancerProps } from './enhancers'
import { DomNodes } from './dom-nodes'

export { EnhancerProps }

interface Enhancer {
  propTypes: object
  // propAliases: object
  // propValidators: object
  // propEnhancers: object
}

export const background: Enhancer
export const borderRadius: Enhancer
export const borders: Enhancer
export const boxShadow: Enhancer
export const dimensions: Enhancer
export const flex: Enhancer
export const interaction: Enhancer
export const layout: Enhancer
export const list: Enhancer
export const opacity: Enhancer
export const overflow: Enhancer
export const position: Enhancer
export const spacing: Enhancer
export const text: Enhancer
export const transform: Enhancer
export const propTypes: object
export const propNames: string[]
// export const propAliases: object
// export const propEnhancers: object

// Custom ComponentPropsWithoutRef implementation that doesn't require extending `ReactType`,
// which allows `this.props` to be typed correctly inside classes
type ComponentProps<T> = T extends JSXElementConstructor<infer P>
  ? P
  : T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : {}
type PropsWithoutRef<P> = 'ref' extends keyof P
  ? Pick<P, Exclude<keyof P, 'ref'>>
  : P
type ComponentPropsWithoutRef<T> = PropsWithoutRef<ComponentProps<T>>

export type RefType<T> = T extends keyof DomNodes
  ? DomNodes[T] // Get the DOM node type
  : T extends typeof Component
  ? T['prototype'] // Convert component class type back to a class instance
  : never // Functional components can't have refs

export type BoxProps<T> = ComponentPropsWithoutRef<T> &
  EnhancerProps & {
    /**
     * Lets you change the underlying element type. You can pass either a
     * string to change the DOM element type, or a React component type to
     * inherit another component. The component just needs to accept a
     * `className` prop to work. A good example is inheriting the react-router
     * `Link` component.
     */
    is?: T

    /**
     * Callback that gets passed a ref to inner DOM node (or component if the
     * `is` prop is set to a React component type).
     */
    innerRef?(ref: RefType<T>): void
  }

export default class Box<T = 'div'> extends Component<BoxProps<T>> {
  static propTypes: object
  static defaultProps: object
}

export interface SplitProps<P, K extends keyof P> {
  matchedProps: Pick<P, K>
  remainingProps: Pick<P, Exclude<keyof P, K>>
}

/**
 * Utility function for filtering out props based on an array of keys.
 */
export function splitProps<P, K extends keyof P>(
  props: P,
  keys: K[]
): SplitProps<P, K>

export interface SplitBoxProps<P extends EnhancerProps> {
  matchedProps: Pick<P, keyof EnhancerProps>
  remainingProps: Pick<P, Exclude<keyof P, keyof EnhancerProps>>
}

/**
 * Utility function for filtering out `Box` props.
 */
export function splitBoxProps<P>(props: P): SplitBoxProps<P>

export type Cache = Array<[/** key */ string, /** value */ string]>

/**
 * Hydrates the cache using the `cache` value returned from `extractStyles()`.
 * This is used to prevent needing to recalculate all the class names and
 * re-render all the styles on page load when server rendering.
 */
export function hydrate(cache: Cache): void

export interface ExtractedStyles {
  cache: Cache
  styles: string
}

/**
 * Returns an object containing the cache entries and rendered styles for
 * server rendering. The styles can be output in a `<style>` tag or an external
 * stylesheet (however you want). The cache should be passed to `hydrate()` on
 * the client-side before mounting the app. Also useful for doing snapshot unit
 * testing (make sure to call `clearStyles()` after each test though).
 */
export function extractStyles(): ExtractedStyles

/**
 * Clears the cache and removes the rendered styles.
 * Mainly useful for resetting the global state when using `extractStyles()` in unit tests.
 */
export function clearStyles(): void
