//build charmap
function buildCharMap(str) {
    const charMap = {};
    //this RegEx removes the empty spaces and punctuation from a string
    const cleanedStr = str.replace(/[^\w]/g, "").toLowerCase();

    for (let char of cleanedStr) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

//how to get keys and values array from an array of arrays/map:
const charMapA = buildCharMap(strA);
const keys = Object.keys(charMapA);
const values = Object.values(charMapA);

