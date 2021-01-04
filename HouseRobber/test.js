const rob = require('./index.js');

test('rob function exists', () => {
  expect(typeof rob).toEqual('function');
});

test('random 1', () => {
  expect(rob([7, 1, 5, 3, 6, 4])).toEqual(18);
});

test('always gets smaller', () => {
  expect(rob([7, 6, 4, 3, 1])).toEqual(12);
});

test('leetcode tricky 5', () => {
  expect(rob([1, 2, 3, 1])).toEqual(4);
});

test('leetcodes tricky test 4', () => {
  expect(rob([4, 1, 2, 7, 5, 3, 1])).toEqual(14);
});
test('leetcode basic ex', () => {
  expect(rob([1, 2, 3, 1])).toEqual(4);
});
test('leetcodes tricky test 1', () => {
  expect(rob([2, 7, 9, 3, 1])).toEqual(12);
});
test('leetcodes tricky test 2', () => {
  expect(rob([2, 1, 1, 2])).toEqual(4);
});
test('leetcodes tricky test 3', () => {
  expect(rob([2, 7, 9, 3, 1])).toEqual(12);
});
test('leetcodes tricky test 3', () => {
  expect(rob([1, 3, 1])).toEqual(3);
});
test('leetcodes tricky test 3', () => {
  expect(rob([6, 3, 10, 8, 2, 10, 3, 5, 10, 5, 3])).toEqual(39);
});