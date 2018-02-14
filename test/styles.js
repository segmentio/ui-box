import test from 'ava'
import {add, getAll, clear, flush, getBatch, getStyleSheet} from '../src/styles'

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

test.serial('batches style insertion', t => {
  add('.test { width: 12px; }')
  t.is(getBatch(), '.test { width: 12px; }')
  t.is(getStyleSheet(), '')
  flush()
  t.is(getBatch(), '')
  t.is(getStyleSheet(), '.test { width: 12px; }')
})

test.serial('clears the batch', t => {
  add('.test { width: 13px; }')
  clear()
  flush()
  t.is(getAll(), '')
})
