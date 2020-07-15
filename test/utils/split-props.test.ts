import splitProps from '../../src/utils/split-props'

test('splits props', () => {
  const props = {
    background: 'red',
    color: 'blue',
  }
  expect(splitProps(props, ['background'])).toEqual({
    matchedProps: {
      background: 'red',
    },
    remainingProps: {
      color: 'blue',
    },
  })
})
