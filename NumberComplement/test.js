const findComplement = require('./index').findComplement;

test('NumberComplemente function is defined', () => {
    expect(typeof findComplement).toEqual('function');
});

test('number compliment of 5 is 2', () => {
    expect(findComplement(5)).toEqual(2);
});

test('number compliment of 1 is 0', () => {
    expect(findComplement(1)).toEqual(0);
});
