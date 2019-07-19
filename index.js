module.exports.parse = (input) => {
  if (input === 5) return 'Buzz'
  if (input === 3) return 'Fizz'
  return input.toString()
}
