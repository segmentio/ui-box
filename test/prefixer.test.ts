import prefixer from '../src/prefixer'

test('prefixes properties', () => {
  expect(prefixer('userSelect', 'none')).toEqual([
    {
      property: '-webkit-user-select',
      value: 'none',
    },
    {
      property: '-moz-user-select',
      value: 'none',
    },
    {
      property: '-ms-user-select',
      value: 'none',
    },
    {
      property: 'user-select',
      value: 'none',
    },
  ])
})

test('prefixes values', () => {
  expect(prefixer('display', 'flex')).toEqual([
    {
      property: 'display',
      value: '-webkit-box',
    },
    {
      property: 'display',
      value: '-moz-box',
    },
    {
      property: 'display',
      value: '-ms-flexbox',
    },
    {
      property: 'display',
      value: '-webkit-flex',
    },
    {
      property: 'display',
      value: 'flex',
    },
  ])
})
