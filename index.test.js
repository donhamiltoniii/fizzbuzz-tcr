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
    assertFizzBuzz(1, '1')
  })

  it('returns "2" for 2', () => {
    assertFizzBuzz(2, '2')
  })

  describe('> Fizz', () => {
    it('returns "Fizz" for 3', () => {
      assertFizzBuzz(3, 'Fizz')
    })

    it('returns "Fizz" for 6', () => {
      assertFizzBuzz(6, 'Fizz')
    })
  })

  describe('> Buzz', () => {
    it('returns "Buzz" for 5', () => {
      assertFizzBuzz(5, 'Buzz')
    })

    it('returns "Buzz" for 10', () => {
      assertFizzBuzz(10, 'Buzz')
    })
  })

  describe('> FizzBuzz', () => {
    it('returns "FizzBuzz" for 15', () => {
      assertFizzBuzz(15, 'FizzBuzz')
    })

    it('returns "FizzBuzz" for 30', () => {
      assertFizzBuzz(30, 'FizzBuzz')
    })
  })
})

function assertFizzBuzz (input, expectation) {
  const result = FizzBuzz.parse(input)
  assert.equal(result, expectation)
}
