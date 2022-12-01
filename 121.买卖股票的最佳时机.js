/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let result = 0
  let minPrice = prices[0]
  for(let i = 1; i < prices.length; i++) {
    if(prices[i] < minPrice) {
      minPrice = prices[i]
    }else if(prices[i] - minPrice > result) {
      result = prices[i] - minPrice
    }
  }
  return result
};
// @lc code=end

