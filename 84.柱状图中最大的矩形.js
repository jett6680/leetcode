/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  if(heights.length === 0) {
    return 0
  }
  if(heights.length === 1) {
    return heights[0]
  }

  const stack = []

  let result = 0

  for(let i = 0; i< heights.length; i++) {

    while(stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      const currentHeight = heights[stack.pop()]
      let width = 0
      if(stack.length === 0 ) {
        width = i
      }else {
        width = i - stack[stack.length - 1] - 1
      }
      result = Math.max(result, currentHeight * width)
    }
    stack.push(i)
  }

  // 此时 栈中剩下的元素 都是从栈底到栈顶从小到大的顺序排列的
  while (stack.length > 0) {
    const currentHeight = heights[stack.pop()]
    let width = 0
    // 如果此时栈的长度为0 说明当前元素是最小的元素
    // 那么最小的元素围城的矩形的宽度，就是所有的元素的个数
    if(stack.length === 0 ) {
      width = heights.length
    }else {
      // 如果此时不为空 宽度就是 从这个元素到右边 以及左边第一个比他小的元素之前
      width = heights.length - stack[stack.length - 1] - 1
    }
    result = Math.max(result, currentHeight * width)
  }

  return result
};
// @lc code=end

