const groupAnagrams = require('./index.js');

test('groupAnagrams function exists', () => {
    expect(typeof groupAnagrams).toEqual('function');
});

test('6 words. all of 3 letters', () => {
    expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
      ["eat","tea", "ate"],
      ["tan","nat"],
      ["bat"]
    ]);
});

 test('3 anagrams', () => {
     expect(groupAnagrams(["eat", "tea", "ate"])).toEqual([["eat", "tea", "ate"]]);
 });

 test('same elements', () => {
  expect(groupAnagrams(["letter", "letter"])).toEqual([["letter", "letter"]]);
});

// test('always gets bigger', () => {
//     expect(groupAnagrams([1,2,3,4,5])).toEqual(4);
// });

// test('leetcodes tricky test', () => {
//   expect(groupAnagrams([1,9,6,9,1,7,1,1,5,9,9,9])).toEqual(25);
// });

// test('slightly longer array', () => {
//     expect(groupAnagrams([5,9,2,20,23,15,24,23,21,16,10])).toEqual(34);
// });

// test('slightly longer 2', () => {
//   expect(groupAnagrams([1,2,4,2,5,4,7,4,3,9,7])).toEqual(15);
// });

// test('slightly longer with repeating numbers', () => {
//   expect(groupAnagrams([1,1,4,2,5,4,7,7,3,9,7])).toEqual(15);
// });

// test('always same', () => {
//     expect(
//       groupAnagrams([3,3,3])
//     ).toEqual(0);
// });