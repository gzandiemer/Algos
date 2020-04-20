const minPathSum = require('./index.js')

test('minPathSum finction exists', () => {
  expect(typeof minPathSum).toEqual('function');
});

test('leetcode ex 1', () => {
  expect(minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ])).toEqual(7);
});

test('leetcode ex 1', () => {
  expect(minPathSum([
    [2,6,6],
    [13,2,5],
    [3,7,2]
  ])).toEqual(17);
});

test('leetcode ex 1', () => {
  expect([
    [3,2,6],
    [4,8,9],
    [3,7,5]
  ]).toEqual(22);
});