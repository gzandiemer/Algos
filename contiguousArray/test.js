const findMaxLength = require('./index');

test('findMaxLength function exists', () => {
    expect(typeof findMaxLength).toEqual('function');
});

test('leetcode ex 1', () => {
  expect(findMaxLength([0,1])).toEqual(2);
});

test('leetcode ex 2', () => {
  expect(findMaxLength([0,1,0])).toEqual(2);
});

test('leetcode ex 3', () => {
  expect(findMaxLength([0,0,1])).toEqual(2);
});


test('random ex', () => {
  expect(findMaxLength([0,1,1,0,1,1,1,0,1,0])).toEqual(4);
});

test('random ex 2', () => {
  expect(findMaxLength([0,1,0,1,1,1,0,1,1,0])).toEqual(4);
});

test('random ex 3', () => {
  expect(findMaxLength([1,1,1,0,0,1,0,0,0,1])).toEqual(10);
});

test('random ex 4', () => {
  expect(findMaxLength([0,0,1,1,0,1,1,1,0,0,1,1,0,0,1])).toEqual(14);
});

test('leetcode ex 3', () => {
  expect(findMaxLength([0,1,1,0,1,1,1,0])).toEqual(4);
});

test('1 element', () => {
  expect(findMaxLength([1])).toEqual(0);
});

test('only 0s and 1s', () => {
  expect(findMaxLength([1,1,0,0,1,1,0,0,1,1,0,0,0])).toEqual(12);
});

test('leetcode 4', () => {
  expect(findMaxLength([0,0,0,1,1,1,0])).toEqual(6);
});

test('leetcode 4', () => {
  expect(findMaxLength([0,0,0,1,1,1,1,1,0])).toEqual(6);
});

test('leetcode 5', () => {
  expect(findMaxLength([0,0,1,0,0,0,1,1])).toEqual(6);
});

