// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    //turn it into an array, reverse it, turn it back to string 
    const reversed = str.split("").reverse().join("");
    //check if str and reversed are totally equal
    return str === reversed;

}

//Alternative solution: 

// every() function is used to implement a func for each element of the array
// for ex:
// const myArray = [0, 10, 14] is every value greater than 5? 
// array.every((val) => val > 5);


// 
// a not an ideal solution that necessiates too much comparison
//  function palindrome(str) { 
//    //compare 1st letter to the last and continue until it is false 
//     return str.split('').every ((char, i) => {
//     return char === str[str.length - i - 1]
// }



module.exports = palindrome;
