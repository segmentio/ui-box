import getCss from '../src/get-css'

const originalNodeEnv = process.env.NODE_ENV
beforeEach(() => {
  process.env.NODE_ENV = originalNodeEnv
})

test('supports basic prop + value', () => {
  const propInfo = {
    className: 'min-w',
    cssName: 'min-width',
    jsName: 'minWidth'
  }
  const result = getCss(propInfo, '10px')
  expect(result).toEqual({
    className: 'ub-min-w_10px',
    styles: `
.ub-min-w_10px {
  min-width: 10px;
}`
  })
})

test('supports number value', () => {
  const propInfo = {
    className: 'min-w',
    cssName: 'min-width',
    jsName: 'minWidth'
  }
  const result = getCss(propInfo, 10)
  expect(result).toEqual({
    className: 'ub-min-w_10px',
    styles: `
.ub-min-w_10px {
  min-width: 10px;
}`
  })
})

test('adds prefixes', () => {
  const propInfo = {
    className: 'usr-slct',
    cssName: 'user-select',
    jsName: 'userSelect',
    safeValue: true,
    isPrefixed: true
  }
  const result = getCss(propInfo, 'none')
  expect(result!.styles).toEqual(`
.ub-usr-slct_none {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}`)
})

test('returns minified css in production', () => {
  process.env.NODE_ENV = 'production'
  const propInfo = {
    className: 'usr-slct',
    cssName: 'user-select',
    jsName: 'userSelect',
    safeValue: true,
    isPrefixed: true
  }
  const result = getCss(propInfo, 'none')
  expect(result!.styles).toEqual(
    '.ub-usr-slct_none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}'
  )
})
