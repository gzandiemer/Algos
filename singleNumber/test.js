const singleNumber = require('./index.js');

test('singleNumber function exists', () => {
    expect(typeof singleNumber).toEqual('function');
});

test('1 is the only single number', () => {
    expect(singleNumber([2,2,1])).toEqual('1');
});

test('4 is the only single number', () => {
    expect(singleNumber([4,1,2,1,2])).toEqual('4');
});

test('7 is the only single number', () => {
    expect(singleNumber([2,1,7,3,3,1,2])).toEqual('7');
});

test('5 is the only single number', () => {
    expect(singleNumber([0,4,5,4,0,9,2,2,9])).toEqual('5');
});

test('9 is the only single number', () => {
    expect(
      singleNumber([1,2,3,1,2,3,4,5,6,9,4,5,6,8,8])
    ).toEqual('9');
});