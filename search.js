/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2)
    const middleValue = nums[middle]
    if (middleValue === target) {
      return middle
    } else if (middleValue > target) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }

  return -1
};

const nums = [-1,0,3,5,9,12]
const target = 9

console.log(search(nums, target))