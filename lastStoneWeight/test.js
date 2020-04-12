const lastStoneWeight = require('./index');

test('lastStoneWeight function exists', () => {
    expect(typeof lastStoneWeight).toEqual('function');
});

test('2 same stones', () => {
  expect(lastStoneWeight([5,5])).toEqual(0);
});

test('2 different stones', () => {
  expect(lastStoneWeight([1,9])).toEqual(8);
});

test('leetcode example', () => {
  expect(lastStoneWeight([2,7,4,1,8,1])).toEqual(1);
});

test('random ex 1', () => {
    expect(lastStoneWeight([1,9,3,5,7,7])).toEqual(0);
});

test('random ex 2', () => {
  expect(lastStoneWeight([1,3,2,3,5,0])).toEqual(0);
});

test('2 same stones', () => {
  expect(lastStoneWeight([5,7,3,3,6,2,5,8,3,9,21,34,72,2])).toEqual(0);
});

test('2 different stones', () => {
  expect(lastStoneWeight([1,9,9])).toEqual(1);
});
