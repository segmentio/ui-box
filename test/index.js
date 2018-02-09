import test from 'ava'
import React from 'react'
import render from 'react-test-renderer'
import Box from '../src'
import { getStyles } from '../src/styles'
import allPropertiesComponent from '../tools/all-properties-component'
import { propNames } from '../src/enhancers'

test('all properties', t => {
  const component = allPropertiesComponent()
  const tree = render.create(component).toJSON()
  t.snapshot(tree, 'DOM')
  // Only snapshot the CSS once for now because we can't clear the caches yet
  t.snapshot(getStyles(), 'CSS')
})

test('all properties set to inherit', t => {
  const properties = {}
  for (const name of propNames) {
    properties[name] = 'inherit'
  }
  delete properties.clearfix // Non-css property
  const component = <Box {...properties} />
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})

test('all properties set to initial', t => {
  const properties = {}
  for (const name of propNames) {
    properties[name] = 'initial'
  }
  delete properties.clearfix // Non-css property
  const component = <Box {...properties} />
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})
