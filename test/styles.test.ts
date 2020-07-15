import test from 'ava'
import {add, getAll, clear} from '../src/styles'

test.afterEach.always(() => {
  clear()
})

test.serial('returns a style', t => {
  add(`.test { width: 10px; }`)
  t.is(getAll(), '.test { width: 10px; }')
})

test.serial('returns multiple styles', t => {
  add('.test { width: 11px; }')
  add('.test2 { height: 20px; }')
  t.is(getAll(), '.test { width: 11px; }.test2 { height: 20px; }')
})
