//input integers

var insertionSort = function(arr) {

   for(let i=1; i<arr.length; i++){
       for(let j=i-1; j>=0; j--){
         if(arr[i]>=arr[j]) break;
         else {
           let big = arr[j];
           let small = arr[i];
           arr[i] = big;
           arr[j] = small;
           i--; 
        }
          
       }
     }
     return arr;
   }
    
module.exports = insertionSort;