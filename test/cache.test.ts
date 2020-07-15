import * as cache from '../src/cache'

test(() => {
  cache.clear()
})

test('caches a className', () => {
  cache.set('minWidth', '10px', 'min-w-10px')
  expect(cache.get('minWidth', '10px')).toBe('min-w-10px')
})

test('validates the value', () => {
  expect(() => {
    cache.set('width', { herpa: 'derp' }, 'w-10px')
  }).toThrowError(/invalid cache value/)
})

test('returns the cache entries', () => {
  cache.set('minHeight', '10px', 'min-h-10px')
  t.log(cache.entries())
  expect(cache.entries()).toEqual([['minHeight10px', 'min-h-10px']])
})

test('hydrates the cache', () => {
  const fixture: [string, string][] = [['height10px', 'h-10px']]
  cache.hydrate(fixture)
  expect(cache.entries()).toEqual(fixture)
})

test('existing keys are maintained when hydrating', () => {
  cache.set('minWidth', '10px', 'min-w-10px')
  cache.hydrate([['height10px', 'h-10px']])
  expect(cache.entries()).toEqual([
    ['minWidth10px', 'min-w-10px'],
    ['height10px', 'h-10px'],
  ])
})
