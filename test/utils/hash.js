import test from 'ava'
import hash from '../../src/utils/hash'

test('hashes', t => {
  const result = hash(
    'url(https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg)'
  )
  t.is(result, '181xl07')
})
