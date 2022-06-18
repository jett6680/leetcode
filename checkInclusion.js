/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function equals(s1, s2) {
  s1 = s1.split('').sort().join('')
  s2 = s2.split('').sort().join('')
  return s1 === s2
}

var checkInclusion = function (s1, s2) {
  if(s1.length > s2.length) {
    return false
  }
  const aCharCode = 'a'.charCodeAt()
  const record = new Array(26).fill(0)

  for(let i = 0; i< s1.length; i++) {
    record[s1[i].charCodeAt() - aCharCode]++
  } 

  const recordString = record.toString()


  for(let i = 0; i < s2.length - s1.length + 1; i++) {
    const tmp = new Array(26).fill(0)
    for(let j = i; j < s1.length + i; j++) {
      tmp[s2[j].charCodeAt() - aCharCode] ++
    }
    if(tmp.toString() === recordString) {
      return true
    }
  }

  return false
};

console.log(checkInclusion("ab","eidbaooo"))