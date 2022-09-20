/*
 * @lc app=leetcode.cn id=1091 lang=javascript
 *
 * [1091] 二进制矩阵中的最短路径
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length
  if (grid[0][0] !== 0 || grid[n - 1][n - 1] !== 0) {
    return -1
  }
  // 八个方向
  const direction = [[1, 1], [0, 1], [1, 0], [-1, 1], [1, -1], [0, -1], [-1, 0], [-1, -1]] 
  const list = [[0, 0]]

  let count = 1
  while (list.length > 0) {
    const size = list.length // 当前层范围
    for (let i = 0; i < size; ++i) {
      const [curR, curC] = list.shift() // 取节点
      if (curR === n - 1 && curC === n - 1) return count // 找到最短路径
      for (let j = 0; j < 8; ++j) {
        const nextR = curR + direction[j][0]
        const nextC = curC + direction[j][1]
        if (nextR < 0 || nextR >= n || nextC < 0 || nextC >= n || grid[nextR][nextC] !== 0) {
          continue // 索引不合法 或 值不为0 跳过
        }
        grid[nextR][nextC] = 1
        list.push([nextR, nextC])
      }
    }
    ++count // 层数+1
  }
  return -1
};
// @lc code=end

