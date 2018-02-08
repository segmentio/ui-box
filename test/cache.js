import test from 'ava'
import cache from '../src/cache'

test.afterEach(() => {
  cache.empty()
})

test('caches a className', t => {
  cache.set('minWidth', '10px', 'min-w-10px')
  t.is(cache.get('minWidth', '10px'), 'min-w-10px')
})

test('validates the value', t => {
  t.throws(() => {
    cache.set('width', { herpa: 'derp' }, 'w-10px')
  }, /invalid cache value/)
})

test('exports the cache', t => {
  cache.set('minHeight', '10px', 'min-h-10px')
  t.deepEqual(cache.export(), [['minHeight10px', 'min-h-10px']])
})

test('hydrates the cache', t => {
  const fixture = [['height10px', 'h-10px']]
  cache.hydrate(fixture)
  t.deepEqual(cache.export(), fixture)
})

test('existing keys are maintained when hydrating', t => {
  cache.set('minWidth', '10px', 'min-w-10px')
  cache.hydrate([['height10px', 'h-10px']])
  t.deepEqual(cache.export(), [
    ['minWidth10px', 'min-w-10px'],
    ['height10px', 'h-10px']
  ])
})
