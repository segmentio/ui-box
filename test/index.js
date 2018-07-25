import test from 'ava'
import React from 'react'
import {shallow} from 'enzyme'
import * as cache from '../src/cache'
import Box, {hydrate, extractStyles, clearStyles} from '../src'

const originalNodeEnv = process.env.NODE_ENV
test.afterEach.always(() => {
  process.env.NODE_ENV = originalNodeEnv
  clearStyles()
})

test.serial('hydrate method hydrates the cache', t => {
  const fixture = [['height10px', '📦h_10px']]
  hydrate(fixture)
  t.deepEqual(cache.entries(), fixture)
})

test.serial('extractStyles method returns css and cache', t => {
  shallow(<Box height="11px" />)
  t.deepEqual(extractStyles(), {
    styles: `
.📦h_11px {
  height: 11px;
}
.📦box-szg_border-box {
  box-sizing: border-box;
}`,
    cache: [
      ['height11px', '📦h_11px'],
      ['boxSizingborder-box', '📦box-szg_border-box']
    ]
  })
})

test.serial('extractStyles clears the cache and styles', t => {
  shallow(<Box height="12px" />)
  t.deepEqual(extractStyles(), {
    styles: `
.📦h_12px {
  height: 12px;
}
.📦box-szg_border-box {
  box-sizing: border-box;
}`,
    cache: [
      ['height12px', '📦h_12px'],
      ['boxSizingborder-box', '📦box-szg_border-box']
    ]
  })
  shallow(<Box height="13px" />)
  t.deepEqual(extractStyles(), {
    styles: `
.📦h_13px {
  height: 13px;
}
.📦box-szg_border-box {
  box-sizing: border-box;
}`,
    cache: [
      ['height13px', '📦h_13px'],
      ['boxSizingborder-box', '📦box-szg_border-box']
    ]
  })
})

test.serial('clearStyles clears the cache and styles', t => {
  shallow(<Box height="14px" />)
  clearStyles()
  shallow(<Box height="15px" />)
  t.deepEqual(extractStyles(), {
    styles: `
.📦h_15px {
  height: 15px;
}
.📦box-szg_border-box {
  box-sizing: border-box;
}`,
    cache: [
      ['height15px', '📦h_15px'],
      ['boxSizingborder-box', '📦box-szg_border-box']
    ]
  })
})

test.serial('returns minified css in production', t => {
  process.env.NODE_ENV = 'production'
  shallow(<Box height="11px" />)
  t.deepEqual(
    extractStyles().styles,
    `.📦h_11px{height:11px}.📦box-szg_border-box{box-sizing:border-box}`
  )
})
