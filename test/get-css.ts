import test from 'ava'
import getCss from '../src/get-css'
import * as plugins from '../src/plugins'

const originalNodeEnv = process.env.NODE_ENV
test.afterEach.always(() => {
  process.env.NODE_ENV = originalNodeEnv
  plugins.clear()
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
}`
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
}`
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

test('applies plugins', t => {
  const propInfo = {
    className: 'min-w',
    cssName: 'min-width',
    jsName: 'minWidth'
  }

  plugins.use(({ selector, rules }) => {
    return {
      selector: `#my-div ${selector}`,
      rules
    }
  })

  const result = getCss(propInfo, '10px')
  t.deepEqual(result, {
    className: 'ub-min-w_10px',
    styles: `
#my-div .ub-min-w_10px {
  min-width: 10px;
}`
  })
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
