const backspaceCompare = require('./index').backspaceCompare

test('backspaceCompare function exists', () => {
    expect(typeof backspaceCompare).toEqual('function')
})

test('leetcode ex 1', () => {
  expect(backspaceCompare("ab#c", "ad#c")).toEqual(true)
})

test('leetcode ex 2', () => {
  expect(backspaceCompare("ab##", "c#d#")).toEqual(true)
})

test('leetcode ex 3', () => {
    expect(backspaceCompare("a##c", "#a#c")).toEqual(true)
})


test('leetcode ex 4', () => {
  expect(backspaceCompare("a#c", "b")).toEqual(false)
})