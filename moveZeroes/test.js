const moveZeroes = require('./index.js');

test('moveZeroes function exists', () => {
    expect(typeof moveZeroes).toEqual('function');
});

test('from leetcode given array [0,1,0,3,12]', () => {
    expect(moveZeroes([0,1,0,3,12])).toEqual([1,3,12,0,0]);
});

test('[0,0,30,-1,2]', () => {
    expect(moveZeroes([0,0,30,-1,2])).toEqual([30,-1,2,0,0]);
});

test('[2,0,7,-3,0,1,0]', () => {
    expect(moveZeroes([2,0,7,-3,0,1,0])).toEqual([2,7,-3,1,0,0,0]);
});

test('slightly longer array', () => {
    expect(moveZeroes([0,-4,5,-4,0,9,-2,0,2,-9,20,0,123,15,0,234])).toEqual([-4,5,-4,9,-2,2,-9,20,123,15,234,0,0,0,0,0]);
});

test('only one element', () => {
  expect(moveZeroes([-1])).toEqual([-1]);
});

test('[0,0]', () => {
    expect(
      moveZeroes([0,0])
    ).toEqual([0,0]);
});

