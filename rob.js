/**
 * @param {number[]} nums
 * @return {number}
 */
// [2,7,9,3,1]
var rob = function (nums) {
  const map = new Map()
  function fn(n) {
    const hasValue = map.get(n)
    if(hasValue !== undefined) {
      return hasValue
    }
    if(n === 0) {
      return nums[0]
    } 
    if(n === 1) {
      return Math.max(nums[0], nums[1])
    }
    if(n === 2) {
      return Math.max(nums[0] + nums[2], nums[1])
    }
    
    const value1 = nums[n] + fn(n - 2)
    const value2 = fn(n - 1)

    const result = Math.max(value1, value2)
    map.set(n, result)
    return result
  }

  return fn(nums.length - 1)
};


// [4,1,1,3]
console.log(rob([1,2,3,1]))
console.log(rob([2,7,9,3,1]))