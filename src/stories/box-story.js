import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from '../'

const RedBox = props => (
  <Box
    backgroundColor="red"
    width="100px"
    height="100px"
    margin="20px"
    {...props}
  />
)

export default function boxStory(module) {
  storiesOf('Box', module)
    .add(`is=''`, () => (
      <Box>
        <Box is="h1">h1</Box>
        <Box is="h2">h2</Box>
        <Box is="h3">h3</Box>
        <Box is="p">p</Box>
        <Box is="strong">strong</Box>
        <Box is="input" />
      </Box>
    ))
    .add('background', () => (
      <Box>
        <Box background="red" width="100px" height="100px" />
        <Box backgroundColor="blue" width="100px" height="100px" />
        <Box
          backgroundImage="url(https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg)"
          backgroundSize="cover"
          backgroundPosition="center"
          width="100px"
          height="100px"
        />
      </Box>
    ))
    .add('click', () => (
      <Box>
        <Box
          cursor="pointer"
          onClick={() => {
            console.log('red');
          }}
          background="red"
          width="100px"
          height="100px"
        />
        <Box
          onClick={() => {
            console.log('blue');
          }}
          backgroundColor="blue"
          width="100px"
          height="100px"
        />
      </Box>
    ))
    .add('borderRadius', () => (
      <Box>
        <RedBox borderRadius="5px" />
        <RedBox borderRadius="10px" borderTopRightRadius="50px" />
        <RedBox borderRadius="10px" borderTopLeftRadius="50px" />
        <RedBox borderRadius="10px" borderBottomLeftRadius="50px" />
        <RedBox borderRadius="10px" borderBottomRightRadius="50px" />
      </Box>
    ))
    .add('borders', () => (
      <Box>
        <RedBox border="10px solid grey" />
        <RedBox border="10px solid" borderColor="blue" />
        <RedBox border="10px solid grey" borderColor="black" />
        <RedBox borderTop="10px solid grey" />
        <RedBox borderTop="10px solid grey" borderTopColor="black" />
        <RedBox borderTop="5px solid" borderTopStyle="dashed !important" />
        <RedBox borderBottom="10px solid grey" />
        <RedBox borderLeft="10px solid grey" />
      </Box>
    ))
    .add('boxShadow', () => (
      <Box>
        <RedBox boxShadow="0 10px 40px black" />
      </Box>
    ))
    .add('dimensions', () => (
      <Box>
        <RedBox />
        <RedBox minWidth="400px" />
        <RedBox minHeight="400px" />
      </Box>
    ))
    .add('display', () => (
      <Box>
        <RedBox display="inline-block" />
        <RedBox display="inline-block" />
      </Box>
    ))
    .add('flex', () => (
      <Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <RedBox />
          <RedBox />
          <RedBox />
        </Box>
      </Box>
    ))
    .add('overflow', () => (
      <Box>
        <Box width="40px" height="40px" overflow="hidden">
          <RedBox />
        </Box>
      </Box>
    ))
    .add('position', () => (
      <Box>
        <RedBox position="absolute" left="10px" bottom="10px" />
      </Box>
    ))
    .add('spacing', () => (
      <Box>
        <Box
          backgroundColor="red"
          width="100px"
          height="100px"
          marginTop="100px"
        />
      </Box>
    ))
    .add('text', () => (
      <Box>
        <Box textAlign="center">Center</Box>
        <Box textAlign="right">Right</Box>
        <Box color="red">Right</Box>
        <Box fontFamily="sans-serif">sans-serif</Box>
        <Box fontWeight="bold">bold</Box>
        <Box fontWeight="bold">bold</Box>
        <Box fontSize="72px">72px</Box>
      </Box>
    ))
    .add('utils', () => (
      <Box>
        <Box cursor="pointer">Center</Box>
        <Box boxSizing="border-box">boxSizing: border-box</Box>
      </Box>
    ))
    .add('innerRef', () => (
      <Box>
        <Box innerRef={ref => console.log(ref)}>innerRef</Box>
      </Box>
    ))
    .add('css', () => (
      <Box>
        <Box
          css={{ backgroundColor: 'red', ':hover': { backgroundColor: 'red' } }}
        >
          css
        </Box>
      </Box>
    ))
}
