import { addPawn } from '../playPawn/addPawn.logic.js';

export function turnOfPlayAI(gameboard, randomColumn) {
  return addPawn(gameboard, randomColumn, 'R');
}

// eslint-disable-next-line consistent-return
export function findEmptyColumn(gameboard, randomFunction) {
  /* let emptiesColumns = [];
  for (let indexRow = gameboard.length - 1; indexRow >= 0; indexRow--) {
    if (gameboard[indexRow].includes('')) {
      let row = gameboard[indexRow];
      for (let column = 0; column < row.length; column++) {
        if (row[column] === '') {
          emptiesColumns.push(column);
        }
      }
      let randomColumn = emptiesColumns[Math.floor(randomFunction() * (emptiesColumns.length - 1))];
      return randomColumn;
    }
  } */

  let emptiesRows = gameboard.filter((row) => row.includes(''));
  let indexLastRow = emptiesRows.length - 1;

  let emptiesColumns = gameboard[indexLastRow].map((column, index) => {
    if (column === '') return index;
    return null;
  }).filter(column => column !== null);

  let randomColumn = emptiesColumns[Math.floor(randomFunction() * (emptiesColumns.length - 1))];
  return randomColumn;
}
