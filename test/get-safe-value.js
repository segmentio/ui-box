import test from 'ava'
import getSafeValue from '../src/get-safe-value'

test('replaces dots and spaces with dashes', t => {
  t.is(getSafeValue('10.5px 20.5px 30.5px'), '10-5px-20-5px-30-5px')
})

test('replaces percentages with prcnt', t => {
  t.is(getSafeValue('10% 20%'), '10prcnt-20prcnt')
})

test('strips unsafe characters', t => {
  t.is(getSafeValue('calc(20px + 100%)'), 'calc20px--100prcnt')
})
