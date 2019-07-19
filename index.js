module.exports.parse = (input) => {
  if (isFizz(input) && isBuzz(input)) return 'FizzBuzz'
  if (isBuzz(input)) return 'Buzz'
  if (isFizz(input)) return 'Fizz'
  return input.toString()
}
function isBuzz (input) {
  return input % 5 === 0
}

function isFizz (input) {
  return input % 3 === 0
}
