// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

// leetcode challenge day15

/**
 * @param {number[]} nums
 * @return {number[]}
 */

 //not my solution!! 
 // medium level question
var productExceptSelf = function (nums) {
  let output = []
  nums.reduce((total, value) => {
    output.push(total)
    total *= value
    return total
  }, 1)

  output.reduceRight((total, value, index) => {
    output[index] = output[index] * total
    total *= nums[index]
    return total
  }, 1)

  return output
}

module.exports = productExceptSelf;
