const countingElements = require('./index');

test('countingElements function exists', () => {
    expect(typeof countingElements).toEqual('function');
});

test('leetcode example 1', () => {
  expect(countingElements([1,2,3])).toEqual(2);
});

test('leetcode example 2', () => {
    expect(countingElements([1,1,3,3,5,5,7,7])).toEqual(0);
});

test('leetcode example 3', () => {
  expect(countingElements([1,3,2,3,5,0])).toEqual(3);
});

test('leetcode example 4 same numbers', () => {
  expect(countingElements([1,1,2,2])).toEqual(2);
});

test('x more than one but x+1 only one', () => {
  expect(countingElements([1,1,2])).toEqual(2);
});

