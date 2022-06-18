/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const arr1 = []
  const arr2 = []
  for(let i = 0; i< nums.length; i++) {
    if(nums[i] === 0) {
      arr2.push(nums[i])
    }else {
      arr1.push(nums[i])
    }
  }
  let i;
  for(i = 0; i< arr1.length; i++) {
    nums[i] = arr1[i]
  }

  for(i = arr1.length; i < nums.length; i++) {
    nums[i] = arr2[i - arr1.length]
  }

};



moveZeroes([0,1,0,3,12])

var moveZeroes2 = function (nums) {
  // 下一个不为0的数放置的位置
  let index = 0
  for(let i = 0; i< nums.length; i++) {
    if(nums[i] !== 0) {
      const temp = nums[i]
      nums[i] = nums[index]
      nums[index] = temp
      index ++
    }
  }
}

moveZeroes2([0,1,0,3,12])