import test from 'ava'
import flattenObject from '../src/utils/flatten-object'
import { KeyframesTimeline } from '../src/types/keyframes'
import keyframes from '../src/keyframes'
import hash from '@emotion/hash'
import * as stylesheet from '../src/styles'
import * as cache from '../src/cache'

test.beforeEach(() => {
  cache.clear()
  stylesheet.clear()
})

test.serial('returns name with hashed timeline value', t => {
  const timeline: KeyframesTimeline = {
    from: {
      opacity: 0,
      transform: 'translateY(-120%)'
    },
    to: {
      transform: 'translateY(0)'
    }
  }
  const expectedHash = hash(flattenObject(timeline))

  const name = keyframes('openAnimation', timeline)

  t.is(name, `openAnimation_${expectedHash}`)
})

test.serial('should check cache before inserting styles when called multiple times', t => {
  const timeline: KeyframesTimeline = {
    from: {
      opacity: 0,
      transform: 'translateY(-120%)'
    },
    to: {
      transform: 'translateY(0)'
    }
  }

  keyframes('openAnimation', timeline)
  keyframes('openAnimation', timeline)

  const styles = stylesheet.getAll()
  const matches = styles.match(/@keyframes/g) || []
  t.is(matches.length, 1)
})

test.serial('should insert keyframes styles', t => {
  const timeline: KeyframesTimeline = {
    from: {
      opacity: 0,
      transform: 'translateY(-120%)'
    },
    to: {
      transform: 'translateY(0)'
    }
  }

  keyframes('openAnimation', timeline)

  const styles = stylesheet.getAll()
  t.is(
    styles,
    `@keyframes openAnimation_65p985 {
  from {
    opacity: 0;
    transform: translateY(-120%);
  }
  to {
    transform: translateY(0);
  }
}`
  )
})
