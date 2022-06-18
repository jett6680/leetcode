/**
 * @param {number} n
 * @return {number}
 */

// const map = new Map()

// var fib = function (n) {
//   if (n < 2) return n
//   const hasValue = map.get(n)
//   if (hasValue) {
//     return hasValue
//   }

//   const result = fib(n - 1) + fib(n - 2)
//   map.set(n, result)
//   return result
// };

var fib = function (n) {
  if(n < 2) return n
  const arr = [0, 1]

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}

console.log(fib(3))