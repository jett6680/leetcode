/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  function parse(str) {
    const stack = []
    const strs = str.split('')
    while(strs.length) {
      const current = strs.shift()
      if(current === '#') {
        if(stack.length > 0) {
          stack.pop()
        }
      }else {
        stack.push(current)
      }
    }

    return stack.join('')
  }

  return parse(s) === parse(t)
};
// @lc code=end

