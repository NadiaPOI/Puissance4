export function isWinner(gameboard, row, col, colorPlayer) {
  let currentColumn = col;
  let alignedPawns = 0;
  let lastRow = gameboard.length - 1;
  const playedColumn = col;

  // vertically
  for (let indexRow = lastRow; indexRow >= 0; indexRow--) {
    alignedPawns = gameboard[indexRow][currentColumn] === colorPlayer ? alignedPawns + 1 : 0;
    if (alignedPawns >= 4) return true;
    if (indexRow === 0 && alignedPawns < 4) {
      alignedPawns = 0;
    }
  }

  // horizontally
  for (
    let indexColumn = 0;
    indexColumn < gameboard[row].length;
    indexColumn++
  ) {
    alignedPawns = gameboard[row][indexColumn] === colorPlayer ? alignedPawns + 1 : 0;
    if (alignedPawns >= 4) return true;
    if (indexColumn === gameboard[row].length - 1 && alignedPawns < 4) {
      alignedPawns = 0;
    }
  }

  // diagonally right down
  for (let indexRow = row; indexRow < gameboard.length; indexRow++) {
    alignedPawns = gameboard[indexRow][currentColumn] === colorPlayer ? alignedPawns + 1 : 0;
    currentColumn += 1;
    if (alignedPawns >= 4) return true;
    if (indexRow === lastRow && currentColumn > gameboard[indexRow].length - 1) {
      currentColumn = playedColumn;
    }
    if (indexRow === lastRow && alignedPawns < 4) {
      alignedPawns = 0;
    }
  }

  // diagonally left down
  for (let indexRow = row; indexRow < gameboard.length; indexRow++) {
    alignedPawns = gameboard[indexRow][currentColumn] === colorPlayer ? alignedPawns + 1 : 0;
    currentColumn -= 1;
    if (alignedPawns >= 4) return true;
    if (indexRow === lastRow && currentColumn < 0) {
      currentColumn = playedColumn;
    }
    if (indexRow === lastRow && alignedPawns < 4) {
      alignedPawns = 0;
    }
  }

  // diagonally left up
  for (let indexRow = row; indexRow >= 0; indexRow--) {
    alignedPawns = gameboard[indexRow][currentColumn] === colorPlayer ? alignedPawns + 1 : 0;
    currentColumn -= 1;
    if (alignedPawns >= 4) return true;
    if (indexRow === 0 && currentColumn < 0) {
      currentColumn = playedColumn;
    }
  }

  return false;
}
