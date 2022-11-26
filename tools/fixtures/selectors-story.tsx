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
    </Box>
  )
}

export default SelectorsStory
