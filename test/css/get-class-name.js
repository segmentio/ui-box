import test from 'ava'
import getClassName from '../../src/css/get-class-name'

test('supports inherit', t => {
  t.is(getClassName({ key: 'width' }, 'inherit'), 'width_inherit')
})

test('supports initial', t => {
  t.is(getClassName({ key: 'width' }, 'initial'), 'width_initial')
})

test('supports unset', t => {
  t.is(getClassName({ key: 'width' }, 'unset'), 'width_unset')
})

test('lengthOnly only transforms dot and percentage', t => {
  const result = getClassName({ key: 'width', lengthOnly: true }, '[50.5%')
  t.is(result, 'width_[50-5prcnt')
})

test('numberOnly only transforms dot', t => {
  const result = getClassName({ key: 'width', numberOnly: true }, '50.5%')
  t.is(result, 'width_50-5%')
})

test('safeValue does not transform value', t => {
  const result = getClassName({ key: 'width', safeValue: true }, '50.5%')
  t.is(result, 'width_50.5%')
})

test('removes all unsafe values by default', t => {
  const result = getClassName({ key: 'width' }, '50.5% calc(50.5% + 20px)')
  t.is(result, 'width_50-5prcnt-calc50-5prcnt--20px')
})
