/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let result = 0
//   for(let i = 0; i< prices.length - 1; i++) {
//     for(let j = i + 1; j< prices.length; j ++) {
//       result = Math.max(result, prices[j] - prices[i])
//     }
//   }
//   return result
// };  

var maxProfit = function (prices) {
  let min = prices[0]
  let result = 0
  for(let i = 0; i< prices.length; i++) {
    if(prices[i] > min) {
      result = Math.max(result, prices[i] - min)
    }else {
      min = prices[i]
    }
  }
  return result
}

console.log(maxProfit([3,2,6,5,0,3]))