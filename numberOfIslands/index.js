// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// leetcode d17

//not my solution
//you should check grid data structure

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if(!grid || !grid.length) return 0;
  const height= grid.length;
  const width = grid[0].length;
  const posX = [1,0,-1,0];
  const posY = [0, -1, 0, 1];  
  let islands = 0;
 

  const dfs = (grid, x, y) => {
      if(x < 0 || x >= height || y < 0 || y >= width || grid[x][y] !== '1') return;
      grid[x][y] = 'x';
      for(let i = 0; i < posX.length; i++) {
          dfs(grid, x + posX[i], y + posY[i]);
      }
  };
  
  for(let row = 0; row < height; row++) {
      for(let col = 0; col < width; col++) {
          if(grid[row][col] === '1') {
              dfs(grid, row, col);
              islands++;
          }
      }
  }
  return islands;
};

module.exports = numIslands;