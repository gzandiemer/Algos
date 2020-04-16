const checkValidString = require('./index.js');

test('checkValidString function exists', () => {
    expect(typeof checkValidString).toEqual('function');
});

test('leetcode 1"', () => {
    expect(checkValidString("()")).toBeTruthy();
});

test('leetcode 2"', () => {
    expect(checkValidString("(*)")).toBeTruthy();
});

test('leetcode 3', () => {
    expect(checkValidString("(*))")).toBeTruthy();
});

test('starts with right"', () => {
    expect(checkValidString(")(()*")).toBeFalsy();
});

test('star as string, 5 items', () => {
    expect(checkValidString("*(())")).toBeTruthy();
});

test('star as right', () => {
  expect(checkValidString("(*()")).toBeTruthy();
});
test('long one first star left, second empty', () => {
  expect(checkValidString("*(()()))*")).toBeTruthy();
});
test('leetcode ex 4', () => {
  expect(checkValidString("*()(())*()(()()((()(()()*)(*(())((((((((()*)(()(*)")).toBeFalsy();
});

test('leetcode ex 5', () => {
  expect(checkValidString("(())((())()()(*)(*()(())())())()()((()())((()))(*")).toBeFalsy();
});

test('leetcode ex 6', () => {
  expect(checkValidString("((()))()(())(*()()())**(())()()()()((*()*))((*()*)")).toBeTruthy();
});
