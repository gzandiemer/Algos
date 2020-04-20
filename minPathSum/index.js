// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// leetcode d18

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let i= 0;
    let lastRowIndex = grid.length - 1;
    let lastColIndex = grid && grid[0].length - 1;
    let nextPath = grid[i][i];
    let sum = nextPath;
    while(nextPath != grid[lastRowIndex][lastColIndex]){
        nextPath = Math.max(grid[i][i+1], grid[i+1][i]);
        sum += nextPath;
    }
       
    return sum;
      
   
};



module.exports = minPathSum;