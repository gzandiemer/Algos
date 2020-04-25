const rangeBitwiseAnd = require('./index.js').rangeBitwiseAnd;

const convertToBinary = require('./index.js').convertToBinary;

const convertToDecimal = require('./index.js').convertToDecimal;

 test('rangeBitwiseFunction exists', ()=> {
   expect(rangeBitwiseAnd).toBeDefined();
 });

 test('range 5 to 7 results 4', ()=> {
  const result = rangeBitwiseAnd(5,7);
   expect(result).toEqual(4);
 });

 test('range 0 to 1 results 0', ()=> {
  const result = rangeBitwiseAnd(0,1);
   expect(result).toEqual(0);
 });

 test('range 1 to 2 results 0', ()=> {
  const result = rangeBitwiseAnd(1,2);
  expect(result).toEqual(0);
});

 test('convert 0', () => {
  expect(convertToBinary(0)).toEqual('0')
})

test('binary of 4', () => {
  expect(convertToBinary(4)).toEqual('100')
})

test('binary of 7', () => {
  expect(convertToBinary(7)).toEqual('111')
})

test('binary of 11', () => {
  expect(convertToBinary(11)).toEqual('1011')
})

test('binary of 16', () => {
  expect(convertToBinary(16)).toEqual('10000')
})

test('binary of 21', () => {
  expect(convertToBinary(21)).toEqual('10101')
})

test('binary of 35', () => {
  expect(convertToBinary(35)).toEqual('100011')
})

test('binary of 35', () => {
  expect(convertToDecimal([1,0,0,0,1,1])).toEqual(35)
})

test('binary of 0', () => {
  expect(convertToDecimal([0])).toEqual(0)
})