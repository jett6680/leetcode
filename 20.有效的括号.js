/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
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
var isValid = function(s) {
  const stack = [s[0]]
  for(let i = 1; i< s.length; i++) {
    const char = s[i]
    if(isEquals(stack[stack.length - 1], char)) {
      stack.pop()
    }else {
      stack.push(char)
    }
  }

  return stack.length === 0
};
// @lc code=end

