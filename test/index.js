/* eslint-disable import/no-extraneous-dependencies */
import test from 'ava'
import render from 'react-test-renderer'
import allPropertiesComponent from '../tools/all-properties-component'

test('snapshot all properties', t => {
  const component = allPropertiesComponent()
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})
