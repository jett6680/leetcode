//给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
//
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
//
// 返回容器可以储存的最大水量。
//
// 说明：你不能倾斜容器。
//
//
//
// 示例 1：
//
//
//
//
//输入：[1,8,6,2,5,4,8,3,7]
//输出：49
//解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
//
// 示例 2：
//
//
//输入：height = [1,1]
//输出：1
//
//
//
//
// 提示：
//
//
// n == height.length
// 2 <= n <= 10⁵
// 0 <= height[i] <= 10⁴
//
// Related Topics 贪心 数组 双指针 👍 3265 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} height
 * @return {number}
 */
// 暴力解法
// var maxArea = function(height) {
//   let result = 0
//   for(let i = 0; i< height.length - 1; i++) {
//     for(let j = i + 1; j < height.length; j++) {
//       const h = Math.min(height[j], height[i])
//       const w = j - i
//       result = Math.max(h * w, result)
//     }
//   }
//   return result
// };

var maxArea = function(height) {
  let left = 0
  let right = height.length - 1
  let result = 0
  while (left <= right) {
    const h = Math.min(height[left], height[right])
    const w = right - left
    result = Math.max(result, h * w )
    if(height[left] <= height[right]) {
      left ++
    }else {
      right --
    }
  }
  return  result
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))

//leetcode submit region end(Prohibit modification and deletion)
