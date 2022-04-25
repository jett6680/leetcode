/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

var isRight = function (str, i, j) {
  while (i >= 0 && j <= str.length-1 && str[i] === str[j]) {
    i--
    j++
  }
  return j - i - 1
}

var longestPalindrome = function (s) {
  if(s.length < 2) {
    return s
  }
  let maxLen = 0
  let start = 0
  for(let i = 0; i < s.length; i++) {
    const oddLen = isRight(s, i, i)
    const evenLen = isRight(s, i, i+ 1)
    const max = Math.max(oddLen, evenLen)
    if(max > maxLen) {
      maxLen = max
      start = i - Math.floor((maxLen - 1) / 2);
    }
  }
  return s.substr(start, maxLen)
};
// @lc code=end
// babad