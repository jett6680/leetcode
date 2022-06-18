/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

// function floodFillImpl(image, x, y, newColor, targetValue, map) {
//   if (x < 0 || y < 0) return
//   const pos = [[x, y - 1], [x - 1, y], [x + 1, y], [x, y + 1]]

//   for (let i = 0; i < pos.length; i++) {
//     const [sr, sc] = pos[i]
//     if (sr >= 0
//       && sc >= 0
//       && sr <= image.length - 1
//       && sc <= image[0].length - 1
//     ) {
//       if(image[sr][sc] === targetValue) {
//         image[sr][sc] = newColor
//         if(!map.get(`${sr}-${sc}`)) {
//           map.set(`${sr}-${sc}`, true)
//           floodFillImpl(image, sr, sc, newColor, targetValue, map)
//         }
//       }
      
//     }
//   }
// }

// var floodFill = function (image, sr, sc, newColor) {
//   const targetValue = image[sr][sc]
//   image[sr][sc] = newColor
//   const map = new Map()
//   floodFillImpl(image, sr, sc, newColor, targetValue, map)
//   return image
// };

// // var image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
// var sr = 1, sc = 1, newColor = 1

// var image = [[0,0,0],[0,1,1]]

// const res = floodFill(image, sr, sc, newColor)

// console.log(res)

// 使用队列的解法

var floodFill = function (image, sr, sc, newColor) {
  if(image[sr][sc] === newColor) {
    return image
  }
  const dx = [ -1, 1, 0, 0]
  const dy = [0, 0, -1, 1]

  const n = image.length
  const m = image[0].length

  const queue = []
  const oldColor = image[sr][sc]

  queue.push([sr, sc])

  while (queue.length) {
    const current = queue.shift()
    if(image[current[0]][current[1]] === oldColor) {
      image[current[0]][current[1]] = newColor
      for(let i = 0; i< 4; i++) {
        const newX = current[0] + dx[i]
        const newY = current[1] + dy[i]
        if(newX >= 0 && newX <= n - 1 && newY >= 0 && newY <= m - 1) {
          queue.push([newX, newY])
        }
      }
    }
  }

  return image
}

var image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]]
var sr = 1, sc = 1, newColor = 2

console.log(floodFill(image, sr, sc, newColor))