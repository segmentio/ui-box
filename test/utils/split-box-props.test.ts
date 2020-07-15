import test from 'ava'
import splitBoxProps from '../../src/utils/split-box-props'

test('splits box props', t => {
  const props = {
    background: 'red',
    disabled: true
  }
  t.deepEqual(splitBoxProps(props), {
    matchedProps: {
      background: 'red'
    },
    remainingProps: {
      disabled: true
    }
  })
})
