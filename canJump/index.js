// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

//not my solution

/**
 * @param {number[]} nums
 * @return {boolean}
 */


var canJump = function(nums) {
  if (nums.length <= 1) return true;
    
    let currentIndex = nums.length - 1;
    
    for(let index = nums.length - 2; index >= 0; index-- ){
        let maxIndex = index + nums[index];
        if (maxIndex >= currentIndex) currentIndex = index;
    }
    
   
    return nums[0] >= currentIndex
  
};


module.exports = canJump;