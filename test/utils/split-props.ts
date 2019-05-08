import test from 'ava'
import splitProps from '../../src/utils/split-props'

test('splits props', t => {
  const props = {
    background: 'red',
    color: 'blue'
  }
  const keys = ['background']
  t.deepEqual(splitProps(props, keys), {
    matchedProps: {
      background: 'red'
    },
    remainingProps: {
      color: 'blue'
    }
  })
})
