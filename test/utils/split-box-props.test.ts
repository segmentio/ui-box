import splitBoxProps from '../../src/utils/split-box-props'

test('splits box props', () => {
  const props = {
    background: 'red',
    disabled: true
  }
  expect(splitBoxProps(props)).toEqual({
    matchedProps: {
      background: 'red'
    },
    remainingProps: {
      disabled: true
    }
  })
})
