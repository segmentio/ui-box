import React, { CSSProperties } from 'react'
import { default as Box, configureSafeHref, BoxProps } from '../src'
import { storiesOf } from '@storybook/react'
import allPropertiesComponent from './all-properties-component'
import SelectorUniqueness from './fixtures/selector-uniquness-story'
import KeyframesStory from './fixtures/keyframes-story'
import SelectorsStory from './fixtures/selectors-story'

const RedBox: React.FunctionComponent<BoxProps<'div'>> = redBoxProps => (
  <Box background="red" width="100px" height="100px" margin="20px" {...redBoxProps} />
)

const logRef = (ref: Element | null) => console.log(ref)
const reactRef = React.createRef<HTMLDivElement>()

interface CustomProps {
  children: React.ReactNode
}

const CustomComp: React.FunctionComponent<CustomProps> = props => {
  return (
    <div>
      <Box is="h1">custom component</Box>
      {props.children}
    </div>
  )
}

storiesOf('Box', module)
  .add(`is=''`, () => {
    return (
      <Box>
        <Box is="h1">h1</Box>
        <Box is="h2">h2</Box>
        <Box is="h3">h3</Box>
        <Box is="p">p</Box>
        <Box is="strong">strong</Box>
        <Box is="input" />
      </Box>
    )
  })
  .add('safe `href`', () => {
    configureSafeHref({
      enabled: true
    })
    return (
      <Box paddingTop={30} borderTop="1px solid" marginTop={30}>
        <Box is="h2">Links</Box>
        <Box is="a" href="/something/afile">
          Internal Link
        </Box>
        <Box is="a" href="http://localhost:9009/test">
          Same Origin Link
        </Box>
        <Box is="a" href="https://apple.com">
          External Link
        </Box>
        <Box is="a" href="javascript:alert('hi')">
          Javascript protocol Link
        </Box>
        <Box is="a" href="javascript:alert('hi')" allowUnsafeHref={true}>
          Overwride Safe Href
        </Box>
      </Box>
    )
  })
  .add('unsafe `href`', () => {
    configureSafeHref({
      enabled: false
    })
    return (
      <Box paddingTop={30} borderTop="1px solid" marginTop={30}>
        <Box is="h2">Links</Box>
        <Box is="a" href="/something/afile">
          Internal Link
        </Box>
        <Box is="a" href="http://localhost:9009/test">
          Same Origin Link
        </Box>
        <Box is="a" href="https://apple.com">
          External Link
        </Box>
        <Box is="a" href="javascript:alert('hi')">
          Javascript protocol Link
        </Box>
        <Box is="a" href="javascript:alert('hi')" allowUnsafeHref={false}>
          Overwride Safe Href
        </Box>
      </Box>
    )
  })
  .add(`custom comp`, () => (
    <Box>
      <Box is={CustomComp}>
        <Box>chiiillld</Box>
      </Box>
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
      <RedBox borderTop="5px solid" borderTopStyle="dashed" />
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
      <Box backgroundColor="red" width="100px" height="100px" marginTop="100px" />
    </Box>
  ))
  .add('text', () => (
    <Box>
      <Box textAlign="center">Center</Box>
      <Box textAlign="right">Right</Box>
      <Box verticalAlign="middle">Middle</Box>
      <Box color="red">Right</Box>
      <Box fontFamily="sans-serif">sans-serif</Box>
      <Box fontWeight="bold">bold</Box>
      <Box fontWeight="bold">bold</Box>
      <Box fontSize="72px">72px</Box>
    </Box>
  ))
  .add('list', () => (
    <Box is="ol" listStyleType="lower-greek">
      <Box is="li">I՚m</Box>
      <Box is="li">a</Box>
      <Box is="li">list</Box>
    </Box>
  ))
  .add('utils', () => (
    <Box>
      <Box cursor="pointer">Center</Box>
      <Box boxSizing="border-box">boxSizing: border-box</Box>
    </Box>
  ))
  .add('ref', () => (
    <Box>
      <Box ref={logRef}>ref</Box>
    </Box>
  ))
  .add('ref as React ref', () => (
    <Box>
      <Box ref={reactRef}>React ref</Box>
    </Box>
  ))
  .add('props pass through', () => {
    interface CustomComponentProps {
      foo: string
      baz: number
      fizz: {
        buzz: boolean
      }
    }

    const CustomComponent: React.FC<CustomComponentProps> = props => <code>{JSON.stringify(props, undefined, 4)}</code>

    return (
      <Box display="flex" flexDirection="column">
        <Box is="input" type="file" />
        <Box is={CustomComponent} foo="bar" baz={123} fizz={{ buzz: true }} />
      </Box>
    )
  })
  .add('all properties', () => (
    <Box>
      {allPropertiesComponent()}
      {allPropertiesComponent()}
    </Box>
  ))
  .add('overrides', () => (
    <Box>
      <RedBox marginLeft="5px" />
    </Box>
  ))
  .add('selectors', () => <SelectorsStory />)
  .add('selector uniqueness', () => <SelectorUniqueness />)
  .add('style prop', () => {
    const style: CSSProperties = { backgroundColor: 'red', width: 200 }
    return <Box style={style}>{JSON.stringify(style, undefined, 4)}</Box>
  })
  .add('keyframes', () => <KeyframesStory />)
