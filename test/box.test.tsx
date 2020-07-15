import React from 'react'
import * as render from 'react-test-renderer'
import { shallow } from 'enzyme'
import Box from '../src/box'
import * as styles from '../src/styles'
import allPropertiesComponent from '../tools/all-properties-component'
import { propNames } from '../src/enhancers'

test(() => {
  styles.clear()
})

test('all properties', () => {
  const component = allPropertiesComponent()
  const tree = render.create(component).toJSON()
  expect(tree).toMatchSnapshot()
  expect(styles.getAll()).toMatchSnapshot()
})

test('all properties set to inherit', () => {
  const properties: any = {}
  for (const name of propNames) {
    properties[name] = 'inherit'
  }

  delete properties.clearfix // Non-css property
  const component = <Box {...properties} />
  shallow(component)
  expect(styles.getAll()).toMatchSnapshot()
})

test('all properties set to initial', () => {
  const properties: any = {}
  for (const name of propNames) {
    properties[name] = 'initial'
  }

  delete properties.clearfix // Non-css property
  const component = <Box {...properties} />
  shallow(component)
  expect(styles.getAll()).toMatchSnapshot()
})

test('is prop allows changing the dom element type', () => {
  const component = shallow(<Box is="h1" />)
  expect(component.is('h1')).toBe(true)
})

test('is prop allows changing the component type', () => {
  function TestComponent(props) {
    return <h1 {...props} />
  }

  const component = shallow(<Box is={TestComponent} />)
  expect(component.is(TestComponent)).toBe(true)
})

test('ref gets forwarded', () => {
  const node = { domNode: true }
  const ref = jest.fn()
  render.create(<Box ref={ref} />, {
    createNodeMock() {
      return node
    },
  })
  expect(ref.calledOnce).toBe(true)
  expect(ref.args[0][0]).toBe(node)
})

test('renders children', () => {
  const component = shallow(
    <Box>
      <h1>Hi</h1>
    </Box>
  )
  expect(component.contains(<h1>Hi</h1>)).toBe(true)
})

test('maintains the original className', () => {
  const component = shallow(<Box className="derp" margin="10px" />)
  expect(component.hasClass('derp')).toBe(true)
})
