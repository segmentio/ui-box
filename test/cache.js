import test from 'ava'
import * as cache from '../src/cache'

test.afterEach.always(() => {
  cache.clear()
})

test.serial('caches a className', t => {
  cache.set('minWidth', '10px', 'min-w-10px')
  t.is(cache.get('minWidth', '10px'), 'min-w-10px')
})

test.serial('validates the value', t => {
  t.throws(() => {
    cache.set('width', {herpa: 'derp'}, 'w-10px')
  }, /invalid cache value/)
})

test.serial('returns the cache entries', t => {
  cache.set('minHeight', '10px', 'min-h-10px')
  t.log(cache.entries())
  t.deepEqual(cache.entries(), [['minHeight10px', 'min-h-10px']])
})

test.serial('hydrates the cache', t => {
  const fixture = [['height10px', 'h-10px']]
  cache.hydrate(fixture)
  t.deepEqual(cache.entries(), fixture)
})

test.serial('existing keys are maintained when hydrating', t => {
  cache.set('minWidth', '10px', 'min-w-10px')
  cache.hydrate([['height10px', 'h-10px']])
  t.deepEqual(cache.entries(), [
    ['minWidth10px', 'min-w-10px'],
    ['height10px', 'h-10px']
  ])
})
