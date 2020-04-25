const canJump = require('./index.js')

test('canJump is a function', () => {
  expect(typeof canJump).toEqual('function');
});

test('leetcode ex 1', () => {
  expect(canJump([2,3,1,1,4])).toBeTruthy();
});

test('leetcode ex 2', () => {
  expect(canJump([3,2,1,0,4])).toBeFalsy();
});

test('leetcode ex 3', () => {
  expect(canJump([2,5,0,0])).toBeTruthy();
});

test('leetcode ex 4', () => {
  expect(canJump([0])).toBeTruthy();
});

test('leetcode ex 5', () => {
  expect(canJump([0,1])).toBeFalsy();
});

test('leetcode ex 3', () => {
  expect(canJump([3,0,8,2,0,0,1])).toBeTruthy();
});
