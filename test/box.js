import test from 'ava'
import React from 'react'
import render from 'react-test-renderer'
import { shallow } from 'enzyme'
import Box from '../src/box'
import * as styles from '../src/styles'
import allPropertiesComponent from '../tools/all-properties-component'
import { propNames } from '../src/enhancers'

test.afterEach(() => {
  styles.clear()
})

test.serial('all properties', t => {
  const component = allPropertiesComponent()
  const tree = render.create(component).toJSON()
  t.snapshot(tree, 'DOM')
  t.snapshot(styles.getAll(), 'CSS')
})

test.serial('all properties set to inherit', t => {
  const properties = {}
  for (const name of propNames) {
    properties[name] = 'inherit'
  }
  delete properties.clearfix // Non-css property
  const component = <Box {...properties} />
  const tree = render.create(component).toJSON()
  t.snapshot(tree, 'DOM')
  t.snapshot(styles.getAll(), 'CSS')
})

test.serial('all properties set to initial', t => {
  const properties = {}
  for (const name of propNames) {
    properties[name] = 'initial'
  }
  delete properties.clearfix // Non-css property
  const component = <Box {...properties} />
  const tree = render.create(component).toJSON()
  t.snapshot(tree, 'DOM')
  t.snapshot(styles.getAll(), 'CSS')
})

test('is prop changes the element type', t => {
  const component = shallow(<Box is="h1" />)
  t.true(component.is('h1'))
})

test('css prop renders a glamor class', t => {
  const component = shallow(<Box css={{ height: '10px' }} />)
  t.true(component.hasClass('css-882mhe'))
})

test('renders children', t => {
  const component = shallow(
    <Box>
      <h1>Hi</h1>
    </Box>
  )
  t.true(component.contains(<h1>Hi</h1>))
})
