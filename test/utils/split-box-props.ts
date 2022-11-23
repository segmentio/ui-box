import test from 'ava'
import splitBoxProps from '../../src/utils/split-box-props'

test('splits box props', t => {
  const props = {
    background: 'red',
    disabled: true
  }
  t.deepEqual(splitBoxProps(props), {
    /* @ts-ignore We are only passing and expecting a partial object back */
    matchedProps: {
      background: 'red'
    },
    remainingProps: {
      disabled: true
    }
  })
})

test('includes selectors in matchedProps', t => {
  const props = {
    selectors: {
      '&:hover': {
        backgroundColor: 'red'
      }
    }
  }

  const result = splitBoxProps(props)

  t.deepEqual(result, {
    /* @ts-ignore We are only passing and expecting a partial object back */
    matchedProps: {
      selectors: {
        '&:hover': {
          backgroundColor: 'red'
        }
      }
    },
    remainingProps: {}
  })
})
