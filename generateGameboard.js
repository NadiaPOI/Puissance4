export function generateGameboard(lengthRow, lengthColumn) {
  if (lengthRow < 0 || lengthColumn < 0) {
    throw new Error("Invalid parameters");
  }

  const tabRow = new Array(lengthRow);

  for (let line = 0; line < tabRow.length; line++) {
    let newRow = new Array(lengthColumn);
    tabRow[line] = newRow;
    for (let column = 0; column < newRow.length; column++) {
      newRow[column] = "";
    }
  }

  return tabRow;
}
