/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {}
  for(let i = 0; i< strs.length; i++) {
    const strArr = Array.from(strs[i])
    const key = strArr.sort().toString()
    if(!map[key]) {
      map[key] = [strs[i]]
    }else {
      map[key].push(strs[i])
    }
  }
  return Object.values(map)
};


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))