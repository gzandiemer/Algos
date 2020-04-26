const mostFrequentElement = require('./index')

test('mostFrequentElement function exists', () => {
  expect(typeof mostFrequentElement).toEqual('function')
})

test('most frequent is 7', () => {
  expect(
    mostFrequentElement(
      2,
      3,
      4,
      5,
      6,
      7,
      3,
      4,
      5,
      6,
      7,
      8,
      4,
      5,
      6,
      7,
      8,
      9,
      5,
      6,
      7,
      8,
      9,
      10,
      6,
      7,
      8,
      9,
      10,
      11,
      7,
      8,
      9,
      10,
      11,
      12
    )
  ).toEqual(7)
})
