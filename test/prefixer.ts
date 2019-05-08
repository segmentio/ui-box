import test from 'ava'
import prefixer from '../src/prefixer'

test('prefixes properties', t => {
  t.deepEqual(prefixer('userSelect', 'none'), [
    {
      property: '-webkit-user-select',
      value: 'none'
    },
    {
      property: '-moz-user-select',
      value: 'none'
    },
    {
      property: '-ms-user-select',
      value: 'none'
    },
    {
      property: 'user-select',
      value: 'none'
    }
  ])
})

test('prefixes values', t => {
  t.deepEqual(prefixer('display', 'flex'), [
    {
      property: 'display',
      value: '-webkit-box'
    },
    {
      property: 'display',
      value: '-moz-box'
    },
    {
      property: 'display',
      value: '-ms-flexbox'
    },
    {
      property: 'display',
      value: '-webkit-flex'
    },
    {
      property: 'display',
      value: 'flex'
    }
  ])
})
