//JavaScript is a wonderfully versatile language and as the environment it is executed in is very forgiving it is easy to write sloppy code that seemingly does the job.

//providing a preset value for a variable if it is not defined 
//if v exists then x = v, if v is false then x=10:
let x = v || 10;
//similarly if this key already exists in object increase its count, if not give a value of 1
for (let char of cleanedStr) {
    charMap[char] = charMap[char] + 1 || 1;
}

//store the length in a variable so that JS doesn't have to read the length each time
var names = ['George', 'Ringo', 'Paul', 'John'];
var all = names.length;
for (let i = 0; i < all; i++) {
    doSomeThingWith(names[i]);
}
//shorter way of achieving this is:
var names = ['George', 'Ringo', 'Paul', 'John'];
for (let i = 0, j = names.length; i < j; i++) {
    doSomeThingWith(names[i]);
}

//A str has only letters 
const hasOnlyLetters = str => /^[a-zA-Z]+$/.test(str);

//A str has only unique numbers
const hasUniqueItems = (str) => {
    let charMap = {};
    for (let char of str) {
        if (charMap[char]) return false;

        else charMap[char] = 1;
    }
    return true;
}
//or a shorter way: 
const hasDistinctItems = (str) => (new Set(str)).size == str.length;

//make an array of number from 1 to 10
[...Array(10).keys()].map(x => ++x);
//OR f
[...Array(num + 1).keys()].slice(1);
//[1,2,3,4,5,6,7,8,9,10] 
//from 0 to 9
[...Array(10).keys()];
//[0,1,2,3,4,5,6,7,8,9] 


const isSquare = num => Math.sqrt(num) % 1 === 0; //

const getSquares = arr => arr.map(x => Math.pow(x, 2));

const divisors = num => [...Array(num + 1).keys()].slice(1).filter(x => num % x == 0);
//OR
const getDivisors = (num) => {
    const nums = [...Array(num).keys()].map(x => ++x)
    return nums.filter(x => num % x == 0);
}

const getSum = (arr) => arr.reduce((a, b) => a + b, 0);
