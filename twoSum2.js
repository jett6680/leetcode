/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (numbers, target) {
//   for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if(numbers[i] + numbers[j] === target) {
//         return [i + 1, j + 1]
//       }
//     }
//   }
//   return []
// };

var twoSum = function (numbers, target) {
  let left = 0
  let right = numbers.length - 1

  while(left < right) {
    if(numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1]
    }else if(numbers[left] + numbers[right] > target) {
      right = right - 1
    } else {
      left = left + 1
    }
  }

  return []
}

twoSum([2,7,11,15], 9)