const productExceptSelf = require('./index.js');

test('productExceptSelf function exists', () => {
    expect(typeof productExceptSelf).toEqual('function');
});

test('leetcode ex 1', () => {
    expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6]);
});

test('random arr 1', () => {
    expect(productExceptSelf([0,5,2,3,6])).toEqual([180,0,0,0,0]);
});

test('random arr 2', () => {
    expect(productExceptSelf([2,2,-1,-3,1,3])).toEqual([18,18,-36,-12,36,12]);
});


test('two elements', () => {
  expect(productExceptSelf([-1,10])).toEqual([10,-1]);
});

test('3 elements', () => {
    expect(
      productExceptSelf([10,0,10])
    ).toEqual([0,100,0]);
});