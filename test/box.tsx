import test from 'ava'
import React, { CSSProperties } from 'react'
import * as render from 'react-test-renderer'
import { shallow } from 'enzyme'
import * as sinon from 'sinon'
import Box from '../src/box'
import * as styles from '../src/styles'
import allPropertiesComponent from '../tools/all-properties-component'
import { propNames } from '../src/enhancers'

test.afterEach.always(() => {
  styles.clear()
})

test.serial('all properties', t => {
  const component = allPropertiesComponent()
  const tree = render.create(component).toJSON()
  t.snapshot(tree, 'DOM')
  t.snapshot(styles.getAll(), 'CSS')
})

test.serial('all properties set to inherit', t => {
  const properties: any = {}
  for (const name of propNames) {
    properties[name] = 'inherit'
  }

  delete properties.clearfix // Non-css property
  const component = <Box {...properties} />
  shallow(component)
  t.snapshot(styles.getAll(), 'CSS')
})

test.serial('all properties set to initial', t => {
  const properties: any = {}
  for (const name of propNames) {
    properties[name] = 'initial'
  }

  delete properties.clearfix // Non-css property
  const component = <Box {...properties} />
  shallow(component)
  t.snapshot(styles.getAll(), 'CSS')
})

test('is prop allows changing the dom element type', t => {
  const component = shallow(<Box is="h1" />)
  t.true(component.is('h1'))
})

test('is prop allows changing the component type', t => {
  function TestComponent(props) {
    return <h1 {...props} />
  }

  const component = shallow(<Box is={TestComponent} />)
  t.true(component.is(TestComponent))
})

test('ref gets forwarded', t => {
  const node = { domNode: true }
  const ref = sinon.spy()
  render.create(<Box ref={ref} />, {
    createNodeMock() {
      return node
    }
  })
  t.true(ref.calledOnce)
  t.is(ref.args[0][0], node)
})

test('renders children', t => {
  const component = shallow(
    <Box>
      <h1>Hi</h1>
    </Box>
  )
  t.true(component.contains(<h1>Hi</h1>))
})

test('maintains the original className', t => {
  const component = shallow(<Box className="derp" margin="10px" />)
  t.true(component.hasClass('derp'))
})

test('renders with style prop', t => {
  const expected: CSSProperties = { backgroundColor: 'red' }

  const component = shallow(<Box style={expected} />)

  t.deepEqual(component.prop('style'), expected)
})

test('renders with arbitrary non-enhancer props', t => {
  interface CustomComponentProps {
    foo: string
    baz: number
    fizz: {
      buzz: boolean
    }
  }

  const CustomComponent: React.FC<CustomComponentProps> = props => <code>{JSON.stringify(props, undefined, 4)}</code>

  const component = shallow(<Box is={CustomComponent} foo="bar" baz={123} fizz={{ buzz: true }} />)

  t.is(component.prop('foo'), 'bar')
  t.is(component.prop('baz'), 123)
  t.deepEqual(component.prop('fizz'), { buzz: true })
})
