//给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
//
//
//
// 示例 1:
//
//
//输入: s = "abcabcbb"
//输出: 3
//解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
//
//
// 示例 2:
//
//
//输入: s = "bbbbb"
//输出: 1
//解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
//
//
// 示例 3:
//
//
//输入: s = "pwwkew"
//输出: 3
//解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
//
//
//
//
// 提示：
//
//
// 0 <= s.length <= 5 * 10⁴
// s 由英文字母、数字、符号和空格组成
//
// Related Topics 哈希表 字符串 滑动窗口 👍 7073 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//   var len = s.length
//   var map = new Map()
//   var start = 0
//   var result = 0
//   for(var end = 0; end< len; end++) {
//     var currentChar = s[end]
//     if(map.has(currentChar)) {
//       console.log(start, currentChar, map.get(currentChar))
//       start = Math.max(start, map.get(currentChar))
//     }
//     result = Math.max(result, end - start + 1)
//     map.set(currentChar, end + 1)
//   }
//   return result
// };
var lengthOfLongestSubstring = function(s) {
  const queue = []
  let result = 0
  for(let i = 0; i< s.length; i++) {
    const hasIndex = queue.indexOf(s[i])
    if(hasIndex !== -1) {
      result = Math.max(result, queue.length)
      for(let j = 0; j<= hasIndex; j++) {
        queue.shift()
      }
    }
    queue.push(s[i])
  }
  return  Math.max(result, queue.length)
}

console.log(lengthOfLongestSubstring(' '))
//leetcode submit region end(Prohibit modification and deletion)
