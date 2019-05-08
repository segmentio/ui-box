import {ReactNode} from 'react'
import { EnhancerProps } from './enhancers'

export type BoxProps = EnhancerProps & {
  /**
   * Lets you change the underlying element type. You can pass either a
   * string to change the DOM element type, or a React component type to
   * inherit another component. The component just needs to accept a
   * `className` prop to work. A good example is inheriting the react-router
   * `Link` component.
   */
  is?: keyof JSX.IntrinsicElements | React.ComponentClass<any, any> | React.FunctionComponent<any>

  /**
   * Callback that gets passed a ref to inner DOM node (or component if the
   * `is` prop is set to a React component type).
   */
  innerRef?(ref: ReactNode): void

  /** We need this for now to pass arbitrary props to the `is` Component until we can get a proper generic written */
  [key: string]: any
}
