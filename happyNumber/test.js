const isHappy = require('./index.js');

test('isHappy function exists', () => {
    expect(typeof isHappy).toEqual('function');
});

test('19 is a happy number', () => {
    expect(isHappy(19)).toBeTruthy();
});

test('68 is a happy number', () => {
    expect(isHappy(68)).toBeTruthy();
});

test('12 is not happy, turns in a loop', () => {
    expect(isHappy(12)).toBeFalsy();
});

test('6 is not happy, turns in a loop', () => {
    expect(isHappy(6)).toBeFalsy();
});

test('145 is not happy, turns in a loop', () => {
    expect(
      isHappy(145)
    ).toBeFalsy();
});