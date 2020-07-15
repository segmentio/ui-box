import decamelize from '../../src/utils/decamelize'

test('decamelizes', () => {
  expect(decamelize('userSelect')).toBe('user-select')
})

test('handles starting capital', () => {
  expect(decamelize('WebkitUserSelect')).toBe('webkit-user-select')
})
