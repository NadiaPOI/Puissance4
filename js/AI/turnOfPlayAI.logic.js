import { addPawn } from '../playPawn/addPawn.logic.js';

export function turnOfPlayAI(gameboard, randomColumn) {
  return addPawn(gameboard, randomColumn, 'R');
}

export function findEmptyColumn(gameboard, randomFunction) {
  let emptiesRows = gameboard.filter((row) => row.includes(''));
  let indexLastRow = emptiesRows.length - 1;

  let emptiesColumns = gameboard[indexLastRow]
    .map((column, index) => {
      if (column === '') return index;
      return null;
    })
    .filter((column) => column !== null);

  let randomColumn =    emptiesColumns[Math.floor(randomFunction() * (emptiesColumns.length - 1))];
  return randomColumn;
}
