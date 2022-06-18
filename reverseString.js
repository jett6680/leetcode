/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1
  let temp = ''
  while(left <= right) {
    temp = s[left]
    s[left] = s[right]
    s[right] = temp
    left ++
    right --
  }
};

var reverseString = function (s) {
  let temp = ''
  const middle = Math.floor(s.length / 2)
  for(let i = 0; i< middle; i++) {
    temp = s[i]
    s[i] = s[s.length - i - 1]
    s[s.length - i - 1] = temp
  }
};

reverseString(['a', 'b', 'c'])