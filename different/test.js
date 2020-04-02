const difference = require('./index')

test('Difference function is defined', () => {
  expect(typeof difference).toEqual('function')
})

test('calculates correct fib value for 1', () => {
  expect(difference(10, 12)).toEqual(2)
})

test('calculates correct fib value for 2', () => {
  expect(difference(71293781758123, 72784)).toEqual(71293781685339)
})

test('calculates correct fib value for 3', () => {
  expect(difference(1, 12345677654321)).toEqual(12345677654320)
})
