// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//This solution can be used for similar common string Qs such as: 
// 1. What is the most common character in the string?
// 2. Does string A have the same characters as string B (is it an anagram)?
// 3. Does the given string have any repeated characters in it?

function makeObject(str) {

    const chars = {};

    for (let char of str) {

        // check if char already exists, if yes increase the count, if not equalize it to one
        // if (!chars[char]) {
        //     chars[char] = 1;
        // } else {
        //     chars[char]++;
        // }

        //instead of above if/else: 
        // if it is null, +1 will look falsy, so it will then equalize it to 1
        chars[char] = chars[char] + 1 || 1;
    }
    chars;
}

//let a of b is for strings and arrays, let a in b is for objects

function maxChar(str) {

    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }

    }

    return maxChar;

}

//My Solution! Works
function maxCharMySolution(str) {

    var counts = [];
    var chars = {};

    for (let i = 0; i < str.length; i++) {

        for (let j = 1; j < str.length; j++) {

            var newCount = 0;

            if (str[i] === str[j]) {
                newCount++;
            }
        }

        counts.unshift(newCount);
        chars[newCount] = str[i];

    }

    const biggestCount = counts.sort().pop();
    return chars[biggestCount];

}

module.exports = maxChar;