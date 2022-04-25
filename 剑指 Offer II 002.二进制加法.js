//给定两个 01 字符串 a 和 b ，请计算它们的和，并以二进制字符串的形式输出。
//
// 输入为 非空 字符串且只包含数字 1 和 0。
//
//
//
// 示例 1:
//
//
//输入: a = "11", b = "10"
//输出: "101"
//
// 示例 2:
//
//
//输入: a = "1010", b = "1011"
//输出: "10101"
//
//
//
// 提示：
//
//
// 每个字符串仅由字符 '0' 或 '1' 组成。
// 1 <= a.length, b.length <= 10^4
// 字符串如果不是 "0" ，就都不含前导零。
//
//
//
//
// 注意：本题与主站 67 题相同：https://leetcode-cn.com/problems/add-binary/
// Related Topics 位运算 数学 字符串 模拟 👍 29 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const lena = a.length
  const lenb = b.length

  let max = Math.max(lena, lenb)
  let fill = 0
  let count = 0
  const result = []
  while (count < max) {
    count ++
    const first = a[lena - count] ? +a[lena - count] : 0
    const sucend = b[lenb - count] ? +b[lenb - count] : 0

    const sum = first + sucend + fill
    if(sum >= 2) {
      fill = 1
      result.unshift(sum % 2)
    }else {
      fill = 0
      result.unshift(sum)
    }
  }

  if(fill === 1) {
    result.unshift(1)
  }

  return result.join('')
};
//leetcode submit region end(Prohibit modification and deletion)
