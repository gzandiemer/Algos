// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//these 2 functions below belong together. Thsi solution uses mapping, that's why its functionality is better
function anagramsSolutionWithMap(stringA, stringB) {


    const charMapA = buildCharMap(stringA);
    const charMapB = buildCharMap(stringB);

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false;
    }

    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            return false;
        }

    }
    return true;
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


//these 2 functions below belong together. This is a shorter and easier way  
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);

}

function cleanString(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join();
}




//my solution below is same logic as above but with pretty longer way to convert a string into an array
function anagramsMySolution(stringA, stringB) {

    const arrayA = [];
    const arrayB = [];
    const letters = /[A-Za-z]/i;

    for (let char of stringA) {
        if (char.match(letters)) {
            arrayA.push(char.toLowerCase())
        }
    }

    for (let char of stringB) {
        if (char.match(letters)) {
            arrayB.push(char.toLowerCase())
        }
    }

    return arrayA.sort().join('') == arrayB.sort().join('');

}

module.exports = anagrams;