/* eslint-disable import/no-extraneous-dependencies */
import test from 'ava'
import React from 'react'
import render from 'react-test-renderer'
import Box from '../src'
import allPropertiesComponent from '../tools/all-properties-component'
import {
  background,
  borderRadius,
  borders,
  boxShadow,
  dimensions,
  flex,
  interaction,
  layout,
  opacity,
  overflow,
  position,
  spacing,
  text,
  transform
} from '../src/enhancers'

const propertyNames = [
  ...background.keysPropTypes,
  ...borderRadius.keysPropTypes,
  ...borders.keysPropTypes,
  ...boxShadow.keysPropTypes,
  ...dimensions.keysPropTypes,
  ...flex.keysPropTypes,
  ...interaction.keysPropTypes,
  ...layout.keysPropTypes,
  ...opacity.keysPropTypes,
  ...overflow.keysPropTypes,
  ...position.keysPropTypes,
  ...spacing.keysPropTypes,
  ...text.keysPropTypes,
  ...transform.keysPropTypes
]

test('all properties', t => {
  const component = allPropertiesComponent()
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})

test('all properties set to inherit', t => {
  const properties = {}
  for (const name of propertyNames) {
    properties[name] = 'inherit'
  }
  delete properties.clearfix // Non-css property
  const component = <Box {...properties} />
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})

test('all properties set to initial', t => {
  const properties = {}
  for (const name of propertyNames) {
    properties[name] = 'initial'
  }
  delete properties.clearfix // Non-css property
  const component = <Box {...properties} />
  const tree = render.create(component).toJSON()
  t.snapshot(tree)
})
