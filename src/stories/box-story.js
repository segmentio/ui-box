import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook'
import createBox from '../createBox'
import Markdown from 'react-remarkable'

const Box = createBox({
  behavior: ['dimensions', 'display']
})

export default function boxStory (module) {
  storiesOf('Box', module)
    .add('usage', () => (
      <Markdown>
{`
# Box

The Box component is the base component for most other components, by default it is a \`div\`.
All the higher order components in \`enhancers\` are applied to Box.

## is='...' API

\`\`\`
<Box>div by default</Box>
<Box is='span'>now a span</Box>
<Box is='h1'>now a h1</Box>
<Box is='a'>now a anchor tag</Box>
<Box is={Link}>now a Link, use with caution</Box>
\`\`\`

## Display API

Available on \`<Box />\` or \`withDisplay(Comp)\`.
Uses inline styles.

\`\`\`
<Box display='block' />
<Box display='inline-block' />
<Box display='flex' />
\`\`\`

prop | value | description
-----|-------|-------------
\`display\`| block, inline-block, inline, table, table-row, table-cell, flex, inline-flex | display: x;

## Dimensions API

Available on \`<Box />\` or \`withDimensions(Comp)\`.
Uses inline styles.

\`\`\`
<Box width='200px' />
<Box width={6} />
<Box height='40px' />
<Box height='40px' width='40px' />
<Box minWidth='100px' />
\`\`\`

prop | type | description
-----|------| -------
\`height\`| string | height: x;
\`width\`| string/[1..12] | given a number 1..12 as x, return {100/x}%
\`minWidth\`| string | min-width: x;
\`minHeight\`| string | min-height: x;
\`maxWidth\`| string | max-width: x;
\`maxHeight\`| string | max-height: x;

## Text Styles API

Available on \`<Box />\` or \`withTextStyles(Comp)\`. Uses glamor.

\`\`\`
<Box textStyle='display1'>Display (1)</Box>
<Box textStyle='display2'>Display 2</Box>
<Box textStyle='display3'>Display 3</Box>
<Box textStyle='display4'>Display 4</Box>
<Box textStyle='display5'>Display 5</Box>
<Box textStyle='body1'>Body (1)</Box>
<Box textStyle='body2'>Body 2</Box>
<Box textStyle='mono'>Mono</Box>
<Box textStyle='caps1'>Caps 1</Box>
<Box textStyle='caps2'>Caps 2</Box>
\`\`\`

`}
      </Markdown>
    )).add('display', () => (
      <Box>
        <Box display='block'>Hello</Box>
        <Box display={['inline', 'block']}>Hello</Box>
      </Box>
    )).add('dimensions', () => (
      <Box>
        <Box width='240px' style={{ backgroundColor: 'red' }}>Static</Box>
        <Box height='240px' style={{ backgroundColor: 'grey' }}>Static</Box>
        <Box width={['120px', '240px']} style={{ backgroundColor: 'red' }}>Responsive</Box>
        <Box width={[['60px', '120px'], '240px']} style={{ backgroundColor: 'red' }}>Responsive</Box>
        <Box width={[['60px', '120px'], ['240px', '400px']]} style={{ backgroundColor: 'red' }}>Responsive</Box>
        <Box height={['120px', '240px']} style={{ backgroundColor: 'grey' }}>Responsive</Box>
      </Box>
    ))
}
