import { addPawn } from './addPawn.js';

export function turnOfPlayAI(gameboard, randomColumn) {
  return addPawn(gameboard, randomColumn, 'R');
}

// eslint-disable-next-line consistent-return
export function findEmptyColumn(gameboard, randomFunction) {
  // randomFunction = Math.random;
  let emptiesColumns = [];

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
  }
}
