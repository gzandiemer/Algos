const canConstruct = require('./index')

test('canConstruct function exists', () => {
    expect(canConstruct).toBeDefined();
});

test('canConstruct checks if every element in str1 exists in str2', () => {
    expect(canConstruct("a", "b")).toBeFalsy();
    expect(canConstruct("aa", "ab")).toBeFalsy();
    expect(canConstruct("aa", "aab")).toBeTruthy();
    expect(canConstruct("abc", "hdclbjsaa")).toBeTruthy();
    expect(canConstruct("ttoz", "gtzrzio")).toBeFalsy();
    expect(canConstruct("a", "")).toBeFalsy();
});

