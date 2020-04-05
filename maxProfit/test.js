const maxProfit = require('./index.js');

test('maxProfit function exists', () => {
    expect(typeof maxProfit).toEqual('function');
});

test('Buy on day 2 (price = 1) and sell on day 3,then buy on day 4 and sell on day 5, total profit 4+3', () => {
    expect(maxProfit([7,1,5,3,6,4])).toEqual(7);
});

test('always gets smaller', () => {
    expect(maxProfit([7,6,4,3,1])).toEqual(0);
});

test('always gets bigger', () => {
    expect(maxProfit([1,2,3,4,5])).toEqual(4);
});

test('leetcodes tricky test', () => {
  expect(maxProfit([1,9,6,9,1,7,1,1,5,9,9,9])).toEqual(25);
});

test('slightly longer array', () => {
    expect(maxProfit([5,9,2,20,23,15,24,23,21,16,10])).toEqual(34);
});

test('slightly longer 2', () => {
  expect(maxProfit([1,2,4,2,5,4,7,4,3,9,7])).toEqual(15);
});

test('slightly longer with repeating numbers', () => {
  expect(maxProfit([1,1,4,2,5,4,7,7,3,9,7])).toEqual(15);
});

test('always same', () => {
    expect(
      maxProfit([3,3,3])
    ).toEqual(0);
});