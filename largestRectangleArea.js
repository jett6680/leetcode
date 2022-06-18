/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  if(heights.length === 0) return 0
  if(heights.length === 1) return heights[0]

  const stack = []
  let area = 0
  for(let i = 0; i < heights.length; i++) {
    while(stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      const currentHeight = heights[stack.pop()]
      while(stack.length > 0 && currentHeight === heights[stack[stack.length - 1]]) {
        stack.pop()
      }
      let width = 0;
      if(stack.length === 0) {
        width = i
      }else {
        width = i - stack[stack.length - 1] - 1
      }
      area = Math.max(area, width * currentHeight)
    }
    stack.push(i)
  }

  while (stack.length > 0) {
    const currentHeight = heights[stack.pop()]
      while(stack.length > 0 && currentHeight === heights[stack[stack.length - 1]]) {
        stack.pop()
      }
      let width = 0;
      if(stack.length === 0) {
        width = heights.length
      }else {
        width = heights.length - stack[stack.length - 1] - 1
      }
      
      area = Math.max(area, width * currentHeight)
  }

  return area
};