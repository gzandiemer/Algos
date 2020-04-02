const mostLikelySum = require('./index')

test('maxChar function exists', () => {
  expect(typeof mostLikelySum).toEqual('function')
})

test('Find with 6, 6', () => {
  expect(mostLikelySum(6, 6)).toEqual(7)
})

test('Find with 6, 4', () => {
  expect(mostLikelySum(6, 4)).toEqual(5, 6, 7)
})

test('Find put with 12,20', () => {
  expect(mostLikelySum(12, 20)).toEqual(13, 14, 15, 16, 17, 18, 19, 20, 21)
})
