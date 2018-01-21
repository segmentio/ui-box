import test from 'ava'
import decamelize from '../../src/utils/decamelize'

test('basic', t => {
  t.is(decamelize('userSelect'), 'user-select')
})

test('handles starting capital', t => {
  t.is(decamelize('WebkitUserSelect'), 'webkit-user-select')
})
