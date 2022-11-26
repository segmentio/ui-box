import React, { useState } from 'react'
import Box from '../../src'

const SelectorUniqueness: React.FC = () => {
  const [isInputDisabled, setIsInputDisabled] = useState(false)

  return (
    <Box display="flex" flexDirection="column" width={200}>
      Border style on hover
      <Box
        is="input"
        selectors={{
          '&:hover': { borderColor: 'red' }
        }}
      />
      Border style only when disabled
      <Box>
        Disable input
        <Box
          is="input"
          type="checkbox"
          onChange={() => setIsInputDisabled((disabled: boolean) => !disabled)}
          checked={isInputDisabled}
        />
      </Box>
      <Box
        is="input"
        disabled={isInputDisabled}
        selectors={{
          '&:disabled': { borderColor: 'red' }
        }}
      />
    </Box>
  )
}

export default SelectorUniqueness
