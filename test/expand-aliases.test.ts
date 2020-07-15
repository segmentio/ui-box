import expandAliases from '../src/expand-aliases'

test('expands an alias', () => {
  expect(
    expandAliases({
      margin: '10px'
    })
  ).toEqual(
    new Map([
      ['marginBottom', '10px'],
      ['marginLeft', '10px'],
      ['marginRight', '10px'],
      ['marginTop', '10px']
    ])
  )
})

test('aliases override earlier props', () => {
  expect(
    expandAliases({
      marginTop: '20px',
      margin: '10px'
    })
  ).toEqual(
    new Map([
      ['marginTop', '10px'],
      ['marginBottom', '10px'],
      ['marginLeft', '10px'],
      ['marginRight', '10px']
    ])
  )
})

test('props override earlier aliases', () => {
  expect(
    expandAliases({
      margin: '10px',
      marginTop: '20px'
    })
  ).toEqual(
    new Map([
      ['marginBottom', '10px'],
      ['marginLeft', '10px'],
      ['marginRight', '10px'],
      ['marginTop', '20px']
    ])
  )
})

test('maintains original prop order', () => {
  expect(
    expandAliases({
      width: '10px',
      height: '10px',
      marginTop: '10px'
    })
  ).toEqual(
    new Map([
      ['width', '10px'],
      ['height', '10px'],
      ['marginTop', '10px']
    ])
  )
})
