const mergeSort = require('./index.js').mergeSort;

test('mergeSort is a function', () => {
  expect(typeof mergeSort).toEqual('function');
});

test('array with 2', () => {
  expect(mergeSort([3,0])).toEqual([0,3]);
});

test('array with 5', () => {
  expect(mergeSort([3,2,6,3,8])).toEqual([2,3,3,6,8]);
});

test('array with 7', () => {
  expect(mergeSort([2,12,56,36,9,34,51])).toEqual([2,9,12,34,36,51,56]);
});

test('array with 9', () => {
  expect(mergeSort([3,5,2,1,5,7,8,4,9])).toEqual([1,2,3,4,5,5,7,8,9]);
});

test('array with chars', () => {
  expect(mergeSort(['a','b','f','e','s'])).toEqual(['a','b','e','f','s']);
});

test('array with double numbers', () => {
  expect(mergeSort([22.56,23.23,23.13,23])).toEqual([22.56,23,23.13,23.23]);
});