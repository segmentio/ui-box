import React from 'react'
import { shallow } from 'enzyme'
import * as cache from '../src/cache'
import Box, { hydrate, extractStyles, clearStyles } from '../src'

const originalNodeEnv = process.env.NODE_ENV
test(() => {
  process.env.NODE_ENV = originalNodeEnv
  clearStyles()
})

test('hydrate method hydrates the cache', () => {
  const fixture: [string, string][] = [['height10px', 'ub-h_10px']]
  hydrate(fixture)
  expect(cache.entries()).toEqual(fixture)
})

test('extractStyles method returns css and cache', () => {
  shallow(<Box height="11px" />)
  expect(extractStyles()).toEqual({
    styles: `
.ub-h_11px {
  height: 11px;
}
.ub-box-szg_border-box {
  box-sizing: border-box;
}`,
    cache: [
      ['height11px', 'ub-h_11px'],
      ['boxSizingborder-box', 'ub-box-szg_border-box'],
    ],
  })
})

test('extractStyles clears the cache and styles', () => {
  shallow(<Box height="12px" />)
  expect(extractStyles()).toEqual({
    styles: `
.ub-h_12px {
  height: 12px;
}
.ub-box-szg_border-box {
  box-sizing: border-box;
}`,
    cache: [
      ['height12px', 'ub-h_12px'],
      ['boxSizingborder-box', 'ub-box-szg_border-box'],
    ],
  })
  shallow(<Box height="13px" />)
  expect(extractStyles()).toEqual({
    styles: `
.ub-h_13px {
  height: 13px;
}
.ub-box-szg_border-box {
  box-sizing: border-box;
}`,
    cache: [
      ['height13px', 'ub-h_13px'],
      ['boxSizingborder-box', 'ub-box-szg_border-box'],
    ],
  })
})

test('clearStyles clears the cache and styles', () => {
  shallow(<Box height="14px" />)
  clearStyles()
  shallow(<Box height="15px" />)
  expect(extractStyles()).toEqual({
    styles: `
.ub-h_15px {
  height: 15px;
}
.ub-box-szg_border-box {
  box-sizing: border-box;
}`,
    cache: [
      ['height15px', 'ub-h_15px'],
      ['boxSizingborder-box', 'ub-box-szg_border-box'],
    ],
  })
})

test('returns minified css in production', () => {
  process.env.NODE_ENV = 'production'
  shallow(<Box height="11px" />)
  expect(extractStyles().styles).toEqual(
    `.ub-h_11px{height:11px}.ub-box-szg_border-box{box-sizing:border-box}`
  )
})
