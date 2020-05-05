const firstUniqueChar = require('./index').firstUniqChar;

test('the function exists', () => {
    expect(typeof firstUniqueChar).toEqual('function');
});

test('leetcode ex 1', () => {
    expect(firstUniqueChar("leetcode")).toEqual(0);
});

test('leetcode ex 2', () => {
    expect(firstUniqueChar("loveleetcode")).toEqual(2);
});

test('long sentence', () => {
    expect(firstUniqueChar("andyetanotherchallengetobechallenged")).toEqual(3);
});

test('no unique char', () => {
    expect(firstUniqueChar("aabbcdecdefghifghijjjkkklllmnmn")).toEqual(-1);
});