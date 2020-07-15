import { add, getAll, clear } from '../src/styles'

beforeEach(() => {
  clear()
})

test('returns a style', () => {
  add(`.test { width: 10px; }`)
  expect(getAll()).toBe('.test {width: 10px;}')
})

test('returns multiple styles', () => {
  add('.test { width: 11px; }')
  add('.test2 { height: 20px; }')
  expect(getAll()).toBe('.test {width: 11px;}.test2 {height: 20px;}')
})
