// Given an array of strings, group anagrams together.

// All inputs will be in lowercase.
// The order of your output does not matter.

//  @param {string[]} strs
//  @return {string[][]}

// Source: LeetCode 30-Day-Challenge, day 6

// my solution - time limit exceeded - find a way to make it faster 

var groupAnagrams = function(strs) {

  //map yap, wordlerin uzunluguna göre mapte value ver. Sonra valuleri ayni olanlari karsilastir kendi icinde. O zaman sort edip ayni olup olmadikalrina da bakabilirsin. Sonra da yazdir.
  
  const groups = [];

  for(let i = 0; i < strs.length; i++){
    let anagrams = [];
    if(strs[i] != "checked") {
      anagrams.push(strs[i]);

      for(let j = i+1; j< strs.length; j++){
        if(strs[j] != "checked" && areAnagrams(strs[i], strs[j])) {
          anagrams.push(strs[j]);
          strs[j] = "checked";
        }  
      }
    }
    if(anagrams.length != 0) groups[groups.length] = anagrams;

 }

return groups; 

function areAnagrams(stringA, stringB) {

  const charMapA = buildCharMap(stringA);
  const charMapB = buildCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) return false;
  

  for (let char in charMapA) {
      if (charMapA[char] !== charMapB[char]) return false;    
  }
     
  return true;
}

  function buildCharMap(str) {
  const charMap = {};

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
   
  return charMap;
}

};






//solution i found in leetcode
// var groupAnagrams = function(strs) {
//   let map = new Map()

//   for(str of strs) {
//       let key = 0;
//       for (let char of str) {
//           const i = char.charCodeAt(0) 
//           key += Math.pow(i, 4)
//       }

//       !map.has(key) 
//           ? map.set(key, [str])
//           : map.set(key, map.get(key).concat(str))
//   }
  
//   return Array.from(map.values())
// };

module.exports = groupAnagrams;
// this is too slow 


// var groupAnagrams = function(strs) {
  
//   const groups = [];
 
//   for(let i = 0; i < strs.length; i++){
//     let anagrams = [];
//     if(strs[i] != "checked") {
//       anagrams.push(strs[i]);

//       for(let j = i+1; j< strs.length; j++){
//         if(strs[j] != "checked" && areAnagrams(strs[i], strs[j])) {
//           anagrams.push(strs[j]);
//           strs[j] = "checked";
//         }  
//       }
//     }
//     if(anagrams.length != 0) groups[groups.length] = anagrams;

//  }

// return groups; 

// };

//  var areAnagrams = function(stringA, stringB) {

//   const charMapA = buildCharMap(stringA);
//   const charMapB = buildCharMap(stringB);

//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) return false;
  

//   for (let char in charMapA) {
//       if (charMapA[char] !== charMapB[char]) return false;    
//   }
     
//   return true;
// };

//  var buildCharMap = function(str) {
//     const charMap = {};

//     for (let char of str) {
//       charMap[char] = charMap[char] + 1 || 1;
//     }
     
//     return charMap;
//   };