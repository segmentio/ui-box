// Type definitions for ui-box
// Project: ui-box
// Definitions by: Netto Farah <https://github.com/nettofarah>

import { Component, ComponentClass, ReactNode } from "react"
import * as CSS from "csstype"

/** Placeholder type for UI box props */
type UIBoxProp = string | number | boolean | null | undefined

/** A prop defining which */
type UIBoxIsProp = string | ReactNode

type CSSProps = CSS.StandardProperties

export interface BoxProps {
  /* Callback that gets passed a ref to inner DOM node (or component if the is prop is set to a React component type). */
  innerRef?: () => {}

  /** Lets you change the underlying element type. You can pass either a string to change the DOM element type, or a React component type to inherit another component. The component just needs to accept a className prop to work. A good example is inheriting the react-router Link component */
  is?: UIBoxIsProp

  /** The className prop you know and love. Internally it gets enhanced with additional class names for the CSS properties you specify. */
  className?: string

  boxSizing?: UIBoxProp
  marginX?: UIBoxProp
  marginY?: UIBoxProp
  paddingX?: UIBoxProp
  paddingY?: UIBoxProp

  /** Utility property for easily adding clearfix styles to the element. */
  clearfix?: boolean
}

export type Box = Component<BoxProps | CSSProps>
export const Box: ComponentClass<BoxProps | CSSProps>
export default Box

