import {describe, expect, test} from 'vitest'
import {increment} from './app'

describe('increment', () => {
  test('increments the integer by 1', () => {
    expect(increment(0, 10)).toBe(1)
  })
  test('does not increment the provided integer over the max', () => {
    expect(increment(10, 10)).toBe(10)
  })
  test('default max number is 10', () => {
    expect(increment(9)).toBe(10)
  })
})

