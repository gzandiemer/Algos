// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Note:

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.
// Follow up:

// Can you solve it in O(N) time and O(1) space?

// /**
//  * @param {string} S
//  * @param {string} T
//  * @return {boolean}
//  */
var backspaceCompare = function(S, T) {
  return type(S) == type(T)
};

 function type(str) {
    let arr = [];
    for(let char of str){
      char == "#" ? arr.pop() : arr.push(char);
  }
  return arr.join('');
}

module.exports = { backspaceCompare, type } ;