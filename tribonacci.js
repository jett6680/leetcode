/**
 * @param {number} n
 * @return {number}
 */
// Tn+3 = Tn + Tn+1 + Tn+2
// Tn+3 - 3 = Tn - 3 + Tn+1 - 3 + Tn+2 - 3
const map = new Map()
var tribonacci = function (n) {
  if(n === 0) return 0
  if(n === 1) return 1
  if(n === 2) return 1
  const hasValue = map.get(n)
  if(hasValue) return hasValue
  
  const result = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1)
  map.set(n, result)
  return result
};

