import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import * as cache from '../src/cache'
import Box, { hydrate, extractStyles, clearStyles } from '../src/index'

test.afterEach.always(() => {
  clearStyles()
})

test.serial('hydrate method hydrates the cache', t => {
  const fixture = [['height10px', 'uibox_h_10px']]
  hydrate(fixture)
  t.deepEqual(cache.entries(), fixture)
})

test.serial('extractStyles method returns css and cache', t => {
  shallow(<Box height="11px" />)
  t.deepEqual(extractStyles(), {
    styles: `
.uibox_h_11px {
  height: 11px;
}
.uibox_box-szg_border-box {
  box-sizing: border-box;
}`,
    cache: [
      ['height11px', 'uibox_h_11px'],
      ['boxSizingborder-box', 'uibox_box-szg_border-box']
    ]
  })
})

test.serial('clearStyles clears the cache and styles', t => {
  shallow(<Box height="12px" />)
  clearStyles()
  shallow(<Box height="13px" />)
  t.deepEqual(extractStyles(), {
    styles: `
.uibox_h_13px {
  height: 13px;
}
.uibox_box-szg_border-box {
  box-sizing: border-box;
}`,
    cache: [
      ['height13px', 'uibox_h_13px'],
      ['boxSizingborder-box', 'uibox_box-szg_border-box']
    ]
  })
})
