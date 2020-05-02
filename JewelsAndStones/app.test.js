const app = require('./app.js');

describe('Args', () => {
    it('should receive only string as args', () => {
        expect(app.isString(1)).toBeFalsy();
        expect(app.isString("1")).toBeTruthy();
        expect(app.isString(["x", "y"])).toBeFalsy();
        expect(app.isString("")).toBeTruthy();
        expect(app.isString("hey")).toBeTruthy();
    });

    it('First arg should consist of only distinct items', () => {
        expect(app.hasDistinctItems("abc")).toBeTruthy();
        expect(app.hasDistinctItems("aab")).toBeFalsy();
        expect(app.hasDistinctItems("aA")).toBeTruthy();
    });

    it('Arg should consist of only letters', () => {
        expect(app.hasOnlyLetters("abcdef")).toBeTruthy();
        expect(app.hasOnlyLetters("ab1")).toBeFalsy();
        expect(app.hasOnlyLetters("abc!def")).toBeFalsy();
    });

    it('All args should be valid', () => {
        expect(app.areArgsValid("aA", "aAAbbbb")).toBeTruthy();
        expect(app.areArgsValid("z", "ZZ")).toBeTruthy();
        expect(app.areArgsValid("ab1")).toBeFalsy();
        expect(app.areArgsValid("abc!def", 34)).toBeFalsy();
        expect(app.areArgsValid("abc", "fjg", "aosd")).toBeFalsy();
        expect(app.areArgsValid("aa", "fjg")).toBeFalsy();
        expect(app.areArgsValid("aa", ["fjg"])).toBeFalsy();
    });
});

describe('Logic', () => {
    it('should find the n of letters in second arg that exist in first arg', () => {
        expect(app.runChallenge("aA", "aAAbbbb")).toEqual(3);
        expect(app.runChallenge("z", "ZZ")).toEqual(0);
        expect(app.runChallenge("hgF", "aHgEFFFz")).toEqual(4);
    });
});