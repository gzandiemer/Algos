const insertionSort = require('./index.js');

test('insertionSort is a function', () => {
  expect(typeof insertionSort).toEqual('function');
});

test('array with 2', () => {
  expect(insertionSort([3,0])).toEqual([0,3]);
});

test('array with 5', () => {
  expect(insertionSort([3,2,6,3,8])).toEqual([2,3,3,6,8]);
});

test('array with 7', () => {
  expect(insertionSort([2,12,56,36,9,34,51])).toEqual([2,9,12,34,36,51,56]);
});

test('array with 9', () => {
  expect(insertionSort([3,5,2,1,5,7,8,4,9])).toEqual([1,2,3,4,5,5,7,8,9]);
});

test('array with chars', () => {
  expect(insertionSort(['a','b','f','e','s'])).toEqual(['a','b','e','f','s']);
});

test('array with double numbers', () => {
  expect(insertionSort([22.56,23.23,23.13,23])).toEqual([22.56,23,23.13,23.23]);
});



