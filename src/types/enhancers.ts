import PropTypes from 'prop-types'
import * as CSS from 'csstype'

type CssProps = Pick<
  CSS.StandardProperties,
  | 'alignContent'
  | 'alignItems'
  | 'alignSelf'
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
  | 'visibility'
  | 'whiteSpace'
  | 'width'
  | 'wordBreak'
  | 'wordWrap'
  | 'zIndex'
> &
  Pick<CSS.ObsoleteProperties, 'gridColumnGap' | 'gridGap' | 'gridRowGap'>

type BoxCssProps<CP> = {
  // Enhance the CSS props with the ui-box supported values.
  // `string` isn't added because it'll ruin props with string literal types (e.g textAlign)
  [P in keyof CP]: CP[P] | number | boolean | null | undefined
}

export type BoxPropValue = string | number | boolean | null | undefined

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
}

export type PropEnhancerValueType = string | number

export interface PropTypesMapping {
  [key: string]: PropTypes.Validator<any>
}

export interface PropAliases {
  [key: string]: string[]
}

export interface PropEnhancers {
  [key: string]: (value: any) => EnhancedProp | null
}

export interface PropValidators {
  [key: string]: (value: any) => string | undefined
}

export interface EnhancedProp {
  className: string
  styles: string
}
