const middleNode = require('./index').middleNode

test('middleNode function exists', () => {
    expect(typeof middleNode).toEqual('function')
})

test('leetcode ex 1', () => {
  expect(middleNode([1,2,3,4,5])).toEqual([3,4,5])
})

test('leetcode ex 2', () => {
  expect(middleNode([1,2,3,4,5,6])).toEqual([4,5,6])
})

test('2 middle nodes', () => {
    expect(middleNode([1,2,3,4,5,6,7,8,9,10,11,12])).toEqual([7,8,9,10,11,12])
})


test('array with 1 item', () => {
  expect(middleNode([1])).toEqual([1])
})

test('array with 2 items', () => {
  expect(middleNode([1,2])).toEqual([2])
})
