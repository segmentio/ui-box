import PropTypes from 'prop-types'
import * as CSS from 'csstype'
import { Rule } from '../prefixer'

export type CssProps = Pick<
  CSS.StandardProperties,
  | 'alignContent'
  | 'alignItems'
  | 'alignSelf'
  | 'animation'
  | 'animationDelay'
  | 'animationDirection'
  | 'animationDuration'
  | 'animationFillMode'
  | 'animationIterationCount'
  | 'animationName'
  | 'animationPlayState'
  | 'animationTimingFunction'
  | 'background'
  | 'backgroundBlendMode'
  | 'backgroundClip'
  | 'backgroundColor'
  | 'backgroundImage'
  | 'backgroundOrigin'
  | 'backgroundPosition'
  | 'backgroundRepeat'
  | 'backgroundSize'
  | 'border'
  | 'borderBottom'
  | 'borderBottomColor'
  | 'borderBottomLeftRadius'
  | 'borderBottomRightRadius'
  | 'borderBottomStyle'
  | 'borderBottomWidth'
  | 'borderColor'
  | 'borderLeft'
  | 'borderLeftColor'
  | 'borderLeftStyle'
  | 'borderLeftWidth'
  | 'borderRadius'
  | 'borderRight'
  | 'borderRightColor'
  | 'borderRightStyle'
  | 'borderRightWidth'
  | 'borderStyle'
  | 'borderTop'
  | 'borderTopColor'
  | 'borderTopLeftRadius'
  | 'borderTopRightRadius'
  | 'borderTopStyle'
  | 'borderTopWidth'
  | 'borderWidth'
  | 'bottom'
  | 'boxShadow'
  | 'boxSizing'
  | 'clear'
  | 'color'
  | 'columnGap'
  | 'content'
  | 'cursor'
  | 'display'
  | 'flex'
  | 'flexBasis'
  | 'flexDirection'
  | 'flexFlow'
  | 'flexGrow'
  | 'flexShrink'
  | 'flexWrap'
  | 'float'
  | 'font'
  | 'fontFamily'
  | 'fontSize'
  | 'fontStyle'
  | 'fontVariant'
  | 'fontWeight'
  | 'gap'
  | 'grid'
  | 'gridArea'
  | 'gridAutoColumns'
  | 'gridAutoFlow'
  | 'gridAutoRows'
  | 'gridColumn'
  | 'gridColumnEnd'
  | 'gridColumnStart'
  | 'gridRow'
  | 'gridRowEnd'
  | 'gridRowStart'
  | 'gridTemplate'
  | 'gridTemplateAreas'
  | 'gridTemplateColumns'
  | 'gridTemplateRows'
  | 'height'
  | 'justifyContent'
  | 'justifyItems'
  | 'justifySelf'
  | 'left'
  | 'letterSpacing'
  | 'lineHeight'
  | 'listStyle'
  | 'listStyleImage'
  | 'listStylePosition'
  | 'listStyleType'
  | 'margin'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginRight'
  | 'marginTop'
  | 'maxHeight'
  | 'maxWidth'
  | 'minHeight'
  | 'minWidth'
  | 'opacity'
  | 'order'
  | 'outline'
  | 'overflow'
  | 'overflowX'
  | 'overflowY'
  | 'padding'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingTop'
  | 'placeContent'
  | 'placeItems'
  | 'placeSelf'
  | 'pointerEvents'
  | 'position'
  | 'resize'
  | 'right'
  | 'rowGap'
  | 'textAlign'
  | 'textDecoration'
  | 'textOverflow'
  | 'textShadow'
  | 'textTransform'
  | 'top'
  | 'transform'
  | 'transformOrigin'
  | 'transition'
  | 'transitionDelay'
  | 'transitionDuration'
  | 'transitionProperty'
  | 'transitionTimingFunction'
  | 'userSelect'
  | 'verticalAlign'
  | 'visibility'
  | 'whiteSpace'
  | 'width'
  | 'wordBreak'
  | 'wordWrap'
  | 'zIndex'
> &
  Pick<CSS.ObsoleteProperties, 'gridColumnGap' | 'gridGap' | 'gridRowGap'> &
  Pick<
    CSS.SvgProperties,
    'fill' | 'stroke' | 'strokeDasharray' | 'strokeDashoffset' | 'strokeLinecap' | 'strokeMiterlimit' | 'strokeWidth'
  >

export type BoxCssProps<CP> = {
  // Enhance the CSS props with the ui-box supported values.
  // `string` isn't added because it'll ruin props with string literal types (e.g textAlign)
  [P in keyof CP]: CP[P] | number | false | null | undefined
}

export type BoxPropValue = string | number | false | null | undefined

export type EnhancerProps = BoxCssProps<CssProps> & {
  /**
   * Sets `marginLeft` and `marginRight` to the same value
   */
  marginX?: BoxPropValue

  /**
   * Sets `marginTop` and `marginBottom` to the same value
   */
  marginY?: BoxPropValue

  /**
   * Sets `paddingLeft` and `paddingRight` to the same value
   */
  paddingX?: BoxPropValue

  /**
   * Sets `paddingTop` and `paddingBottom` to the same value
   */
  paddingY?: BoxPropValue

  /**
   * Utility property for easily adding clearfix styles to the element.
   */
  clearfix?: boolean

  /**
   * Map of selectors and styles to apply when the selector conditions are met
   * @example
   * <Box is="a" selectors={{ "&:hover": { textDecoration: "underline" } }}>
   *   Hello world
   * </Box>
   */
  selectors?: {
    [selector: string]: BoxCssProps<CssProps>
  }
}

export type PropEnhancerValueType = string | number

export interface PropTypesMapping {
  [key: string]: PropTypes.Validator<any>
}

export interface PropAliases {
  [key: string]: string[]
}

export interface PropEnhancers {
  [key: string]: (value: PropEnhancerValueType, selector: string) => EnhancedProp | null
}

export interface PropValidators {
  [key: string]: (value: any) => string | undefined
}

export interface EnhancedProp {
  /**
   * Generated class name representing the styles
   */
  className: string

  /**
   * Collection of css property/value objects
   */
  rules: Rule[]

  /**
   * Full style string in the format of `.className[:selector] { property: value; }`
   */
  styles: string
}
