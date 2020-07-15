import getClassName, { setClassNamePrefix } from '../src/get-class-name'

test('supports inherit', () => {
  expect(getClassName({ className: 'w' }, 'inherit')).toBe('ub-w_inherit')
})

test('supports initial', () => {
  expect(getClassName({ className: 'w' }, 'initial')).toBe('ub-w_initial')
})

test('supports unset', () => {
  expect(getClassName({ className: 'w' }, 'unset')).toBe('ub-w_unset')
})

test('safeValue does not transform value', () => {
  const result = getClassName({ className: 'w', safeValue: true }, '50.5%')
  expect(result).toBe('ub-w_50.5%')
})

test('hashes complex values', () => {
  const result = getClassName(
    { className: 'bg', complexValue: true },
    'url(https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg)'
  )
  expect(result).toBe('ub-bg_181xl07')
})

test('removes all unsafe values by default', () => {
  const result = getClassName({ className: 'w' }, '50.5%')
  expect(result).toBe('ub-w_50-5prcnt')
})

test('always hashes values that contain a calc()', () => {
  const result = getClassName(
    { className: 'w', safeValue: true },
    'calc(50% + 20px)'
  )
  expect(result).toBe('ub-w_1vuvdht')
})

test('allows custom classname prefixes', () => {
  setClassNamePrefix('📦')
  expect(getClassName({ className: 'w' }, 'inherit')).toBe('📦w_inherit')
})
