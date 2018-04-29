import React from 'react'
import Box from '../src'

// Built as a regular function instead of a component to reduce impact on the benchmark
export default function() {
  return (
    <Box
      contentEditable // Test prop pass through
      clearfix
      backgroundColor="red"
      backgroundImage="url(https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg)"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundOrigin="border-box"
      backgroundRepeat="no-repeat"
      backgroundClip="padding-box"
      backgroundBlendMode="multiply"
      width="calc(25% - 10px)"
      height={100}
      minWidth={100}
      minHeight={100}
      maxWidth="100%"
      maxHeight="100%"
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
      alignItems="center"
      alignSelf="center"
      alignContent="center"
      justifyContent="center"
      justifySelf="center"
      flexDirection="column"
      flexWrap="wrap"
      flexGrow={1}
      flexShrink={1}
      flexBasis="10px"
      order={1}
      flexFlow="column wrap"
      cursor="pointer"
      userSelect="none"
      visibility="visible"
      pointerEvents="auto"
      display="flex"
      float="left"
      clear="both"
      zIndex="1"
      boxSizing="border-box"
      listStyle="disc outside"
      listStyleType="lower-greek"
      listStyleImage="none"
      listStylePosition="inside"
      opacity={1}
      overflow="auto"
      overflowY="auto"
      overflowX="auto"
      position="relative"
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
      textAlign="right"
      textDecoration="underline dotted"
      textTransform="capitalize"
      textShadow="#FC0 1px 0 10px"
      textOverflow="ellipsis"
      color="blue"
      font="16px sans-serif"
      fontFamily="Arial"
      fontSize="14px"
      fontStyle="italic"
      fontVariant="small-caps"
      fontWeight="bold"
      lineHeight={1.2}
      wordBreak="normal"
      wordWrap="break-word"
      letterSpacing="0.4em"
      transform="skew(10deg)"
    />
  )
}
