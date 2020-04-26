// Given two strings text1 and text2, return the length of their longest common subsequence.

// A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

 

// If there is no common subsequence, return 0.

//dynamic programming, not my solution

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  const common = [];
  let longest = 0;

  for (let i = 0; i < text1.length; i++) {
    common.push(new Array(text2.length).fill(0));
  }

  for (let i = 0; i < text1.length; i++) {
    for (let j = 0; j < text2.length; j++) {
        if (text1[i] === text2[j]) {
            common[i][j] = (common[i - 1] && common[i - 1][j - 1] ? common[i - 1][j - 1] : 0) + 1;
        } else {
            common[i][j] = Math.max(common[i - 1] ? common[i - 1][j] : 0, common[i][j - 1] || 0);
        }
        
        longest = Math.max(longest, common[i][j]);
    }
  }

  return longest;
};

module.exports = longestCommonSubsequence;