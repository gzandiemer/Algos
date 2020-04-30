// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// Source: LeetCode 30-Day-Challenge, day 1

// my solution

var maxSubArray = function (nums) {
  let maxSum = nums[0];
  while (nums.length > 0) {
    let tempSum = 0;
    for (let num of nums) {
      tempSum += num;
      if (tempSum > maxSum) maxSum = tempSum;
    }
    nums.shift();
  }

  return maxSum;
};

//Divide and conquer


module.exports = maxSubArray;