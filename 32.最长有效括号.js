/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 function isEquals(char1, char2) {
  if(char1 === "(" && char2 === ")") {
    return true
  }
  if(char1 === "[" && char2 === "]") {
    return true
  }
  if(char1 === "{" && char2 === "}") {
    return true
  }
  return false
}
var longestValidParentheses = function(s) {
  if(s.length <= 1) return 0
  const stack = [0]

  for(let i = 1; i< s.length; i++) {
    if(isEquals(s[stack[stack.length - 1]], s[i])) {
      stack.pop()
    }else {
      stack.push(i)
    }
  }

  stack.unshift(-1)

  stack.push(s.length)

  let result = 0

  for(let i = 0; i< stack.length - 1; i++) {
    result = Math.max(stack[i + 1] - stack[i] - 1, result)
  }

  return result
};
// @lc code=end

