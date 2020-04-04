// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// Source: LeetCode 30-Day-Challenge, day 1

// my solution

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroCount = 0;
    for(let num of nums){
        
       if(num === 0) {
        zeroCount++;
       }
     
    }
 
    while(nums.includes(0)) {
      nums.splice(nums.indexOf(0),1);
    }
  
    for(let i = 0; i< zeroCount; i++) {
      nums.push(0);
    }
  
    return nums;

};

module.exports = moveZeroes; 