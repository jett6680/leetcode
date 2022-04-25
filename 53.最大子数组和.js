/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let result = nums[0]
  let temp = nums[0]
  for(let i = 1; i< nums.length; i++) {
    temp = Math.max(nums[i], temp + nums[i])
    result = Math.max(result, temp)
  }
  return result
};

// @lc code=end

