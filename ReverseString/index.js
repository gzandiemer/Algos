// SOLUTION 1
//// 1. Turn string into an array
//// 2. Reverse the elements within the array
//// 3. Turn the array back into a string
function reverse(str) {
   return str.split('').reverse().join('');
}


// SOLUTION 2
function reverse(str) {

   let reversed = '';
   for (let char of str) {
      reversed = char + reversed;

   }
   return reversed;

}


// SOLUTION 3
function reverse(str) {
   return str.split('').reduce((reversed, character) => {
      return character + reversed
   }, '') ‚
}


// SOLUTION 3 - Version ES6 - not as condensed as solution 1 but more condensed than others
// this solution would wow the interviewer the most!!!
function reverse(str) {
   return str.split('').reduce((rev, char) => char + rev, '')
}




module.exports = reverse;
