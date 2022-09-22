/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const result = [-1, -1]
  for(let i = 0; i< nums.length - 1; i++) {
    for(let j = i + 1; j< nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        result[0] = i
        result[1] = j
      }
    }
  }
  return result
};
// @lc code=end

