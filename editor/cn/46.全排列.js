/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 方法1
// var permute = function(nums) {
//   const result = []
//   function buildPath(path) {
//     if(path.length === nums.length) {
//       return result.push([...path])
//     }
//     for(let i = 0; i< nums.length; i++) {
//       if(path.includes(nums[i])) {
//         continue
//       }
//       buildPath([...path, nums[i]])
//     }
//   }
//   buildPath([])
//   return result
// };

// 方法2
var permute = function(nums) {
  const used = new Array(nums.length).fill(false)
  const result = []
  function dfs(path) {
    if(nums.length === path.length) {
      return result.push([ ...path ])
    }
    for(let i = 0; i< nums.length; i++) {
      if(used[i]) {
        continue
      }
      path.push(nums[i])
      used[i] = true
      dfs(path)
      path.pop(nums[i])
      used[i] = false
    }
  }
  dfs([])
  return result
}

// @lc code=end
