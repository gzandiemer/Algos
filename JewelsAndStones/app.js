const isString = arg => typeof arg === 'string';

const hasOnlyLetters = str => /^[a-zA-Z]+$/.test(str);

const hasDistinctItems = (str) => (new Set(str)).size == str.length;


const areArgsValid = function () {
    return (isString(arguments[0]) && isString(arguments[1]) && hasOnlyLetters(arguments[0]) && hasOnlyLetters(arguments[1])
        && hasDistinctItems(arguments[0]) && arguments.length == 2);
}

const numJewelsInStones = (Jewels, Stones) => {
    const jewelsInStones = Stones.split('').filter(char => Jewels.indexOf(char) != -1);
    return jewelsInStones.length;
};

const runChallenge = (Jewels, Stones) => {
    return areArgsValid(Jewels, Stones) ? numJewelsInStones(Jewels, Stones) : "Wrong arguments";
};

module.exports = {
    isString, hasOnlyLetters, hasDistinctItems, runChallenge, numJewelsInStones, areArgsValid
}