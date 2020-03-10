import test from 'ava'
import getClassName, { setClassNamePrefix, getClassNamePrefix } from '../src/get-class-name'

test('supports inherit', t => {
  t.is(getClassName({className: 'w'}, 'inherit'), 'ub-w_inherit')
})

test('supports initial', t => {
  t.is(getClassName({className: 'w'}, 'initial'), 'ub-w_initial')
})

test('supports unset', t => {
  t.is(getClassName({className: 'w'}, 'unset'), 'ub-w_unset')
})

test('safeValue does not transform value', t => {
  const result = getClassName({className: 'w', safeValue: true}, '50.5%')
  t.is(result, 'ub-w_50.5%')
})

test('hashes complex values', t => {
  const result = getClassName(
    {className: 'bg', complexValue: true},
    'url(https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg)'
  )
  t.is(result, 'ub-bg_181xl07')
})

test('removes all unsafe values by default', t => {
  const result = getClassName({className: 'w'}, '50.5%')
  t.is(result, 'ub-w_50-5prcnt')
})

test('always hashes values that contain a calc()', t => {
  const result = getClassName(
    {className: 'w', safeValue: true},
    'calc(50% + 20px)'
  )
  t.is(result, 'ub-w_1vuvdht')
})

test('allows custom classname prefixes', t => {
  setClassNamePrefix('📦')
  t.is(getClassName({className: 'w'}, 'inherit'), '📦w_inherit')
})
