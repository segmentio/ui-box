import {
  spacesOutsideParentheses,
  unsafeClassNameCharacters,
} from '../../src/utils/regex'

test('spacesOutsideParentheses matches spaces', () => {
  expect(spacesOutsideParentheses.test('10px 20px')).toBe(true)
})

test('spacesOutsideParentheses doesn՚t match spaces in parentheses', () => {
  expect(spacesOutsideParentheses.test('calc(10px 20px)')).toBe(false)
})

test('spacesOutsideParentheses matches spaces outside parentheses', () => {
  expect(spacesOutsideParentheses.test('20px calc(10px 20px)')).toBe(true)
})

test('unsafeClassNameCharacters matches unsafe characters', () => {
  expect(unsafeClassNameCharacters.test('rgba(0, 0, 0)')).toBe(true)
})

test('unsafeClassNameCharacters doesn՚t match safe characters', () => {
  expect(unsafeClassNameCharacters.test('min-w_20px')).toBe(false)
})
