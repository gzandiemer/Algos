function mostFrequentElement(sums) {
  let sumCount = newMap()
  for (const sum of sums) {
    if (sumCount.get(sum)) {
      sumCount.set(sum, sumCount.get(sum) + 1)
    } else {
      sumCount.set(sum, 1)
    }
  }

  let maxSumEntry = [...sumCount.entries()].reduce((acc, val) =>
    val[1] > acc[1] ? val : acc
  )
  return maxSumEntry
}

module.exports = mostFrequentElement
