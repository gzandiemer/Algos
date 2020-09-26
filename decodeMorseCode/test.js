const app = require('./index.js');

describe('Decoding Morsecode', () => {

    describe('Logic', () => {
        it('should decode the 3 letter word', () => {
            expect(app.decodeMorse('- .-. -.--')).toEqual('TRY');
        });

        it('should ignore the first space', () => {
            expect(app.decodeMorse(' ...---...')).toEqual('SOS');
        });

        it('should decode 2 words', () => {
            expect(app.decodeMorse('-.. ---   .. -')).toEqual('DO IT');
        });

        it('should decode special characters', () => {
            expect(app.decodeMorse('--- -- --. -.-.--')).toEqual('OMG!');
        });

        it('should decode longer words', () => {
            expect(app.decodeMorse('.- -.. ..   .... .- .-.. .')).toEqual('ADI HALE');
        });

    });
});


