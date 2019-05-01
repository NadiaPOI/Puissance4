export function isWinner(gameboard, row, col, colorPlayer) {
  let alignedPawns = 0;
  let lastRow = gameboard.length - 1;
  const currentCol = col;

  //vertically
  for (let indexRow = lastRow; indexRow >= 0; indexRow--) {
    alignedPawns =
      gameboard[indexRow][col] === colorPlayer ? alignedPawns + 1 : 0;
    if (alignedPawns >= 4) return true;
  }

  //horizontally
  for (
    let indexColumn = 0;
    indexColumn < gameboard[row].length;
    indexColumn++
  ) {
    alignedPawns =
      gameboard[row][indexColumn] === colorPlayer ? alignedPawns + 1 : 0;
    if (alignedPawns >= 4) return true;
  }

  //diagonally right down
  for (let indexRow = row; indexRow < gameboard.length; indexRow++) {
    alignedPawns =
      gameboard[indexRow][col] === colorPlayer ? alignedPawns + 1 : 0;
    col = col + 1;
    if (alignedPawns >= 4) return true;
    if (indexRow === lastRow && col > gameboard[indexRow].length - 1) {
      col = currentCol;
    }
  }

  //diagonally left down
  for (let indexRow = row; indexRow < gameboard.length; indexRow++) {
    alignedPawns =
      gameboard[indexRow][col] === colorPlayer ? alignedPawns + 1 : 0;
    col = col - 1;
    if (alignedPawns >= 4) return true;
    if (indexRow === lastRow && col > gameboard[indexRow].length - 1) {
      col = currentCol;
    }
  }

  //diagonally left up
  for (let indexRow = row; indexRow >= 0; indexRow--) {
    alignedPawns =
      gameboard[indexRow][col] === colorPlayer ? alignedPawns + 1 : 0;
    col = col - 1;
    if (alignedPawns >= 4) return true;
    if (indexRow === 0 && col === 0) {
      col = currentCol;
    }
  }

  return false;
}
