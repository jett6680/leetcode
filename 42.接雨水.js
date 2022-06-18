//给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
//
//
//
// 示例 1：
//
//
//
//
//输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
//输出：6
//解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
//
//
// 示例 2：
//
//
//输入：height = [4,2,0,3,2,5]
//输出：9
//
//
//
//
// 提示：
//
//
// n == height.length
// 1 <= n <= 2 * 10⁴
// 0 <= height[i] <= 10⁵
//
// Related Topics 栈 数组 双指针 动态规划 单调栈 👍 3191 👎 0


//leetcode submit region begin(Prohibit modification and deletion)

/**
 * @param {number[]} height
 * @return {number}
 */
// 左右最大值解法
// var trap = function(height) {
//   if(height.length < 3) {
//     return 0
//   }
//
//   const len = height.length
//
//   const leftMaxArray = new Array(len).fill(0)
//   const rightMaxArray = new Array(len).fill(0)
//   leftMaxArray[0] = height[0]
//   rightMaxArray[len - 1] = height[len - 1]
//
//   for(let i = 1; i < len; i++) {
//     leftMaxArray[i] = Math.max(leftMaxArray[i - 1], height[i])
//   }
//
//   for(let i = len - 2; i >= 0; i--) {
//     rightMaxArray[i] = Math.max(rightMaxArray[i + 1], height[i])
//   }
//
//   let result = 0
//
//   for(let i = 0; i < len; i++) {
//     result += Math.min(leftMaxArray[i], rightMaxArray[i]) - height[i]
//   }
//
//   return result
// };


//leetcode submit region end(Prohibit modification and deletion)
