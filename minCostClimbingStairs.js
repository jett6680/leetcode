/**
 * @param {number[]} cost
 * @return {number}
 */


var minCostClimbingStairs = function (cost) {
  const map = new Map()
  function climbingStairs(n) {
    if(n === 0) {
      return 0
    }
    if(n === 1) {
      return 0
    }
    const hasValue = map.get(n)
    if(hasValue) {
      return hasValue
    }
    const prevprev = climbingStairs(n - 2) + cost[n - 2]
    const prev = climbingStairs(n - 1) + cost[n - 1]
    const result = Math.min(prev, prevprev)
    map.set(n, result)
    return result
  }

  return climbingStairs(cost.length)
}
// var minCostClimbingStairs = function (cost) {
//   const dp = new Array(cost.length);
//   dp[0] = cost[0];
//   dp[1] = cost[1];
//   for (let i = 2; i < cost.length; i++) {
//     dp[i] = Math.min(dp[i - 2], dp[i - 1]) + cost[i];
//   }
//   return Math.min(dp[cost.length - 2], dp[cost.length - 1]);
// };

console.log(minCostClimbingStairs([10, 15, 20]))

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))

console.log(minCostClimbingStairs([0, 0, 0, 1]))

// 15 6 0