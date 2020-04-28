const reverse = require('./index.js')

test('reverse function exists', () => {
  expect(typeof reverse).toEqual('function')
})

test('codewars ex 1', () => {
  expect(reverse("Reverse this string, please!")).toEqual("Reverse siht string, !esaelp")
})

test('codewars ex 2', () => {
  expect(reverse("I really don't like reversing strings!")).toEqual("I yllaer don't ekil reversing !sgnirts")
})

test('codewars ex 3', () => {
  expect(reverse("Did it work?")).toEqual("Did ti work?")
})

test('codewars ex 3', () => {
  expect(reverse('')).toEqual('')
})

test('codewars prob ex', () => {
  expect(reverse('Not always  one   space between    words')).toEqual('Not syawla one ecaps between sdrow')
})