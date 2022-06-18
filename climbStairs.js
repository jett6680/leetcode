/**
 * @param {number} n
 * @return {number}
 */

const map = new Map()

var climbStairs = function (n) {
  if(n === 1) return 1
  if(n === 2) return 2
  const hasValue = map.get(n)
  if(hasValue) return hasValue
  const pre = climbStairs(n - 1)
  const prepre = climbStairs(n - 2)
  map.set(n, pre + prepre)
  return pre + prepre
};

console.log(climbStairs(45))