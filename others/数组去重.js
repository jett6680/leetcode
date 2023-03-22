/**
 * 2. 数组去重
 *
 * @example
 * [1,'1',1]                            -> [1,'1']
 * [{a: 1}, {b: 1}, {a: 1}]             -> [{a: 1}, {b: 1}]
 * [{a: 1, b: 2}, {b: 1}, {b: 2, a: 1}] -> [{a: 1, b: 2}, {b: 1}]
 * [[1, {a: 1}], [2], [3], [1, {a: 1}]] -> [[1, {a: 1}], [2], [3]]
 */
function unique(arr) {
  // const set = new Set()
  // for(let i = 0; i< arr.length; i++) {
  //   set.add(JSON.stringify(arr[i]))
  // }
  // const result = []
  // set.forEach(value => {
  //   result.push(JSON.parse(value))
  // })
  // return result

  function isEquals(obj1, obj2) {
    if(obj1 === obj2) {
      return true
    }
    if(typeof obj1 === 'object') {
      if(obj1 === obj2) {
        return true
      }
      if(Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
      }
      for(let i in obj1) {
        if(!isEquals(obj1[i], obj2[i])) {
          return false
        }
      }
      return true
    }else {
      return obj2 === obj1
    }
  }

  const result = []

  function hasItem(item) {
    for (let i = 0; i< result.length; i++) {
      if(isEquals(result[i], item)) {
        return true
      }
    }
    return false
  }
  for(let i = 0; i< arr.length; i++) {
    if(!hasItem(arr[i])) {
      result.push(arr[i])
    }
  }

  return result
}

console.log(unique([1, '1', 1]));
console.log(unique([{ a: 1 }, { b: 1 }, { a: 1 }]));
console.log(unique([{ a: 1, b: 2 }, { b: 1 }, { b: 2, a: 1 }]));
console.log(unique([[1, { a: 1 }], [2], [3], [1, { a: 1 }]]));
