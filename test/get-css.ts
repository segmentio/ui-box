import test from 'ava'
import getCss from '../src/get-css'

const originalNodeEnv = process.env.NODE_ENV
test.afterEach.always(() => {
  process.env.NODE_ENV = originalNodeEnv
})

test('supports basic prop + value', t => {
  const propInfo = {
    className: 'min-w',
    cssName: 'min-width',
    jsName: 'minWidth'
  }
  const result = getCss(propInfo, '10px')
  t.deepEqual(result, {
    className: 'ub-min-w_10px',
    styles: `
.ub-min-w_10px {
  min-width: 10px;
}`,
    rules: [{ property: 'min-width', value: '10px' }]
  })
})

test('supports number value', t => {
  const propInfo = {
    className: 'min-w',
    cssName: 'min-width',
    jsName: 'minWidth'
  }
  const result = getCss(propInfo, 10)
  t.deepEqual(result, {
    className: 'ub-min-w_10px',
    styles: `
.ub-min-w_10px {
  min-width: 10px;
}`,
    rules: [{ property: 'min-width', value: '10px' }]
  })
})

test('adds prefixes', t => {
  const propInfo = {
    className: 'usr-slct',
    cssName: 'user-select',
    jsName: 'userSelect',
    safeValue: true,
    isPrefixed: true
  }
  const result = getCss(propInfo, 'none')
  t.deepEqual(
    result.styles,
    `
.ub-usr-slct_none {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}`
  )
})

test.serial('returns minified css in production', t => {
  process.env.NODE_ENV = 'production'
  const propInfo = {
    className: 'usr-slct',
    cssName: 'user-select',
    jsName: 'userSelect',
    safeValue: true,
    isPrefixed: true
  }
  const result = getCss(propInfo, 'none')
  t.deepEqual(
    result.styles,
    '.ub-usr-slct_none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}'
  )
})

test('appends selector when present', t => {
  const propInfo = {
    className: 'bg-clr',
    cssName: 'background-color',
    jsName: 'backgroundColor'
  }
  const result = getCss(propInfo, 'blue', ':hover')
  t.deepEqual(result, {
    className: 'ub-bg-clr_nfznl2',
    styles: `
.ub-bg-clr_nfznl2:hover {
  background-color: blue;
}`,
    rules: [{ property: 'background-color', value: 'blue' }]
  })
})
