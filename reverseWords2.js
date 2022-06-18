/**
 * @param {string} s
 * @return {string}
 */

var reverseString = function (s) {
  s = s.split('')
  let temp = ''
  const middle = Math.floor(s.length / 2)
  for (let i = 0; i < middle; i++) {
    temp = s[i]
    s[i] = s[s.length - i - 1]
    s[s.length - i - 1] = temp
  }
  return s.join('')
};

var reverseWords = function (s) {
  const words = s.split(' ')
  for (let i = 0; i < words.length; i++) {
    words[i] = reverseString(words[i])
  }
  return words.join(' ')
};