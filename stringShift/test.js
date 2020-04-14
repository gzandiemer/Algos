const stringShift = require('./index');

test('stringShift function exists', () => {
  expect(stringShift).toBeDefined();
});

test('stringShift stringShifts a string', () => {
  expect(stringShift("abc", [[0,1],[1,2]])).toEqual("cab");
});

test('stringShift stringShifts a string', () => {
  expect(stringShift("abcdefg", [[1,1],[1,1],[0,2],[1,3]])).toEqual("efgabcd");
});

