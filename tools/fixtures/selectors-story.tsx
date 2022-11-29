import React from 'react'
import Box from '../../src'

const SelectorsStory: React.FC = () => {
  return (
    <Box>
      <Box>
        Border style on hover
        <Box
          is="input"
          selectors={{
            '&:hover': { borderColor: 'red' }
          }}
        />
      </Box>
      <Box>
        No border style on hover - :not(:disabled) selector
        <Box
          is="input"
          disabled={true}
          selectors={{
            '&:hover:not(:disabled)': { borderColor: 'blue' }
          }}
        />
      </Box>
      <Box selectors={{ '& .child:hover': { backgroundColor: 'red' } }}>
        Red background on child hover
        <Box className="child" backgroundColor="blue" width={200} height={100} />
        <Box className="child" backgroundColor="yellow" width={200} height={100} />
        <Box className="child" backgroundColor="green" width={200} height={100} />
      </Box>
      <Box selectors={{ '& .foo:hover, .bar:hover': { backgroundColor: 'green' } }}>
        Green background on child hover (comma-separated class name selectors)
        <Box className="foo" backgroundColor="blue" width={200} height={100} />
        <Box className="bar" backgroundColor="yellow" width={200} height={100} />
      </Box>
      Pink background on :focus or :hover
      <Box selectors={{ '&:focus,:hover': { backgroundColor: 'pink' } }} width={200} height={100} />
      Nested selector - blue background when <Box is="code">data-active=true</Box>, red background on hover
      <Box
        data-active={true}
        height={100}
        width={200}
        selectors={{
          '[data-active=true]': {
            backgroundColor: 'blue',
            '&:hover': {
              backgroundColor: 'red'
            }
          }
        }}
      />
    </Box>
  )
}

export default SelectorsStory
