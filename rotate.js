/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {

  // 交换的次数
  let count = 0
  // 当前即将旋转的索引
  let currentIndex = 0;
  // 当前即将旋转的值
  let currentValue = nums[currentIndex]
  // 记录被旋转过的位置
  const recordMap = {}

  while(count < nums.length) {
    // 旋转的目标位置
    let nextIndex = (currentIndex + k) % nums.length

    if(recordMap[nextIndex]) {
      // 如果当前位置已经存在值旋转过，索引加+1 一直按顺序找到未被旋转的位置
      while (recordMap[nextIndex]) {
        nextIndex ++
      }
      // 重新从当前未被旋转的位置开始
      currentIndex = nextIndex
      currentValue = nums[nextIndex]
      nextIndex = (nextIndex + k) % nums.length
    }

    const tmp = nums[nextIndex]
    nums[nextIndex] = currentValue

    recordMap[nextIndex] = true

    currentValue = tmp
    currentIndex = nextIndex

    count ++
  }
};



var rotate2 = function (nums, k) {
  const newArray = new Array(nums.length)

  for(let i = 0; i< nums.length; i++) {
    newArray[(i + k) % nums.length] = nums[i]
  }

  for(let j = 0; j< newArray.length; j++) {
    nums[j] = newArray[j]
  }
}


// 0 1 2 3 4 5 6
