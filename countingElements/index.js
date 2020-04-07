// Given an integer array arr, count element x such that x + 1 is also in arr.

// If there're duplicates in arr, count them seperately.

// Constraints:

// 1 <= arr.length <= 1000
// 0 <= arr[i] <= 1000

// /**
//  * @param {number[]} arr
//  * @return {number}
//  */


var countElements = function(arr) {
    let count = 0;
    for(let num of arr) {
      if (arr.includes(num+1)) count++;
    }
    return count;
};

module.exports = countElements;