// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.
//not my solution
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let left = 0;
    let right = 0;
    let size = s.length;
    for(let i = 0; i<size; i++) {
      if(s[i] == ")"){
        left--;
      }else{
        left++;
      }
      if(s[size-1-i] == "("){
        right--;
      }else{
        right++;
      }
      if(left < 0 || right <0) return false;
    }
 
    return true;
      

};

module.exports = checkValidString;