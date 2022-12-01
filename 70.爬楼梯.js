/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

const map = {}

var climbStairs = function (n) {
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  let prev = map[n - 1]
  if (!prev) {
    prev = climbStairs(n - 1)
    map[n - 1] = prev
  }

  let prevprev = map[n - 2]
  if (!prevprev) {
    prevprev = climbStairs(n - 2)
    map[n - 2] = prevprev
  }
  return prev + prevprev
};
// @lc code=end

