import { gameboard } from "./generateGameboard.js";

export function isWinner(gameboard, row, col, colorPlayer) {
  let alignedPawns = 0;

  //horizontally
  for (let indexRow = 0; indexRow < gameboard.length; indexRow++) {
    alignedPawns =
      gameboard[indexRow][col] === colorPlayer ? alignedPawns + 1 : 0;
    if (alignedPawns >= 4) return true;
  }

  //vertically
  for (
    let indexColumn = 0;
    indexColumn < gameboard[row].length;
    indexColumn++
  ) {
    alignedPawns =
      gameboard[row][indexColumn] === colorPlayer ? alignedPawns + 1 : 0;
    if (alignedPawns >= 4) return true;
  }

  //diagonally left
  for (let indexRow = row; indexRow < gameboard.length; indexRow++) {
    alignedPawns =
      gameboard[indexRow][col] === colorPlayer ? alignedPawns + 1 : 0;
    col--;
    if (alignedPawns >= 4) return true;
  }

  //diagonally right
  for (let indexRow = row; indexRow < gameboard.length; indexRow++) {
    alignedPawns =
      gameboard[indexRow][col] === colorPlayer ? alignedPawns + 1 : 0;
    col++;
    if (alignedPawns >= 4) return true;
  }
  return false;
}
