// In many table-top games it is common to use different dice to simulate random events. A “d” or “D” is used to indicate a die with a specific number of faces, d4 indicating a four-sided die, for example. If several dice of the same type are to be rolled, this is indicated by a leading number specifying the number of dice. Hence, 2d6 means the player should roll two six-sided dice and sum the result face values.

// Task
// Write a program to compute the most likely outcomes for the sum of two dice rolls. Assume each die has numbered faces starting at 1 and that each face has equal roll probability.

// Input
// The input consists of a single line with two integer numbers, 𝑁,𝑀, specifying the number of faces of the two dice.

// Constraints
// 4≤𝑁,𝑀≤20 Number of faces.

// Output
// A line with the most likely outcome for the sum; in case of several outcomes with the same probability, they must be listed from lowest to highest value in separate lines.

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
  let maxSums = []
  for (let sum in sumMap) {
    if (sumMap[sum] == maxCount) {
      maxSums.push(sum)
    }
  }

  //log the numbers in the console one by one
  for (let maxSum of maxSums) {
    console.log(maxSum)
  }
}

module.exports = mostLikelySum
