/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const m = matrix.length
  const n = matrix[0].length
  if(m === 1 && n === 1) {
    return matrix[0][0] === target
  }

  let startM = 0
  let startN = n - 1

  while (startM < m && startN >= 0) {
    const current = matrix[startM][startN]
    if( current === target) {
      return true
    }

    if(current < target) {
      startM ++
    }else {
      startN --
    }
  }

  return false
};


// console.log(searchMatrix([
//   [1,4],
//   [2,5]
// ],1))

console.log(searchMatrix([
  [1, 3, 5, 7, 9],
  [2, 4, 6, 8, 10],
  [11,13,15,17,19],
  [12,14,16,18,20],
  [21,22,23,24,25]
], 13))
// @lc code=end

