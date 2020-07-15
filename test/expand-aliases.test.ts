import test from 'ava'
import expandAliases from '../src/expand-aliases'

test('expands an alias', t => {
  t.deepEqual(
    expandAliases({
      margin: '10px'
    }),
    new Map([
      ['marginBottom', '10px'],
      ['marginLeft', '10px'],
      ['marginRight', '10px'],
      ['marginTop', '10px']
    ])
  )
})

test('aliases override earlier props', t => {
  t.deepEqual(
    expandAliases({
      marginTop: '20px',
      margin: '10px'
    }),
    new Map([
      ['marginTop', '10px'],
      ['marginBottom', '10px'],
      ['marginLeft', '10px'],
      ['marginRight', '10px']
    ])
  )
})

test('props override earlier aliases', t => {
  t.deepEqual(
    expandAliases({
      margin: '10px',
      marginTop: '20px'
    }),
    new Map([
      ['marginBottom', '10px'],
      ['marginLeft', '10px'],
      ['marginRight', '10px'],
      ['marginTop', '20px']
    ])
  )
})

test('maintains original prop order', t => {
  t.deepEqual(
    expandAliases({
      width: '10px',
      height: '10px',
      marginTop: '10px'
    }),
    new Map([['width', '10px'], ['height', '10px'], ['marginTop', '10px']])
  )
})
