export function generateGameboard(lengthRow, lengthColumn) {
  let gameboard = new Array(lengthRow).fill(null).map(
    () => (new Array(lengthColumn).fill(''))
  );
  return gameboard;
}
