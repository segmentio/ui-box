import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from '../src'

const RedBox = props => (
  <Box background="red" width="100px" height="100px" margin="20px" {...props} />
)

const logRef = ref => console.log(ref)

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
      <RedBox minWidth={400} />
      <RedBox minHeight={400} />
    </Box>
  ))
  .add('display', () => (
    <Box>
      <RedBox display="inline-block" />
      <RedBox display="inline">inline</RedBox>
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
      <Box innerRef={logRef}>innerRef</Box>
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
  .add('frankenstein monster', () => (
    <Box
      backgroundColor="red"
      backgroundImage="url(https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg)"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundOrigin="inherit"
      backgroundRepeat="no-repeat"
      backgroundClip="inherit"
      backgroundBlendMode="inherit"
      width={100}
      height={100}
      minWidth={100}
      minHeight={100}
      maxWidth={100}
      maxHeight={100}
      borderRadius={5}
      borderTopLeftRadius={5}
      borderTopRightRadius={5}
      borderBottomLeftRadius={5}
      borderBottomRightRadius={5}
      boxShadow="0 10px 40px black"
      border="1px solid black"
      borderColor="red"
      borderStyle="dashed"
      borderWidth="2px"
      borderLeft="1px solid black"
      borderLeftColor="red"
      borderLeftStyle="dashed"
      borderLeftWidth="2px"
      borderRight="1px solid black"
      borderRightColor="red"
      borderRightStyle="dashed"
      borderRightWidth="2px"
      borderBottom="1px solid black"
      borderBottomColor="red"
      borderBottomStyle="dashed"
      borderBottomWidth="2px"
      borderTop="1px solid black"
      borderTopColor="red"
      borderTopStyle="dashed"
      borderTopWidth="2px"
      flex={1}
      alignItems="inherit"
      alignSelf="inherit"
      alignContent="inherit"
      justifyContent="inherit"
      justifySelf="inherit"
      flexDirection="inherit"
      flexWrap="inherit"
      flexGrow="inherit"
      flexShrink="inherit"
      flexBasis="inherit"
      order="inherit"
      cursor="inherit"
      userSelect="inherit"
      visibility="inherit"
      pointerEvents="inherit"
      display="block"
      clearfix
      float="inherit"
      clear="inherit"
      zIndex="inherit"
      boxSizing="border-box"
      opacity={1}
      overflow="inherit"
      overflowY="inherit"
      overflowX="inherit"
      position="inherit"
      top={10}
      right={10}
      bottom={10}
      left={10}
      margin={10}
      marginTop={10}
      marginLeft={10}
      marginRight={10}
      marginBottom={10}
      marginY={10}
      marginX={10}
      padding={10}
      paddingTop={10}
      paddingLeft={10}
      paddingRight={10}
      paddingBottom={10}
      paddingY={10}
      paddingX={10}
      textAlign="inherit"
      textDecoration="inherit"
      textTransform="inherit"
      textOverflow="inherit"
      color="inherit"
      font="inherit"
      fontFamily="inherit"
      fontSize="inherit"
      fontStyle="inherit"
      fontVariant="inherit"
      fontWeight="inherit"
      lineHeight="inherit"
      wordBreak="inherit"
      wordWrap="inherit"
      letterSpacing="inherit"
      transform="inherit"
    >
      Frankenstein monster
    </Box>
  ))
