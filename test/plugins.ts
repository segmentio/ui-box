import test from 'ava'
import * as plugins from '../src/plugins'

test.afterEach.always(() => {
  plugins.clear()
})

test('applies a selector prefix to the styles', t => {
  const ruleset = {
    selector: '.ub-min-w_10px',
    rules: [
      { property: 'min-width', value: '10px' },
      { property: 'user-select', value: 'none' }
    ]
  }
  plugins.use(({ selector, rules }) => {
    return {
      selector: `#my-div ${selector}`,
      rules
    }
  })
  const result = plugins.apply(ruleset)
  t.deepEqual(result, {
    selector: '#my-div .ub-min-w_10px',
    rules: [
      { property: 'min-width', value: '10px' },
      { property: 'user-select', value: 'none' }
    ]
  })
})
