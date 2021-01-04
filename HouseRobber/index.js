var rob = function (nums) {
  let totalEven = 0;
  let totalOdd = 0;
  let totalDynamicIJ = 0;
  let totalDynamicAB = 0;
  let greaterSumIJ = 0;
  let greaterSumAB = 0;
  let tempSumIJ = 0;
  let tempSumAB = 0;
  let i = 0;
  let j = 2;
  let a = 1;
  let b = 3;
  let even = 0;
  let odd = 1;
  const length = nums.length;
  while (true) {
    if (even < length) {
      totalEven += nums[even]
      even += 2;
    }
    if (odd < length) {
      totalOdd += nums[odd];
      odd += 2;
    }
    if (j < length) {
      tempSumIJ = nums[i] + nums[j]
      if (tempSumIJ > greaterSumIJ) {
        greaterSumIJ = tempSumIJ;
        j++;
        if (j == length) {
          totalDynamicIJ += greaterSumIJ;
          tempSumIJ = 0
          greaterSumIJ = 0
          i = length;
        }
      }
      else {
        totalDynamicIJ += greaterSumIJ;
        tempSumIJ = 0
        greaterSumIJ = 0
        i = j + 1;
        j = i + 2;
      }
    } else if (i < length) {
      totalDynamicIJ += Math.max(nums[i], nums[i + 1]) || nums[i]
      i == length
    }
    if (b < length) {
      tempSumAB = nums[a] + nums[b]
      if (tempSumAB > greaterSumAB) {
        greaterSumAB = tempSumAB;
        b++;
        if (b == length) {
          totalDynamicAB += greaterSumAB;
          tempSumAB = 0
          greaterSumAB = 0
          a = length
        }
        // console.log("totalDynamicAB", totalDynamicAB)
        // console.log("greaterSumAB", greaterSumAB)
        // console.log("a", a)
        // console.log("b", b)
      }
      else {
        totalDynamicAB += greaterSumAB;
        tempSumAB = 0
        greaterSumAB = 0
        a = b + 1;
        b = a + 2;
        // console.log("totalDynamicAB in else", totalDynamicAB)
        // console.log("greaterSumAB in else", greaterSumAB)
        // console.log("a in else", a)
        // console.log("b in else", b)
      }
    } else if (a < length) {
      totalDynamicAB += Math.max(nums[a], nums[a + 1]) || nums[a]
      a = length
      // console.log("totalDynamicAB in else if", totalDynamicAB)
      // console.log("greaterSumAB in else if", greaterSumAB)
      // console.log("a in else if", a)
      // console.log("b in else if", b)
    }
    if (even >= length && odd >= length && j >= length && b >= length) break;
  }
  console.log("totalOdd", totalOdd)
  console.log("totalEven", totalEven)
  console.log("totalDynamicIJ", totalDynamicIJ)
  console.log("totalDynamicAB", totalDynamicAB)
  return Math.max((Math.max(totalOdd, totalEven)), Math.max(totalDynamicIJ, totalDynamicAB))

};
rob([6, 3, 10, 8, 2, 10, 3, 5, 10, 5, 3])
// totalDynamic(i, j, arr) {
//   let total = 0;
//   let tempSum = 0;
//   let greaterSum = 0; 
//   if (j < length) {
//     tempSum = arr[i] + arr[j]
//     if (tempSum > greaterSum) {
//       greaterSum = tempSum;
//       j++;
//       if(j== length) total += greaterSum;
//     }
//     else {
//       total += greaterSum;
//       i = j - 1;
//       j = i + 2;
//     }
//   }
//   return total;
// }

// rob([7, 1, 5, 3, 6, 4]); //18

module.exports = rob;