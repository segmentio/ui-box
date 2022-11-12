import test from 'ava'
import isProduction from '../../src/utils/is-production'

test.beforeEach(() => {
  process.env.NODE_ENV = 'development'
})

test.serial('should return false when NODE_ENV is undefined', t => {
  process.env.NODE_ENV = undefined

  const result = isProduction()

  t.is(result, false)
})

test.serial('should return false when NODE_ENV is null', t => {
  ;(process.env.NODE_ENV as any) = null

  const result = isProduction()

  t.is(result, false)
})

test.serial("should return false when NODE_ENV is not 'production'", t => {
  process.env.NODE_ENV = 'development'

  const result = isProduction()

  t.is(result, false)
})

test.serial("should return true when NODE_ENV is 'production'", t => {
  process.env.NODE_ENV = 'production'

  const result = isProduction()

  t.is(result, true)
})
