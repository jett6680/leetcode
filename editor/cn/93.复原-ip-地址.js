/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  if(s.length < 4 || s.length > 12) {
    return []
  }
  const result = new Set()
  function fn(start, ip) {
    if(start >= s.length || ip.length === 4) {
      const ipString = ip.join('.')
      if(ipString.length === s.length + 3) {
        result.add(ipString)
      }
      return 
    }
    for(let i = start + 1; i <= start + 3; i++) {
      const subStr = s.substring(start, i)
      if(+subStr <= 255) {
        if(subStr.startsWith('0')) {
          if(subStr.length === 1) {
            fn(i, [ ...ip, subStr ])
          }
        }else {
          fn(i, [ ...ip, subStr ])
        }
      }
    }
  }

  fn(0, [])

  return Array.from(result)
};
// @lc code=end

// console.log(restoreIpAddresses('101023'))
