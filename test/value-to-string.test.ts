import valueToString from '../src/value-to-string'

test('converts numbers to string', () => {
  expect(valueToString(50.5)).toBe('50.5px')
})

test('allows changing the default unit', () => {
  expect(valueToString(0.5, '')).toBe('0.5')
})
