import test from 'ava'
import * as plugins from '../src/plugins'

const originalNodeEnv = process.env.NODE_ENV
test.afterEach.always(() => {
  process.env.NODE_ENV = originalNodeEnv
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

test('removes plugins', t => {
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
  plugins.clear()
  const result = plugins.apply(ruleset)
  t.deepEqual(result, ruleset)
})

test('errors on plugins in dev that return invalid rules', t => {
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
      rules: { bad: 'rule' }
    }
  })
  t.throws(() => plugins.apply(ruleset), /invalid RuleSet/)
})

test('skips plugins in production that return invalid rules', t => {
  process.env.NODE_ENV = 'production'
  const ruleset = {
    selector: '.ub-min-w_10px',
    rules: [
      { property: 'min-width', value: '10px' },
      { property: 'user-select', value: 'none' }
    ]
  }
  plugins.use(({ selector, rules }) => {
    return {
      selector: `#bad-div ${selector}`,
      rules: { bad: 'rule' }
    }
  })
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
