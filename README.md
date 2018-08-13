<div align="center">
  <br>
  <br>
	<img src="https://rawgit.com/segmentio/ui-box/master/logo.svg" alt="UI-BOX: Blazing Fast React UI Primitive">
	<br>
	<br>
	<br>
  <a href="https://circleci.com/gh/segmentio/ui-box/tree/master">
    <img src="https://circleci.com/gh/segmentio/ui-box/tree/master.svg?style=svg" alt="Build Status">
  </a>
  <br>
	<br>
	<br>
	<br>
</div>

📦 ui-box is a low level CSS-in-JS solution that focuses on being simple, fast and extensible. All CSS properties are set using simple React props, which allows you to easily create reusable components that can be enhanced with additional CSS properties. This is very useful for adding things like margins to components, which would normally require adding non-reusable wrapper elements/classes.

## Install

```shell
yarn add ui-box
# or
npm install --save ui-box
```

## Usage

```jsx
import Box from 'ui-box'

function Button(props) {
  return (
    <Box
      is="button"
      padding="10px"
      background="red"
      {...props}
    />
  )
}

function Example() {
  return <Button disabled margin="10px">Hi</Button>
}
```

The above example component renders a red, disabled `<button>` with margins.

### API

#### Box (default export)

##### is

Type: `string` or React component type<br>
Default: `'div'`

Lets you change the underlying element type. You can pass either a string to change the DOM element type, or a React component type to inherit another component. The component just needs to accept a `className` prop to work. A good example is inheriting the [react-router `Link` component](https://reacttraining.com/react-router/web/api/Link).
E.g:
```jsx
<Box is={Link} to="/login">Login</Box>
```

##### innerRef

Type: `function`

Callback that gets passed a ref to inner DOM node (or component if the `is` prop is set to a React component type).

##### clearfix

Type: `boolean`

Utility property for easily adding clearfix styles to the element.

##### className

Type: `string`

The className prop you know and love. Internally it gets enhanced with additional class names for the CSS properties you specify.

##### CSS properties

All of these CSS properties are support. You can pass either a string or a number (which gets converted to a `px` value). The shorthand properties with repeated values only accept a single value, e.g. `margin="10px"` works but `margin="10px 20px"` does not. You can use the x/y props (e.g. `marginX`/`marginY`) to achieve the same thing.

* `alignContent`
* `alignItems`
* `alignSelf`
* `background`
* `backgroundBlendMode`
* `backgroundClip`
* `backgroundColor`
* `backgroundImage`
* `backgroundOrigin`
* `backgroundPosition`
* `backgroundRepeat`
* `backgroundSize`
* `border`
* `borderBottom`
* `borderBottomColor`
* `borderBottomLeftRadius`
* `borderBottomRightRadius`
* `borderBottomStyle`
* `borderBottomWidth`
* `borderColor`
* `borderLeft`
* `borderLeftColor`
* `borderLeftStyle`
* `borderLeftWidth`
* `borderRadius`
* `borderRight`
* `borderRightColor`
* `borderRightStyle`
* `borderRightWidth`
* `borderStyle`
* `borderTop`
* `borderTopColor`
* `borderTopLeftRadius`
* `borderTopRightRadius`
* `borderTopStyle`
* `borderTopWidth`
* `borderWidth`
* `bottom`
* `boxShadow`
* `boxSizing` - Set to `border-box` by default.
* `clear`
* `color`
* `columnGap`
* `cursor`
* `display`
* `flex`
* `flexBasis`
* `flexDirection`
* `flexFlow`
* `flexGrow`
* `flexShrink`
* `flexWrap`
* `float`
* `font`
* `fontFamily`
* `fontSize`
* `fontStyle`
* `fontVariant`
* `fontWeight`
* `gap`
* `grid`
* `gridArea`
* `gridAutoColumns`
* `gridAutoFlow`
* `gridAutoRows`
* `gridColumn`
* `gridColumnEnd`
* `gridColumnGap`
* `gridColumnStart`
* `gridGap`
* `gridRow`
* `gridRowEnd`
* `gridRowGap`
* `gridRowStart`
* `gridTemplate`
* `gridTemplateAreas`
* `gridTemplateColumns`
* `gridTemplateRows`
* `height`
* `justifyContent`
* `justifyItems`
* `justifySelf`
* `left`
* `letterSpacing`
* `lineHeight`
* `listStyle`
* `listStyleImage`
* `listStylePosition`
* `listStyleType`
* `margin`
* `marginBottom`
* `marginLeft`
* `marginRight`
* `marginTop`
* `marginX` - Sets `marginLeft` and `marginRight` to the same value.
* `marginY` - Sets `marginTop` and `marginBottom` to the same value.
* `maxHeight`
* `maxWidth`
* `minHeight`
* `minWidth`
* `opacity`
* `order`
* `overflow`
* `overflowX`
* `overflowY`
* `padding`
* `paddingBottom`
* `paddingLeft`
* `paddingRight`
* `paddingTop`
* `paddingX` - Sets `paddingLeft` and `paddingRight` to the same value.
* `paddingY` - Sets `paddingTop` and `paddingBottom` to the same value.
* `placeContent`
* `placeItems`
* `placeSelf`
* `pointerEvents`
* `position`
* `right`
* `rowGap`
* `textAlign`
* `textDecoration`
* `textOverflow`
* `textShadow`
* `textTransform`
* `top`
* `transform`
* `transformOrigin`
* `transition`
* `transitionDelay`
* `transitionDuration`
* `transitionProperty`
* `transitionTimingFunction`
* `userSelect`
* `visibility`
* `whiteSpace`
* `width`
* `wordBreak`
* `wordWrap`
* `zIndex`

##### Other props

All other props passed through to the underlying DOM element / React component.

#### extractStyles()

Returns a `{ cache, styles }` object which contains the cache entries and rendered styles for server rendering. The styles can be output in a `<style>` tag or an external stylesheet (however you want). The cache should be passed to `hydrate()` on the client-side before mounting the app. Also useful for doing snapshot unit testing (make sure to call `clearStyles()` after each test though).

#### hydrate(cache)

Hydrates the cache using the `cache` value returned from `extractStyles()`. This is used to prevent needing to recalculate all the class names and re-render all the styles on page load when server rendering.

#### clearStyles()

Clears the cache and removes the rendered styles. Mainly useful for resetting the global state when using `extractStyles()` in unit tests.

#### splitProps(props, keys)

Utility function for filtering out props based on an array of keys. Returns an `{ matchedProps, remainingProps }` object.

##### props

Type: `object`

##### keys

Type: `array[string]`

#### splitBoxProps(props)

Utility function for filtering out `Box` props. Returns an `{ matchedProps, remainingProps }` object.

##### props

Type: `object`

#### propTypes

Object of all the `Box` CSS property `propTypes`.

#### propNames

Array of all the `Box` CSS property names.

#### propAliases

Array of the `Box` CSS property aliases (the shorthand properties).

#### propEnhancers

Object of all the CSS property enhancers (the methods that generate the class name and styles for each property).

#### Enhancer groups

These enhancer groups are also exported. They're all objects with `{ propTypes, propAliases, propEnhancers }` properties. They're mainly useful for if you want to inherit a subset of the `Box` CSS propTypes in your own components.

* `background`
* `borderRadius`
* `borders`
* `boxShadow`
* `dimensions`
* `flex`
* `interaction`
* `layout`
* `list`
* `opacity`
* `overflow`
* `position`
* `spacing`
* `text`
* `transform`
* `transition`

### Server side rendering

To render the styles on the server side just use [`ReactDOMServer.renderToString()`](https://reactjs.org/docs/react-dom-server.html#rendertostring) as usual and then call the [`extractStyles()`](#extractstyles) method retrieve the rendered styles and cache. The styles can then be output to a `<style>` tag or an external stylesheet. The cache data should be passed to the [`hydrate()`](#hydratecache) method on the client side before you call [`ReactDOM.hydrate()`](https://reactjs.org/docs/react-dom.html#hydrate).

For example:
```js
'use strict'
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const {default: Box, extractStyles} = require('.')

const element = React.createElement(Box, {margin: '10px', color: 'red'}, 'hi')

const html = ReactDOMServer.renderToString(element)
const {styles, cache} = extractStyles()

const page = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Page</title>
    <style>
      ${styles}
    </style>
  </head>
  <body>
    <main id="root">
      ${html}
    </main>
    <script type="application/json" id="ui-box-cache">
      ${JSON.stringify(cache)}
    </script>
  </body>
</html>
`
console.log(page)
```

## Development

* `yarn dev` starts the development Storybook at http://localhost:9009/.
* `yarn test` runs the linter, unit tests and code coverage.
* `yarn ava -w` runs the unit tests in watch mode.
* `yarn ava -u` updates the snapshot tests.
* `yarn build` transpiles the JavaScript files.
* `yarn release` releases a new version (requires `np` to be installed globally).

## License

ui-box is released under the MIT license.

Copyright © 2017 Segment.io, Inc.
