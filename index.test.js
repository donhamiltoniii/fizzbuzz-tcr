/* global describe, it */
const assert = require('chai').assert
const FizzBuzz = require('./index')

describe('Canary', () => {
  it('should run', () => {
    assert.isTrue(true)
  })
})

describe('FizzBuzz', () => {
  it('returns "1" for 1', () => {
    const result = FizzBuzz.parse(1)
    assert.equal(result, '1')
  })
})
