/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;
  let buy1 = prices[0], sell1 = 0;
  let buy2 = prices[0], sell2 = 0;
  for (let i = 1; i < n; ++i) {
      buy1 = Math.min(buy1, prices[i]);
      sell1 = Math.max(sell1, prices[i] - buy1); 
      // 如果prices[i] - sell1 小于0 说明第一次赚钱了
      buy2 = Math.min(buy2, prices[i] - sell1);
      sell2 = Math.max(sell2, prices[i] - buy2);
  }
  return sell2; 
};

console.log(maxProfit([1,2,4,2,5,7,2,4,9,0]))
// 7 - 1 = 6
// 9 - 2 = 7
