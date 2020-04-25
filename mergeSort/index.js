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
   const hasItem = (arr) => arr.length > 0 ? true : false;
   while(hasItem(arr1) && hasItem(arr2)){
     if(arr1[0]<arr2[0]){
       merged.push(arr1[0]);
       arr1.splice(0,1);
       
     } else {
       merged.push(arr2[0]);
       arr2.splice(0,1);;
     }
     
     
   }
   return hasItem(arr1) ? merged.concat(arr1) 
            : hasItem(arr2) ? 
            merged.concat(arr2)
            : merged;
}

module.exports = {mergeSort, merge}