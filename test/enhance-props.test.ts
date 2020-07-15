import * as cache from '../src/cache'
import * as styles from '../src/styles'
import enhanceProps from '../src/enhance-props'

beforeEach(() => {
  cache.clear()
  styles.clear()
})

test('enhances a prop', () => {
  const { className, enhancedProps } = enhanceProps({ width: 10 })
  expect(className).toBe('ub-w_10px')
  expect(enhancedProps).toEqual({})
})

test('expands aliases', () => {
  const { className, enhancedProps } = enhanceProps({ margin: 11 })
  expect(className).toBe('ub-mb_11px ub-ml_11px ub-mr_11px ub-mt_11px')
  expect(enhancedProps).toEqual({})
})

test('injects styles', () => {
  enhanceProps({ width: 12 })
  expect(styles.getAll()).toBe(`.ub-w_12px {width: 12px;}`)
})

test('uses the cache', () => {
  enhanceProps({ width: 13 })
  enhanceProps({ width: 13 })
  expect(styles.getAll()).toBe(`.ub-w_13px {width: 13px;}`)
  expect(cache.get('width', 13)).toBe('ub-w_13px')
})

test('strips falsey enhancer props', () => {
  const { className, enhancedProps } = enhanceProps({ width: false })
  expect(className).toBe('')
  expect(enhancedProps).toEqual({})
})

test('does not strip enhancer props with 0 values', () => {
  const { className, enhancedProps } = enhanceProps({ width: 0 })
  expect(className).toBe('ub-w_0px')
  expect(enhancedProps).toEqual({})
})

test('passes through non-enhancer props', () => {
  const { className, enhancedProps } = enhanceProps({ disabled: true })
  expect(className).toBe('')
  expect(enhancedProps).toEqual({ disabled: true })
})

test('passes through falsey non-enhancer props', () => {
  const { className, enhancedProps } = enhanceProps({ disabled: false })
  expect(className).toBe('')
  expect(enhancedProps).toEqual({ disabled: false })
})

test('handles invalid values', () => {
  // @ts-expect-error
  const { className, enhancedProps } = enhanceProps({ minWidth: true })
  expect(className).toBe('')
  expect(enhancedProps).toEqual({})
})
