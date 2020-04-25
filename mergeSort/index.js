const mergeSort = function(arr){
  if (arr.length == 1) return arr
  let left = arr.splice(0, Math.floor(arr.length/2));
  let right = arr;
  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left,right);
  

}

const merge = function(arr1, arr2) {
   const merged = [];
   let i =0;
   let j = 0;
   while(merged.length<=arr1.length + arr2.length){
     if(i == arr1.length) return merged.concat(arr2.splice(j,arr2.length-j))
     if(j == arr2.length) return merged.concat(arr1.splice(i, arr1.length-i))
     if(arr1[i]<arr2[j]){
       merged.push(arr1[i]);
       i++; 
     } else {
       merged.push(arr2[j]);
       j++;
     } 
     
   } 
   
   return merged;
}

module.exports = {mergeSort, merge}