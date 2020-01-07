// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

   // 1. Turn string into an array
   // 2. Reverse the elements within the array
   // 3. Turn the array back into a string
   
   return str.split('').reverse().join('');

}

module.exports = reverse;
