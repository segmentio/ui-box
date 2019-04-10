// TypeScript Version: 3.2

import { Component, ReactType, JSXElementConstructor } from 'react'
import * as CSS from 'csstype'

export type CssProps = Pick<
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

export interface DomNodes {
  // HTML
  a: HTMLAnchorElement
  abbr: HTMLElement
  address: HTMLElement
  area: HTMLAreaElement
  article: HTMLElement
  aside: HTMLElement
  audio: HTMLAudioElement
  b: HTMLElement
  base: HTMLBaseElement
  bdi: HTMLElement
  bdo: HTMLElement
  big: HTMLElement
  blockquote: HTMLElement
  body: HTMLBodyElement
  br: HTMLBRElement
  button: HTMLButtonElement
  canvas: HTMLCanvasElement
  caption: HTMLElement
  cite: HTMLElement
  code: HTMLElement
  col: HTMLTableColElement
  colgroup: HTMLTableColElement
  data: HTMLElement
  datalist: HTMLDataListElement
  dd: HTMLElement
  del: HTMLElement
  details: HTMLElement
  dfn: HTMLElement
  dialog: HTMLDialogElement
  div: HTMLDivElement
  dl: HTMLDListElement
  dt: HTMLElement
  em: HTMLElement
  embed: HTMLEmbedElement
  fieldset: HTMLFieldSetElement
  figcaption: HTMLElement
  figure: HTMLElement
  footer: HTMLElement
  form: HTMLFormElement
  h1: HTMLHeadingElement
  h2: HTMLHeadingElement
  h3: HTMLHeadingElement
  h4: HTMLHeadingElement
  h5: HTMLHeadingElement
  h6: HTMLHeadingElement
  head: HTMLHeadElement
  header: HTMLElement
  hgroup: HTMLElement
  hr: HTMLHRElement
  html: HTMLHtmlElement
  i: HTMLElement
  iframe: HTMLIFrameElement
  img: HTMLImageElement
  input: HTMLInputElement
  ins: HTMLModElement
  kbd: HTMLElement
  keygen: HTMLElement
  label: HTMLLabelElement
  legend: HTMLLegendElement
  li: HTMLLIElement
  link: HTMLLinkElement
  main: HTMLElement
  map: HTMLMapElement
  mark: HTMLElement
  menu: HTMLElement
  menuitem: HTMLElement
  meta: HTMLMetaElement
  meter: HTMLElement
  nav: HTMLElement
  noindex: HTMLElement
  noscript: HTMLElement
  object: HTMLObjectElement
  ol: HTMLOListElement
  optgroup: HTMLOptGroupElement
  option: HTMLOptionElement
  output: HTMLElement
  p: HTMLParagraphElement
  param: HTMLParamElement
  picture: HTMLElement
  pre: HTMLPreElement
  progress: HTMLProgressElement
  q: HTMLQuoteElement
  rp: HTMLElement
  rt: HTMLElement
  ruby: HTMLElement
  s: HTMLElement
  samp: HTMLElement
  script: HTMLScriptElement
  section: HTMLElement
  select: HTMLSelectElement
  small: HTMLElement
  source: HTMLSourceElement
  span: HTMLSpanElement
  strong: HTMLElement
  style: HTMLStyleElement
  sub: HTMLElement
  summary: HTMLElement
  sup: HTMLElement
  table: HTMLTableElement
  tbody: HTMLTableSectionElement
  td: HTMLTableDataCellElement
  textarea: HTMLTextAreaElement
  tfoot: HTMLTableSectionElement
  th: HTMLTableHeaderCellElement
  thead: HTMLTableSectionElement
  time: HTMLElement
  title: HTMLTitleElement
  tr: HTMLTableRowElement
  track: HTMLTrackElement
  u: HTMLElement
  ul: HTMLUListElement
  var: HTMLElement
  video: HTMLVideoElement
  wbr: HTMLElement
  webview: HTMLWebViewElement

  // SVG
  svg: SVGSVGElement

  animate: SVGElement
  animateMotion: SVGElement
  animateTransform: SVGElement
  circle: SVGCircleElement
  clipPath: SVGClipPathElement
  defs: SVGDefsElement
  desc: SVGDescElement
  ellipse: SVGEllipseElement
  feBlend: SVGFEBlendElement
  feColorMatrix: SVGFEColorMatrixElement
  feComponentTransfer: SVGFEComponentTransferElement
  feComposite: SVGFECompositeElement
  feConvolveMatrix: SVGFEConvolveMatrixElement
  feDiffuseLighting: SVGFEDiffuseLightingElement
  feDisplacementMap: SVGFEDisplacementMapElement
  feDistantLight: SVGFEDistantLightElement
  feFlood: SVGFEFloodElement
  feFuncA: SVGFEFuncAElement
  feFuncB: SVGFEFuncBElement
  feFuncG: SVGFEFuncGElement
  feFuncR: SVGFEFuncRElement
  feGaussianBlur: SVGFEGaussianBlurElement
  feImage: SVGFEImageElement
  feMerge: SVGFEMergeElement
  feMergeNode: SVGFEMergeNodeElement
  feMorphology: SVGFEMorphologyElement
  feOffset: SVGFEOffsetElement
  fePointLight: SVGFEPointLightElement
  feSpecularLighting: SVGFESpecularLightingElement
  feSpotLight: SVGFESpotLightElement
  feTile: SVGFETileElement
  feTurbulence: SVGFETurbulenceElement
  filter: SVGFilterElement
  foreignObject: SVGForeignObjectElement
  g: SVGGElement
  image: SVGImageElement
  line: SVGLineElement
  linearGradient: SVGLinearGradientElement
  marker: SVGMarkerElement
  mask: SVGMaskElement
  metadata: SVGMetadataElement
  mpath: SVGElement
  path: SVGPathElement
  pattern: SVGPatternElement
  polygon: SVGPolygonElement
  polyline: SVGPolylineElement
  radialGradient: SVGRadialGradientElement
  rect: SVGRectElement
  stop: SVGStopElement
  switch: SVGSwitchElement
  symbol: SVGSymbolElement
  text: SVGTextElement
  textPath: SVGTextPathElement
  tspan: SVGTSpanElement
  use: SVGUseElement
  view: SVGViewElement
}

export type BoxCssProps = {
  // Enhance the CSS props with the ui-box supported values.
  // `string` isn't added because it'll ruin props with string literal types (e.g textAlign)
  [P in keyof CssProps]: CssProps[P] | number | boolean | null | undefined
}

// Custom ComponentPropsWithoutRef implementation that doesn't require extending `ReactType`,
// which allows `this.props` to be typed correctly inside classes
export type ComponentProps<T> = T extends JSXElementConstructor<infer P>
  ? P
  : T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T]
  : {}
export type PropsWithoutRef<P> = 'ref' extends keyof P
  ? Pick<P, Exclude<keyof P, 'ref'>>
  : P
export type ComponentPropsWithoutRef<T> = PropsWithoutRef<ComponentProps<T>>

export type RefType<T> = T extends keyof DomNodes
  ? DomNodes[T] // Get the DOM node type
  : T extends typeof Component
  ? T['prototype'] // Convert component class type back to a class instance
  : never // Functional components can't have refs

export type BoxValue = string | number | boolean | null | undefined

export type BoxEnhancerProps = BoxCssProps & {
  /**
   * Sets `marginLeft` and `marginRight` to the same value
   */
  marginX?: BoxValue

  /**
   * Sets `marginTop` and `marginBottom` to the same value
   */
  marginY?: BoxValue

  /**
   * Sets `paddingLeft` and `paddingRight` to the same value
   */
  paddingX?: BoxValue

  /**
   * Sets `paddingTop` and `paddingBottom` to the same value
   */
  paddingY?: BoxValue

  /**
   * Utility property for easily adding clearfix styles to the element.
   */
  clearfix?: boolean
}

export type BoxProps<T> = ComponentPropsWithoutRef<T> &
  BoxEnhancerProps & {
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

export default class Box<T = 'div'> extends Component<BoxProps<T>> {}

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

export interface SplitBoxProps<P extends BoxEnhancerProps> {
  matchedProps: Pick<P, keyof BoxEnhancerProps>
  remainingProps: Pick<P, Exclude<keyof P, keyof BoxEnhancerProps>>
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
