import test from 'ava'
import getCss from '../src/get-css'

test('supports basic prop + value', t => {
  const result = getCss('minWidth', '10px')
  t.deepEqual(result, {
    className: 'min-w_10px',
    css: `
.min-w_10px {
  min-width: 10px;
}`
  })
})

test('supports number value', t => {
  const result = getCss('minWidth', 10)
  t.deepEqual(result, {
    className: 'min-w_10px',
    css: `
.min-w_10px {
  min-width: 10px;
}`
  })
})

test('adds prefixes', t => {
  const result = getCss('userSelect', 'none')
  t.deepEqual(result, {
    className: 'usr-slct_none',
    css: `
.usr-slct_none {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}`
  })
})

test('throws an error for unsupported properties', t => {
  t.throws(() => {
    getCss('derp', '10px')
  }, /not supported/)
})
