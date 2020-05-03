/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const letterMap = {};
    for (let letter of magazine) {
        letterMap[letter] = letterMap[letter] + 1 || 1;
    }
    for (let letter of ransomNote) {
        if (!letterMap[letter] || letterMap[letter] == 0) return false;
        else letterMap[letter]--;
    }
    return true;
};

module.exports = canConstruct;