import test from 'ava'
import * as cache from '../src/cache'
import * as styles from '../src/styles'
import enhanceProps from '../src/enhance-props'

test.afterEach.always(() => {
  cache.clear()
  styles.clear()
})

test.serial('enhances a prop', t => {
  const [className, enhancedProps] = enhanceProps({width: 10})
  t.is(className, '📦w_10px')
  t.deepEqual(enhancedProps, {})
})

test.serial('expands aliases', t => {
  const [className, enhancedProps] = enhanceProps({margin: 11})
  t.is(className, '📦mt_11px 📦mr_11px 📦ml_11px 📦mb_11px')
  t.deepEqual(enhancedProps, {})
})

test.serial('injects styles', t => {
  enhanceProps({width: 12})
  t.is(
    styles.getAll(),
    `
.📦w_12px {
  width: 12px;
}`
  )
})

test.serial('uses the cache', t => {
  enhanceProps({width: 13})
  enhanceProps({width: 13})
  t.is(
    styles.getAll(),
    `
.📦w_13px {
  width: 13px;
}`
  )
  t.is(cache.get('width', 13), '📦w_13px')
})

test.serial('strips falsey enhancer props', t => {
  const [className, enhancedProps] = enhanceProps({width: false})
  t.is(className, '')
  t.deepEqual(enhancedProps, {})
})

test.serial('passes through non-enhancer props', t => {
  const [className, enhancedProps] = enhanceProps({disabled: true})
  t.is(className, '')
  t.deepEqual(enhancedProps, {disabled: true})
})

test.serial('passes through falsey non-enhancer props', t => {
  const [className, enhancedProps] = enhanceProps({disabled: false})
  t.is(className, '')
  t.deepEqual(enhancedProps, {disabled: false})
})
