// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Source: LeetCode 30-Day-Challenge, day 1

// my solution



//make a map of numbers from their count as their value
var singleNumber = function(nums) {
    // function to get the key of an obj from its value
    function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
    } 

    const map = {};
    for (let num of nums) {
       //if this number doesn't exist in the map, give it a value of 1
       //if exits increase its value by 1
       if (!map[num]) {
             map[num] = 1;
         } else {
             map[num]++;
       }
       
    }
    return getKeyByValue(map,1);    
};

module.exports = singleNumber;