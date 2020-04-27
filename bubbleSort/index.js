//pseudo code
//1. for i = 1 to A.length - 1
//2.   for j = A.length downto i + 1
//3.      if A[j] < A[j-1]
//4.        exchange A[j]with A[j-1]



const bubbleSort = function(arr) {
  let size = arr.length;
  for(let i=1; i<size; i++){
    for(let j=size-1; j>=i; j--){
      if(arr[j]<arr[j-1]) {
        let temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;  
      }
    }
    
  }
  
  return arr;
}

module.exports = bubbleSort; 