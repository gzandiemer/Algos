const maxSubArray = require('./index.js');

test('maxSubArray function exists', () => {
    expect(typeof maxSubArray).toEqual('function');
});

test('sub array: [4,-1,2,1]', () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
});

test('sub array: [1,2,-1,2]', () => {
    expect(maxSubArray([-4,1,2,-1,2])).toEqual(4);
});

test('sub array: [2,1,7]', () => {
    expect(maxSubArray([2,1,7,-3,-3,1,2])).toEqual(10);
});

test('sub array: [5,-4,0,9]', () => {
    expect(maxSubArray([0,-4,5,-4,0,9,-2,2,-9])).toEqual(10);
});

test('only one element smaller than 0', () => {
  expect(maxSubArray([-1])).toEqual(-1);
});

test('sub array: [4,5,6]', () => {
    expect(
      maxSubArray([1,2,-3,1,2,3,4,-5,6,-9,4,5,6,-8,8])
    ).toEqual(17);
});