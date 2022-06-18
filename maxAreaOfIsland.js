/**
 * @param {number[][]} grid
 * @return {number}
 */

const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]

function searchArea(grid, i, j) {
  if (i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    grid[i][j] === 0
  ) {
    return 0
  }

  let count = 1
  grid[i][j] = 0

  for (let x = 0; x < 4; x++) {
    const islandX = i + dx[x]
    const islandY = j + dy[x]
    count += searchArea(grid, islandX, islandY)
  }

  return count
}

var maxAreaOfIsland = function (grid) {
  let maxArea = 0
  const m = grid.length
  const n = grid[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, searchArea(grid, i, j))
      }
    }
  }
  return maxArea
};

const grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
console.log(maxAreaOfIsland(grid))