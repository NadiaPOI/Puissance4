import { addPawn } from "./addPawn.js";
import { turnOfPlayAI, findEmptyColumn } from "./turnOfPlayAI.js";
import { isWinner } from "./isWinner.js";

let randomFunction = Math.random;
let yellowWinner = false;
let redWinner = false;

export function addEventListenerToColumn(gameboard) {
  let positions = document.querySelectorAll("img");

  for (let position = 0; position < positions.length; position++) {
    const column = positions[position];
    column.addEventListener("click", function(event) {
      let currentColumn = event.target;
      let currentRow = currentColumn.parentNode.parentNode.id;
      if (yellowWinner === false && redWinner === false) {
        addYellowPawn(gameboard, currentColumn);
        addRedPawn(gameboard);
      }
    });
  }
}

export function addYellowPawn(gameboard, column) {
  let indexRow = column.parentNode.parentNode.id;
  console.log("indexRow", indexRow);
  let indexColumn = column.className;
  console.log("indexCol", indexColumn);

  let lastRow = document.getElementById(gameboard.length - 1);
  indexRow = gameboard.length - 1;
  column = lastRow.childNodes[indexColumn].lastChild;

  console.log("indexRow", indexRow);

  if (column.src !== "https://nadiapoi.github.io/Puissance4/img/empty.png") {
    while (
      column.src !== "https://nadiapoi.github.io/Puissance4/img/empty.png" &&
      indexRow !== 0
    ) {
      indexRow--;
      let previousRow = document.getElementById(indexRow).childNodes[
        indexColumn
      ].lastChild;
      column = previousRow;
    }
  }

  column.setAttribute("src", "./img/yellow.png");
  addPawn(gameboard, indexColumn, "Y");
  checkIfYellowWinner(gameboard, indexRow, indexColumn);
}

export function addRedPawn(gameboard) {
  let randomColumn = findEmptyColumn(gameboard, randomFunction);
  console.log("redCol", randomColumn);
  let newGameboard = turnOfPlayAI(gameboard, randomColumn);

  for (let indexRow = 0; indexRow < newGameboard.length; indexRow++) {
    let row = newGameboard[indexRow];

    if (row.includes("R")) {
      let indexPlayedRow = newGameboard.indexOf(row);
      console.log("indexPlayedRow", indexPlayedRow);
      let playedColumn = document.getElementById(indexPlayedRow).childNodes[
        randomColumn
      ].lastChild;

      if (
        playedColumn.src ===
        "https://nadiapoi.github.io/Puissance4/img/empty.png"
      ) {
        playedColumn.setAttribute("src", "./img/red.png");
        checkIfRedWinner(gameboard, indexPlayedRow, playedColumn);
      }
    }
  }
}

export function checkIfYellowWinner(gameboard, row, column) {
  if (isWinner(gameboard, row, column, "Y") === true) {
    yellowWinner = true;
    console.log("Yellow player win ;-)");
  }
}

export function checkIfRedWinner(gameboard, row, column) {
  if (isWinner(gameboard, row, column, "R") === true) {
    redWinner = true;
    console.log("Red player win ;-)");
  }
}
