/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const charMap = buildCharMap(s);
    if (!Object.values(charMap).includes(1)) return -1;
    let keys = Object.keys(charMap)
    for (let key of keys) {
        if (charMap[key] == 1) return s.indexOf(key);
    }
}

function buildCharMap(str) {
    const charMap = {};
    //this RegEx removes the empty spaces and punctuation from a string
    const cleanedStr = str.replace(/[^\w]/g, "").toLowerCase();

    for (let char of cleanedStr) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

module.exports = { firstUniqChar, buildCharMap };