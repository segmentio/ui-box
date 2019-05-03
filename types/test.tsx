/*

Testing
=======

First check that this unmodified file only has errors by `$ExpectError` tests
to test the happy paths, then follow the inline instructions below to test the
unhappy paths.

*/
import * as React from 'react'
import Box, { extractStyles, BoxProps, splitProps, splitBoxProps } from 'ui-box'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface TestFunctionComponentProps {
  functionProp: string
  functionPropCallback(value: string): string
}
function TestFunctionComponent(props: TestFunctionComponentProps) {
  return <div>{props.functionProp}</div>
}

interface TestClassComponentProps {
  classProp: string
  classPropCallback(value: string): string
}
class TestClassComponent extends React.Component<TestClassComponentProps> {
  render() {
    // $ExpectType string
    this.props.classProp
    // $ExpectError
    this.props.derp

    return <div>{this.props.classProp}</div>
  }
  instanceFunction() {}
  static staticFunction() {}
}

// This component tests composing ui-box
interface ComposedBoxProps {
  display: {
    value: string
  }
}
// This tests that the ui-box props can be overriden
type BoxPropsOverride<T> = Omit<BoxProps<T>, 'display'>
class ComposedBox<T = 'input'> extends React.Component<
  BoxPropsOverride<T> & ComposedBoxProps
> {
  render() {
    const { display, ...otherProps } = this.props
    // $ExpectType string
    display.value
    // $ExpectError
    display.derp

    return <Box<'input'> is="input" value={display.value} {...otherProps} />
  }
}

export default class TestComp extends React.Component {
  componentDidMount() {
    const { cache, styles } = extractStyles()
    console.log(cache, styles)
  }

  render() {
    return (
      <div>
        {/* Tests the basic types of poperties */}
        <Box
          // Try adding a random prop here, it should error
          aria-label="test"
          data-test="test"
          // Try passing a number to `className`, it should error
          className="{1}"
          padding={20}
          paddingX={5}
          paddingTop="10px"
          paddingLeft={false}
          innerRef={node => {
            // $ExpectType HTMLDivElement
            node
            // $ExpectType string
            node.innerHTML
          }}
          ref={ref => {
            // $ExpectType Box<"div"> | null
            ref
          }}
        >
          hello world
        </Box>

        {/* Tests using a composed ui-box component */}
        <ComposedBox
          // Try adding a random prop here, it should error
          value="test"
          // Try passing a random string to `textAlign`, it should error
          textAlign="center"
          // Try passing a number to `value`, it should error
          display={{ value: '4' }}
          // onChange={e => {}}
          innerRef={node => {
            // $ExpectType HTMLInputElement
            node
            // $ExpectType string
            node.value
          }}
        />
        {/* Tests that a composed component can use `is` */}
        <ComposedBox<typeof TestClassComponent>
          is={TestClassComponent}
          display={{ value: 'test' }}
          classProp="test"
          classPropCallback={value => value}
          innerRef={ref => {
            // $ExpectType TestClassComponent
            ref
          }}
        />
        {/* Tests passing a functional component to `is` */}
        <Box<typeof TestFunctionComponent>
          is={TestFunctionComponent}
          // Try adding a random prop here, it should error
          color="red"
          // Try passing a number to `functionProp`, it should error
          functionProp="{2}"
          functionPropCallback={value => {
            // $ExpectType string
            value
            return 'test'
          }}
        />
        {/* Tests passing a class component to `is` */}
        <Box<typeof TestClassComponent>
          is={TestClassComponent}
          // Try adding a random prop here, it should error
          innerRef={component => {
            // $ExpectType TestClassComponent
            component
          }}
          // Try passing a number to `classProp`, it should error
          classProp="{3}"
          classPropCallback={value => {
            // $ExpectType string
            value
            return 'test'
          }}
        />
        {/* Tests passing a dom element name to `is` */}
        <Box<'input'>
          is="input"
          // Try adding a random prop here, it should error
          border="1px solid red"
          onClick={e => {}}
          innerRef={node => {
            // $ExpectType HTMLInputElement
            node
            // $ExpectType string
            node.value
          }}
          value="test"
        />
      </div>
    )
  }
}

const testProps = {
  a: 'a',
  b: 'b',
  c: 'c'
}
const splitPropsResult = splitProps(testProps, ['a'])
// $ExpectType string
splitPropsResult.matchedProps.a
// $ExpectError
splitPropsResult.matchedProps.b
// $ExpectType string
splitPropsResult.remainingProps.b
// $ExpectError
splitPropsResult.remainingProps.a

const testProps2 = {
  display: 'block',
  marginX: '10px',
  a: 'a'
}
const splitBoxPropsResult = splitBoxProps(testProps2)
// $ExpectType string
splitBoxPropsResult.matchedProps.display
// $ExpectType string
splitBoxPropsResult.matchedProps.marginX
// $ExpectError
splitBoxPropsResult.matchedProps.a
// $ExpectType string
splitBoxPropsResult.remainingProps.a
// $ExpectError
splitBoxPropsResult.remainingProps.display
