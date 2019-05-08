import test from 'ava'
import valueToString from '../src/value-to-string'

test('converts numbers to string', t => {
  t.is(valueToString(50.5), '50.5px')
})

test('allows changing the default unit', t => {
  t.is(valueToString(0.5, ''), '0.5')
})
