// Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */


var rangeBitwiseAnd = function(m, n) {
  let num = m;
  let allBinaries = [];
  let resBinaryArr = [];
  let maxLength = convertToBinary(n).length;
  let newBinary = 0;
  while(num<=n){
     newBinary = convertToBinary(num).split('');
     allBinaries.push(newBinary);
     num++;
  }
  
  for(let i = maxLength-1; i >= 0; i--){
    let zero = false;
    for(let arr of allBinaries) {
      while(arr.length < maxLength){
        arr.unshift(0);
      }
      if(arr[i] == '0'){
        zero = true;
      } 
    }
    zero ? resBinaryArr.unshift(0) : resBinaryArr.unshift(1);
  
  }
  
   return convertToDecimal(resBinaryArr);

};

var convertToBinary = function(int) {
let digits = [];
if(int==0){
  digits.unshift(0);
} 
while(int>0){
  let digit = int%2;
  digits.unshift(digit);
  int = Math.floor(int/2); 
}
return digits.join('');
}

var convertToDecimal= function(binaryArr) {
  let decimal = 0;

  for(let i = 0; i< binaryArr.length; i++){
    let j = binaryArr.length-1-i;
    decimal += binaryArr[j] * (2**i)
  }   

return decimal;
}

rangeBitwiseAnd(1,2);

module.exports = {rangeBitwiseAnd, convertToBinary, convertToDecimal}