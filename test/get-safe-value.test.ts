import getSafeValue from '../src/get-safe-value'

test('replaces dots and spaces with dashes', () => {
  expect(getSafeValue('10.5px 20.5px 30.5px')).toBe('10-5px-20-5px-30-5px')
})

test('replaces percentages with prcnt', () => {
  expect(getSafeValue('10% 20%')).toBe('10prcnt-20prcnt')
})

test('strips unsafe characters', () => {
  expect(getSafeValue('calc(20px + 100%)')).toBe('calc20px--100prcnt')
})
