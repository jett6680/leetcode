/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

// function minPath(points, x, y) {
//   let min = Number.MAX_SAFE_INTEGER
//   for(let i = 0; i< points.length; i++) {
//     const [ a,b ] = points[i]
//     min = Math.min(min, Math.abs(x - a) + Math.abs(y - b) )
//   }
//   return min
// }

// var updateMatrix = function (mat) {
//   const zeroPoints = []
//   const m = mat.length
//   const n = mat[0].length
//   for(let i = 0; i< m; i++) {
//     for(let j = 0; j< n; j++) {
//       if(mat[i][j] === 0) {
//         zeroPoints.push([i,j])
//       }
//     }
//   }
//   for(let i = 0; i< m; i++) {
//     for(let j = 0; j< n; j++) {
//       if(mat[i][j] === 1) {
//         mat[i][j] = minPath(zeroPoints, i, j)
//       }
//     }
//   }

//   return mat
// };

// const list = [[0,0,0],[0,1,0],[0,0,0]]
// console.log(updateMatrix(list))



/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  let m = mat.length,
    n = mat[0].length;
  // 目标结果
  let dist = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(Number.MAX_SAFE_INTEGER));
  // 如果 (i, j) 的元素为 0，那么距离为 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] == 0) {
        dist[i][j] = 0
      }
    }
  }

  // 只有 水平向右移动 和 竖直向下移动，递归的顺序是从左到右，从上到下
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 水平向左 是由同行左侧的元素递推算出来的
      if (i - 1 >= 0) dist[i][j] = Math.min(dist[i][j], dist[i - 1][j] + 1);
      // 垂直向下，是由同列上行的元素递推算出来的
      if (j - 1 >= 0) dist[i][j] = Math.min(dist[i][j], dist[i][j - 1] + 1);
    }
  }
  // 只有 水平向左移动 和 竖直向上移动，递归的顺序是从右到左，从下到上
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      // 水平向右 是由同行右侧的元素递推算出来的
      if (i + 1 < m) dist[i][j] = Math.min(dist[i][j], dist[i + 1][j] + 1);
      // 垂直向下，是由同列下行的元素递推算出来的
      if (j + 1 < n) dist[i][j] = Math.min(dist[i][j], dist[i][j + 1] + 1);
    }
  }
  return dist;
};

// var updateMatrix = (matrix) => {
//   // 首先将所有的 0 都入队，并且将 1 的位置设置成 -1，表示该位置是 未被访问过的 1
//   const queue = []
//   const m = matrix.length
//   const n = matrix[0].length;

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (matrix[i][j] == 0) {
//         queue.unshift([i, j]);
//       } else {
//         matrix[i][j] = -1;
//       }
//     }
//   }

//   const dx = [-1, 1, 0, 0]
//   const dy = [0, 0, -1, 1]
//   while (queue.length) {
//     const point = queue.pop();
//     const x = point[0], y = point[1];
//     for (let i = 0; i < 4; i++) {
//       const newX = x + dx[i];
//       const newY = y + dy[i];
//       // 如果四邻域的点是 -1，表示这个点是未被访问过的 1
//       // 所以这个点到 0 的距离就可以更新成 matrix[x][y] + 1。
//       if (
//         newX >= 0 &&
//         newX < m &&
//         newY >= 0 &&
//         newY < n &&
//         matrix[newX][newY] == -1
//       ) {
//         matrix[newX][newY] = matrix[x][y] + 1;
//         queue.unshift([newX, newY]);
//       }
//     }
//   }

//   return matrix
// }

console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]))
