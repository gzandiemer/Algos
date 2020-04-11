const diameterOfBinaryTree = require('./index');

test('diameterOfBinaryTree function exists', () => {
    expect(typeof diameterOfBinaryTree).toEqual('function');
});

test('leetcode example 1', () => {
  expect(diameterOfBinaryTree([4,2,1,3])).toEqual(3);
});

test('leetcode example 2', () => {
    expect(diameterOfBinaryTree([5,2,1,3])).toEqual(3);
});

test('leetcode example 3', () => {
  expect(diameterOfBinaryTree([15,7,3,1,2])).toEqual(5);
});

test('leetcode example 4 same numbers', () => {
  expect(diameterOfBinaryTree([12,7,1])).toEqual(5);
});

test('x more than one but x+1 only one', () => {
  expect(diameterOfBinaryTree([11,10,6])).toEqual(7);
});