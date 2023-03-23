import test from 'ava'
import * as cache from '../src/cache'
import * as styles from '../src/styles'
import enhanceProps from '../src/enhance-props'

test.afterEach.always(() => {
  cache.clear()
  styles.clear()
})

test.serial('enhances a prop', t => {
  const { className, enhancedProps } = enhanceProps({ width: 10 })
  t.is(className, 'ub-w_10px')
  t.deepEqual(enhancedProps, {})
})

test.serial('expands aliases', t => {
  const { className, enhancedProps } = enhanceProps({ margin: 11 })
  t.is(className, 'ub-mb_11px ub-ml_11px ub-mr_11px ub-mt_11px')
  t.deepEqual(enhancedProps, {})
})

test.serial('injects styles', t => {
  enhanceProps({ width: 12 })
  t.is(
    styles.getAll(),
    `
.ub-w_12px {
  width: 12px;
}`
  )
})

test.serial('uses the cache', t => {
  enhanceProps({ width: 13 })
  enhanceProps({ width: 13 })
  t.is(
    styles.getAll(),
    `
.ub-w_13px {
  width: 13px;
}`
  )
  t.is(cache.get('width', 13), 'ub-w_13px')
})

test.serial('strips falsey enhancer props', t => {
  const { className, enhancedProps } = enhanceProps({ width: false })
  t.is(className, '')
  t.deepEqual(enhancedProps, {})
})

test.serial('does not strip enhancer props with 0 values', t => {
  const { className, enhancedProps } = enhanceProps({ width: 0 })
  t.is(className, 'ub-w_0px')
  t.deepEqual(enhancedProps, {})
})

test.serial('passes through non-enhancer props', t => {
  const expected = { disabled: true, foo: 'bar', baz: 123, fizz: { buzz: true } }

  const { className, enhancedProps } = enhanceProps(expected)

  t.is(className, '')
  t.deepEqual(enhancedProps, expected)
})

test.serial('passes through falsey non-enhancer props', t => {
  const { className, enhancedProps } = enhanceProps({ disabled: false })
  t.is(className, '')
  t.deepEqual(enhancedProps, { disabled: false })
})

test.serial('handles invalid values', t => {
  // @ts-ignore
  const { className, enhancedProps } = enhanceProps({ minWidth: true })
  t.is(className, '')
  t.deepEqual(enhancedProps, {})
})

test.serial('preserves style prop', t => {
  const expected = { style: { backgroundColor: 'red' } }

  const { enhancedProps } = enhanceProps(expected)

  t.deepEqual(enhancedProps, expected)
})

test.serial('converts styles in selectors to class name', t => {
  const { className, enhancedProps } = enhanceProps({
    selectors: {
      '&:hover': {
        backgroundColor: 'blue'
      }
    }
  })

  t.deepEqual(className, 'ub-bg-clr_blue_1k2el8q')
  t.deepEqual(enhancedProps, {})
})

test.serial('injects selector styles', t => {
  enhanceProps({
    selectors: {
      '&:hover': {
        backgroundColor: 'blue'
      }
    }
  })

  t.deepEqual(
    styles.getAll(),
    `
.ub-bg-clr_blue_1k2el8q:hover {
  background-color: blue;
}`
  )
})

test.serial('converts styles in nested selectors to class name', t => {
  const { className, enhancedProps } = enhanceProps({
    selectors: {
      '&[data-active]': {
        selectors: {
          '&:hover': {
            backgroundColor: 'blue'
          }
        }
      }
    }
  })

  t.deepEqual(className, 'ub-bg-clr_blue_187q98e')
  t.deepEqual(enhancedProps, {})
})

test.serial("selectors can be nested without 'selectors' key", t => {
  const { className, enhancedProps } = enhanceProps({
    selectors: {
      '&[data-active]': {
        '&:hover': {
          backgroundColor: 'blue'
        }
      }
    }
  })

  t.deepEqual(className, 'ub-bg-clr_blue_187q98e')
  t.deepEqual(enhancedProps, {})
})

test.serial('injects nested selector styles', t => {
  enhanceProps({
    selectors: {
      '&[data-active]': {
        selectors: {
          '&:hover': {
            backgroundColor: 'blue'
          }
        }
      }
    }
  })

  t.deepEqual(
    styles.getAll(),
    `
.ub-bg-clr_blue_187q98e[data-active]:hover {
  background-color: blue;
}`
  )
})

test.serial.only('multiple selectors with nested selector are expanded properly', t => {
  enhanceProps({
    selectors: {
      '&[aria-current="page"],&[aria-selected="true"]': {
        color: '#3366FF',

        '&:before': {
          transform: 'scaleY(1)'
        },

        '&:focus': {
          color: '#2952CC'
        }
      }
    }
  })

  t.deepEqual(
    styles.getAll(),
    `
.ub-color_3366FF_75lazh[aria-current="page"], .ub-color_3366FF_75lazh[aria-selected="true"] {
  color: #3366FF;
}
.ub-tfrm_qu4iyp_1d0tz5k[aria-current="page"]:before, .ub-tfrm_qu4iyp_1d0tz5k[aria-selected="true"]:before {
  transform: scaleY(1);
}
.ub-color_2952CC_1tznks7[aria-current="page"]:focus, .ub-color_2952CC_1tznks7[aria-selected="true"]:focus {
  color: #2952CC;
}`
  )
})
