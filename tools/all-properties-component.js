import React from 'react'
import Box from '../src'

// Built as a regular function instead of a component to reduce impact on the benchmark
export default function() {
  return (
    <Box
      contentEditable // Test prop pass through
      alignContent="center"
      alignItems="center"
      alignSelf="center"
      background="red"
      backgroundBlendMode="multiply"
      backgroundClip="padding-box"
      backgroundColor="red"
      backgroundImage="url(https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg)"
      backgroundOrigin="border-box"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      border="1px solid black"
      borderBottom="1px solid black"
      borderBottomColor="red"
      borderBottomLeftRadius={5}
      borderBottomRightRadius={5}
      borderBottomStyle="dashed"
      borderBottomWidth="2px"
      borderColor="red"
      borderLeft="1px solid black"
      borderLeftColor="red"
      borderLeftStyle="dashed"
      borderLeftWidth="2px"
      borderRadius={5}
      borderRight="1px solid black"
      borderRightColor="red"
      borderRightStyle="dashed"
      borderRightWidth="2px"
      borderStyle="dashed"
      borderTop="1px solid black"
      borderTopColor="red"
      borderTopLeftRadius={5}
      borderTopRightRadius={5}
      borderTopStyle="dashed"
      borderTopWidth="2px"
      borderWidth="2px"
      bottom={10}
      boxShadow="0 10px 40px black"
      boxSizing="border-box"
      clear="both"
      clearfix
      color="blue"
      cursor="pointer"
      display="flex"
      flex={1}
      flexBasis="10px"
      flexDirection="column"
      flexFlow="column wrap"
      flexGrow={1}
      flexShrink={1}
      flexWrap="wrap"
      float="left"
      font="16px sans-serif"
      fontFamily="Arial"
      fontSize="14px"
      fontStyle="italic"
      fontVariant="small-caps"
      fontWeight="bold"
      height={100}
      justifyContent="center"
      justifySelf="center"
      left={10}
      letterSpacing="0.4em"
      lineHeight={1.2}
      listStyle="disc outside"
      listStyleImage="none"
      listStylePosition="inside"
      listStyleType="lower-greek"
      margin={10}
      marginBottom={10}
      marginLeft={10}
      marginRight={10}
      marginTop={10}
      marginX={10}
      marginY={10}
      maxHeight="100%"
      maxWidth="100%"
      minHeight={100}
      minWidth={100}
      opacity={1}
      order={1}
      overflow="auto"
      overflowX="auto"
      overflowY="auto"
      padding={10}
      paddingBottom={10}
      paddingLeft={10}
      paddingRight={10}
      paddingTop={10}
      paddingX={10}
      paddingY={10}
      pointerEvents="auto"
      position="relative"
      right={10}
      textAlign="right"
      textDecoration="underline dotted"
      textOverflow="ellipsis"
      textShadow="#FC0 1px 0 10px"
      textTransform="capitalize"
      top={10}
      transform="skew(10deg)"
      transformOrigin="50% 50%"
      transition="background 1s ease-in 2s"
      transitionDelay="2s"
      transitionDuration="1s"
      transitionProperty="background"
      transitionTimingFunction="ease-in"
      userSelect="none"
      visibility="visible"
      whiteSpace="no-wrap"
      width="calc(25% - 10px)"
      wordBreak="normal"
      wordWrap="break-word"
      zIndex="1"
    />
  )
}
