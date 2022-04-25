/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 时间复杂度 O(m + n)
var findMedianSortedArrays = function(nums1, nums2) {
  const mergeArray = []
  while(nums1.length || nums2.length) {
    if(nums1.length === 0) {
      mergeArray.push(...nums2)
      break
    }
    if(nums2.length === 0) {
      mergeArray.push(...nums1)
      break
    }
    if(nums1[0] >= nums2[0]) {
      mergeArray.push(nums2.shift())
    }else {
      mergeArray.push(nums1.shift())
    }
  } 

  if(mergeArray.length === 1) {
    return mergeArray[0]
  }

  let i = 0
  let j = mergeArray.length - 1

  while (i < j) {
    i++
    j--
  }

  return (mergeArray[j] + mergeArray[i]) / 2
};
// @lc code=end

// findMedianSortedArrays([1,3], [2])