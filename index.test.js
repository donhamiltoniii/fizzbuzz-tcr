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

  it('returns "2" for 2', () => {
    const result = FizzBuzz.parse(2)
    assert.equal(result, '2')
  })

  describe('Fizz', () => {
    it('returns "Fizz" for 3', () => {
      const result = FizzBuzz.parse(3)
      assert.equal(result, 'Fizz')
    })
  })
})
