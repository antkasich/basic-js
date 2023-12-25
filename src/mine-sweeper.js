const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let indicates = matrix.map((x) => x.map((y) => y = 0));
  for (let i = 0; i < matrix.length; i++) {
    for (let y = 0; y < matrix[i].length; y++) {
      if (matrix[i][y] === true)
      indicates = indicate(i, y, indicates);
    }
  }
  return indicates;
}

function indicate(i, y, indicates) {
  for (let x = -1; x <= 1; x++) {
    for (let z = -1; z <= 1; z++) {
      if ((i + x >= 0 && i + x <= 3) && (y + z >= 0 && y + z <= 3)) {
        if (!(x == 0 && z == 0))
        indicates[i + x][y + z]++;
      }
    }
  }

  return indicates;
}

module.exports = {
  minesweeper
};
