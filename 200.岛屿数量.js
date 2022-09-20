/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0
  function dfs(i, j) {
    if(i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === '0') {
      return
    }
    grid[i][j] = '0'
    dfs(i, j + 1)
    dfs(i, j - 1)
    dfs(i + 1, j)
    dfs(i - 1, j)
  }
  for(let i = 0; i< grid.length; i++) {
    for(let j = 0; j< grid[i].length; j++) {
      if(grid[i][j] === '1') {
        dfs(i, j)
        count++
      }
    }
  }

  return count
};
// @lc code=end

