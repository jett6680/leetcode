/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//   const map = new Map()

//   for(let i = 0; i< nums.length; i++) {
//     if(map.get(nums[i])) {
//       map.set(nums[i], 0)
//     }else {
//       map.set(nums[i], 1)
//     }
//   }

//   for(let i of map.keys()) {

//     if(map.get(i) === 1) {
//       return i
//     }
//   }

//   return 0
// };

var singleNumber = function (nums) {
  let ans = nums[0];
  if (nums.length > 1) {
    for (let i = 1; i < nums.length; i++) {
      ans = ans ^ nums[i];
    }
  }
  return ans
}

// @lc code=end

console.log(singleNumber([2, 2, 1]))

