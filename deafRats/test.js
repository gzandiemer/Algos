const countDeafRats = require('./index.js')

test('deafRats finction exists', () => {
  expect(typeof countDeafRats).toEqual('function');
});

test('codewars ex 1', () => {
  expect(countDeafRats("~O~O~O~O P")).toEqual(0);
});

test('codewars ex 2', () => {
  expect(countDeafRats("P O~ O~ ~O O~")).toEqual(1);
});

test('codewars ex 3', () => {
  expect(countDeafRats("~O~O~O~OP~O~OO~")).toEqual(2);
});

