import test from 'ava'
import {
  spacesOutsideParentheses,
  unsafeClassNameCharacters
} from '../../src/utils/regex'

test('spacesOutsideParentheses matches spaces', t => {
  t.true(spacesOutsideParentheses.test('10px 20px'))
})

test('spacesOutsideParentheses doesn՚t match spaces in parentheses', t => {
  t.false(spacesOutsideParentheses.test('calc(10px 20px)'))
})

test('spacesOutsideParentheses matches spaces outside parentheses', t => {
  t.true(spacesOutsideParentheses.test('20px calc(10px 20px)'))
})

test('unsafeClassNameCharacters matches unsafe characters', t => {
  t.true(unsafeClassNameCharacters.test('rgba(0, 0, 0)'))
})

test('unsafeClassNameCharacters doesn՚t match safe characters', t => {
  t.false(unsafeClassNameCharacters.test('min-w_20px'))
})
