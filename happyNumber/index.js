// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Source: LeetCode 30-Day-Challenge, day 2


var isHappy = function(n) {
  const sums = [];
  while(true) {
      const digits = n.toString().split(''); 
      let sum = 0;
      for(let digit of digits){
          sum += digit ** 2; 
      }
   
      if(sum == 1) {
          return true;
          break;
       } 
       if(sums.includes(sum)) {
          return false;
          break;
      }
       sums.push(sum);
       n= sum;
  }
};

module.exports = isHappy;