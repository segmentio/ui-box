import splitProps from '../../src/utils/split-props'

test('splits props', () => {
  const props = {
    background: 'red',
    color: 'blue',
  }
  const keys = ['background']
  expect(splitProps(props, keys)).toEqual({
    matchedProps: {
      background: 'red',
    },
    remainingProps: {
      color: 'blue',
    },
  })
})
