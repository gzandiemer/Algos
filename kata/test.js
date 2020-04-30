const app = require('./index');

describe('Output', () => {
    it('should return an array', () => {
        const res = app.runChallenge([]);
        expect(Array.isArray(res)).toBeTruthy();
    });
});

describe('Arguments', () => {
    it('should fail if the first argument is not an array', () => {
        try {
            app.runChallenge(10, 4)
        } catch (err) {
            expect(err.message).toBe('First Argument : Wrong type');
        }
    });

    it('should fail if the second argument is not an int', () => {
        try {
            app.runChallenge([], '')
        } catch (err) {
            expect(err.message).toBe('Second Argument: Wrong type');
        }
    });

    it('should return an array of the same length as of the given array', () => {
        const res = app.runChallenge([1, 2, 3, 4, 5], 0);
        expect(res.length).toEqual([1, 2, 3, 4, 5].length);
    });
});
describe('Logic', () => {
    it('should rotate the given array', () => {
        const res = app.rotateArray([1, 2, 3], 1);
        expect(res).toEqual([3, 1, 2]);
    });

    it('should rotate the given array', () => {
        const res = app.rotateArray([1, 2, 3], 3);
        expect(res).toEqual([1, 2, 3]);
    });

    it('should rotate the given array', () => {
        const res = app.rotateArray([1, 2, 3], 10);
        expect(res).toEqual([3, 1, 2]);
    });

});


