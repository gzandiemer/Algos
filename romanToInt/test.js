const romanToInt = require('./index.js');

test('romanToInt function exists', () => {
    expect(typeof romanToInt).toEqual('function');
});

test('III equals to 3', () => {
    expect(romanToInt('III')).toEqual(3);;
});

test('LVIII equals to 58', () => {
    expect(romanToInt('LVIII')).toEqual(58);;
});

test('DCXXI equals to 621', () => {
    expect(romanToInt('DCXXI')).toEqual(621);;
});

test('XIX equals to 19', () => {
    expect(romanToInt('XIX')).toEqual(19);;
});

test('MCMXCIV equals to 1994', () => {
    expect(romanToInt('MCMXCIV')).toEqual(1994);;
});
