import React from 'react'
import Box, { keyframes } from '../../src'

const KeyframesStory: React.FC = () => {
  const translateTo0 = {
    transform: 'translate3d(0,0,0)'
  }
  const translateNeg30 = {
    transform: 'translate3d(0, -30px, 0)'
  }

  const translateNeg15 = {
    transform: 'translate3d(0, -15px, 0)'
  }

  const translateNeg4 = {
    transform: 'translate3d(0,-4px,0)'
  }

  // Based on https://emotion.sh/docs/keyframes
  const bounce = keyframes('bounce', {
    from: translateTo0,
    20: translateTo0,
    40: translateNeg30,
    43: translateNeg30,
    53: translateTo0,
    70: translateNeg15,
    80: translateTo0,
    90: translateNeg4,
    to: translateTo0
  })

  return (
    <Box>
      Single prop
      <Box animation={`${bounce} 1s ease 0s infinite normal none running`}>some bouncing text!</Box>
      Separate props
      <Box
        animationName={bounce}
        animationDuration="1s"
        animationTimingFunction="ease"
        animationDelay="0s"
        animationIterationCount="infinite"
        animationDirection="normal"
        animationFillMode="none"
        animationPlayState="running"
      >
        some bouncing text!
      </Box>
    </Box>
  )
}

export default KeyframesStory
