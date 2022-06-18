/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const squaresNums = nums.map(num => num * num)
  return squaresNums.sort((a,b) => a - b)
};