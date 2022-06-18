/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
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

console.log(addBinary('1111', '1111'))