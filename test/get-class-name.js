import test from 'ava'
import getClassName from '../src/get-class-name'

test('supports inherit', t => {
  t.is(getClassName({key: 'w'}, 'inherit'), 'uibox_w_inherit')
})

test('supports initial', t => {
  t.is(getClassName({key: 'w'}, 'initial'), 'uibox_w_initial')
})

test('supports unset', t => {
  t.is(getClassName({key: 'w'}, 'unset'), 'uibox_w_unset')
})

test('lengthOnly only transforms dot and percentage', t => {
  const result = getClassName({key: 'w', lengthOnly: true}, '[50.5%')
  t.is(result, 'uibox_w_[50-5prcnt')
})

test('numberOnly only transforms dot', t => {
  const result = getClassName({key: 'w', numberOnly: true}, '50.5%')
  t.is(result, 'uibox_w_50-5%')
})

test('safeValue does not transform value', t => {
  const result = getClassName({key: 'w', safeValue: true}, '50.5%')
  t.is(result, 'uibox_w_50.5%')
})

test('hashes complex values', t => {
  const result = getClassName(
    {key: 'bg', complexValue: true},
    'url(https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg)'
  )
  t.is(result, 'uibox_bg_181xl07')
})

test('removes all unsafe values by default', t => {
  const result = getClassName({key: 'w'}, '50.5% calc(50.5% + 20px)')
  t.is(result, 'uibox_w_50-5prcnt-calc50-5prcnt--20px')
})
