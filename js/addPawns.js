import { addPawn } from './addPawn.js';
import { turnOfPlayAI, findEmptyColumn } from './turnOfPlayAI.js';
import { checkIfYellowWinner } from './checkIfYellowWinner.js';
import { checkIfRedWinner } from './checkIfRedWinner.js';

let randomFunction = Math.random;
let yellowWinner = false;
let redWinner = false;

export function addYellowPawn(gameboard, column) {
  let col = column;
  let indexRow = gameboard.length - 1;
  let indexColumn = col.className;
  let lastRow = document.getElementById(indexRow);

  col = lastRow.childNodes[indexColumn].lastChild;

  while (col.getAttribute('src') !== './img/empty.png' && indexRow !== 0) {
    indexRow -= 1;
    let previousRow = document.getElementById(indexRow).childNodes[indexColumn].lastChild;
    col = previousRow;
  }

  col.setAttribute('src', './img/yellow.png');
  addPawn(gameboard, indexColumn, 'Y');
  yellowWinner = checkIfYellowWinner(gameboard, indexRow, indexColumn, yellowWinner) === true;
}

export function addRedPawn(gameboard) {
  let randomColumn = findEmptyColumn(gameboard, randomFunction);
  let newGameboard = turnOfPlayAI(gameboard, randomColumn);

  for (let indexRow = 0; indexRow < newGameboard.length; indexRow++) {
    let row = newGameboard[indexRow];

    if (row.includes('R')) {
      let indexPlayedRow = newGameboard.indexOf(row);
      let playedColumn = document.getElementById(indexPlayedRow).childNodes[
        randomColumn
      ].lastChild;

      if (playedColumn.getAttribute('src') === './img/empty.png') {
        playedColumn.setAttribute('src', './img/red.png');
        redWinner = checkIfRedWinner(
          gameboard,
          indexPlayedRow,
          randomColumn,
          redWinner
        ) === true;
      }
    }
  }
}

export function addPawns(currentColumn, gameboard) {
  if (yellowWinner === false && redWinner === false) {
    addYellowPawn(gameboard, currentColumn);
    if (yellowWinner === false) {
      addRedPawn(gameboard);
    }
  }
}
