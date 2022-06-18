/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 暴力解法
// var canJump = function (nums) {
//   if(nums.length === 1) {
//     return true
//   }

//   function canJumpSingle(start) { 
//     if(start === nums.length - 1) {
//       return true
//     }
//     const current = nums[start]
//     for(let i = 1; i<= current; i++) {
//       if(canJumpSingle(start + i)) {
//         return true
//       }
//     }
//     return false
//   }

//   return canJumpSingle(0)
// };

// var canJump = function (nums) {
//   if(nums.length === 1) {
//     return true
//   }
//   const stack = []
//   stack.push(0)
//   let target = -1
//   while (target !== nums.length - 1 && stack.length) {
//     const currentIndex = stack.pop()
//     if(nums[currentIndex] === 0 && currentIndex !== nums.length - 1) {
//       continue
//     }
//     target = currentIndex
//     for(let i = 1; i<= nums[currentIndex]; i++) {
//       stack.push(currentIndex + i)
//     }
//   }

//   return target === nums.length - 1
// }
var canJump = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > k) {
      return false
    }
    k = Math.max(k, i + nums[i]);
  }
  return true;
}

console.log(canJump([2,0,0]))
console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))