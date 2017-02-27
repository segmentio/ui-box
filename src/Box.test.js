/* global describe it expect */
import React from 'react'
import { shallow, mount } from 'enzyme'
import Box from './Box'

describe('<Box />', () => {
  it('should render a Box', () => {
    const box = mount(<Box />)
    expect(box.type()).toEqual(Box)
    expect(box.name()).toEqual('Box')
  })

  it(`is a 'div' element by default`, () => {
    const box = shallow(<Box />)
    expect(box.html()).toMatch('</div>')
  })

  it('should have a ui-lib-box className', () => {
    const box = shallow(<Box />)
    expect(box.hasClass('ui-lib-box')).toEqual(true)
  })

  // Still unsure how to test glamor classnames
})

describe(`<Box is='p' />`, () => {
  it(`is a 'p' element`, () => {
    const box = shallow(<Box is='p' />)
    expect(box.html()).toMatch('</p>')
  })
})
