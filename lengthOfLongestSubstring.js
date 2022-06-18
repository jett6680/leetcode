// 无重复字符的最长子串
var lengthOfLongestSubstring = function(s) {
    const map = new Map()
    var result = 0
    for(var start = 0, end = 0; end< s.length; end ++) {
        var current = s[end]
        if(map.has(current)) {
            start = Math.max(start, map.get(current))
        }

        result = Math.max(result, end - start + 1)
        map.set(current, end + 1)
    }
    return result
};

// var s = 'abcabcbb'

// console.log(lengthOfLongestSubstring(s))

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let result = 0
  const map = {}
  for(let start = 0, end = 0; end < s.length; end ++) {
    const current = s[end]
    if(map[current] !== undefined) {
      start = Math.max(start, map[current])
    }

    result = Math.max(result, end - start + 1)
    map[current] = end + 1
  }

  return result
};

console.log(lengthOfLongestSubstring('dvdf'))