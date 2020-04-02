string = sumsArr
chars = sumsObj
char = sum

function mostLikelySum(N, M) {
  //make an array of all sums
  const sumsArr = []
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      let sum = i + j
      sumsArr.push(sum)
    }
  }

  //make an object of sum as key and count as value
  const sumMap = {}
  sumsArr.forEach(function(item, index) {
    if (!sumMap[item]) {
      sumMap[item] = 1
    } else {
      sumMap[item]++
    }
  })

  //find the biggest count
  let maxCount = 0
  
  for (let sum in sumMap) {
    if (sumMap[sum] > maxCount) {
      maxCount = sumMap[sum]
    } 
  }
  //find all sums that has the maximum count
  let maxSums = [];
  for (let sum in sumMap){
    if(sumMap[sum] == maxCount){
       maxSums.push(sum)
    }
  }
  
  return maxSums;

  
}
