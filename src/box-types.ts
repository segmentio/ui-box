import {ReactNode, Component} from 'react'
import * as CSS from 'csstype'

type UIBoxProp = string | number | boolean | null | undefined
export type CSSProps = CSS.StandardProperties<number | string>

interface BoxPropsBase extends CSSProps {
  is?: string | React.ComponentClass | React.FunctionComponent

  className?: string

  marginX?: UIBoxProp

  marginY?: UIBoxProp

  paddingX?: UIBoxProp

  paddingY?: UIBoxProp

  clearfix?: boolean

  key?: string
  /**
   * Callback that gets passed a ref to inner DOM node (or component if the is prop is set to a
   * React component type).
   */
  innerRef?(node: ReactNode): any
  [key: string]: any
}

export type BoxProps = BoxPropsBase & {
  boxSizing?: CSS.BoxSizingProperty | UIBoxProp;
}

export type Box = Component<BoxProps>
