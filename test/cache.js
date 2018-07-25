import test from 'ava'
import * as cache from '../src/cache'

test.afterEach.always(() => {
  cache.clear()
})

test('caches a className', t => {
  cache.set('minWidth', '10px', 'min-w-10px')
  t.is(cache.get('minWidth', '10px'), 'min-w-10px')
})

test('validates the value', t => {
  t.throws(() => {
    cache.set('width', {herpa: 'derp'}, 'w-10px')
  }, /invalid cache value/)
})

test('returns the cache entries', t => {
  cache.set('minHeight', '10px', 'min-h-10px')
  t.deepEqual(cache.entries(), [['minHeight10px', 'min-h-10px']])
})

test('hydrates the cache', t => {
  const fixture = [['height10px', 'h-10px']]
  cache.hydrate(fixture)
  t.deepEqual(cache.entries(), fixture)
})

test('existing keys are maintained when hydrating', t => {
  cache.set('minWidth', '10px', 'min-w-10px')
  cache.hydrate([['height10px', 'h-10px']])
  t.deepEqual(cache.entries(), [
    ['minWidth10px', 'min-w-10px'],
    ['height10px', 'h-10px']
  ])
})
