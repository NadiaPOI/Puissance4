export function addPawn(gameboard, column, colorPlayer) {
  let lastRow = gameboard.length - 1;
  let board = gameboard;

  if (!board[0].includes('')) {
    throw new Error('The gameboard is full');
  }

  if (board[0][column] !== '') {
    throw new Error('The column is full');
  }

  while (board[lastRow][column] !== '' && lastRow > 0) {
    lastRow -= 1;
  }

  board[lastRow][column] = colorPlayer;

  return board;
}
