/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const len = matrix.length
  if(len <= 1) return matrix

  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len / 2; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[i][len - 1 - j]
      matrix[i][len - 1 - j] = temp
    }
  }

  for(let i = 0; i< len; i++) {
    for(let j = 0; j < len - i; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[len - 1 - j][len - 1 - i]
      matrix[len - 1 - j][len - 1 - i] = temp
    }
  }
  return matrix
};
// @lc code=end

[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

// 左右对折

[
  [3,2,1],
  [6,5,4],
  [9,8,7]
]

// 1,9 对角线对折
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]