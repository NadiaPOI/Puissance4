import { addPawn } from './addPawn.logic.js';
import { turnOfPlayAI, findEmptyColumn } from '../AI/turnOfPlayAI.logic.js';
import { checkIfWinner } from '../winner/checkIfWinner.controller.js';

let randomFunction = Math.random;
let yellowWinner = false;
let redWinner = false;

export function addYellowPawn(gameboard, column) {
  let col = column;
  let indexRow = gameboard.length - 1;
  let indexColumn = col.className;
  let lastRow = document.getElementById(gameboard.length - 1);

  col = lastRow.childNodes[indexColumn].lastChild;

  gameboard.forEach((row, index) => {
    if (col.getAttribute('src') !== './img/empty.png' && row[index] !== 0) {
      indexRow -= 1;
      let previousRow = document.getElementById(indexRow).childNodes[indexColumn].lastChild;
      col = previousRow;
    }
  });

  col.setAttribute('src', './img/yellow.png');
  addPawn(gameboard, indexColumn, 'Y');
  yellowWinner = checkIfWinner(gameboard, indexRow, indexColumn, 'Y') === true;
}

export function addRedPawn(gameboard) {
  let randomColumn = findEmptyColumn(gameboard, randomFunction);
  let newGameboard = turnOfPlayAI(gameboard, randomColumn);
  let row = newGameboard[newGameboard.length - 1];

  if (row.includes('R')) {
    let indexPlayedRow = newGameboard.indexOf(row);
    let playedColumn = document.getElementById(indexPlayedRow).childNodes[
      randomColumn
    ].lastChild;

    playedColumn.setAttribute('src', './img/red.png');
    redWinner = checkIfWinner(gameboard, indexPlayedRow, randomColumn, 'R') === true;
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
