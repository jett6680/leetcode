/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function dfs(num, len, depth, path, used, res) {
  if(depth === len) {
    res.push([...path])
    return 
  }

  for(let i = 0; i< len; i++) {
    if(used[i]) {
      continue
    }
    path.push(num[i])
    used[i] = true
    dfs(num, len, depth + 1, path, used, res)
    path.pop()
    used[i] = false
  }
}

var permute = function (nums) {
  const len = nums.length
  const res = []
  if(len === 0) {
    return []
  }

  const path = []
  const used = new Array(len).fill(false)
  dfs(nums, len, 0, path, used, res)
  return res
  
};

// var permute = function(nums) {
//   const res = []
//   function gen(path) {
//       if(path.length === nums.length) return res.push(path)
//       for(const n of nums) {
//           if(path.includes(n)) continue
//           gen([...path, n])
//       }
//   }
//   gen([])
//   return res
// };

permute([1, 2, 3])

