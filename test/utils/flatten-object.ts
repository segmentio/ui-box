import test from 'ava'
import flattenObject from '../../src/utils/flatten-object'

test.serial('flattens basic object', t => {
  const result = flattenObject({ width: 10, height: '20' })

  t.is(result, 'width:number:10;height:string:20')
})

test.serial('handles null values', t => {
  const result = flattenObject({ width: null })

  t.is(result, 'width:object:null')
})

test.serial('handles undefined values', t => {
  const result = flattenObject({ width: undefined })

  t.is(result, 'width:undefined:undefined')
})

test.serial('handles arrays', t => {
  const result = flattenObject({ fizz: [1, '2', { foo: 'bar' }] })

  t.is(result, 'fizz:array:[0:number:1,1:string:2,2:object:foo:string:bar]')
})

test.serial('flattens nested objects', t => {
  const result = flattenObject({
    baz: 'buzz',
    foo: {
      bar: 123
    }
  })

  t.is(result, 'baz:string:buzz;foo:object:bar:number:123')
})
