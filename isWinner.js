const gameboard = require("./generateGameboard");

function isWinner(gameboard, row, col, colorPlayer) {
  let alignedPawns = 0;

  //horizontally
  for (let indexRow = 0; indexRow < gameboard.length; indexRow++) {
    alignedPawns =
      gameboard[indexRow][col] === colorPlayer ? alignedPawns + 1 : 0;
    if (alignedPawns >= 4) return "You win!! ;-)";
  }

  //vertically
  for (
    let indexColumn = 0;
    indexColumn < gameboard[row].length;
    indexColumn++
  ) {
    alignedPawns =
      gameboard[row][indexColumn] === colorPlayer ? alignedPawns + 1 : 0;
    if (alignedPawns >= 4) return "You win!! ;-)";
  }
}

module.exports = isWinner;
