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
      }
    });
  }
}

export function addYellowPawn(gameboard, column) {
  let indexRow = column.parentNode.parentNode.id;
  let indexColumn = column.className;
  let lastRow = document.getElementById(gameboard.length - 1);

  console.log("indexRow", indexRow);
  console.log("indexCol", indexColumn);

  if (
    column.src !== "https://nadiapoi.github.io/Puissance4/img/empty.png" &&
    indexRow !== 0
  ) {
    while (
      document.getElementById(indexRow).childNodes[indexColumn].lastChild
        .src !== "https://nadiapoi.github.io/Puissance4/img/empty.png"
    ) {
      indexRow--;
      let previousRow = document.getElementById(indexRow).childNodes[
        indexColumn
      ].lastChild;
      column = previousRow;
    }
  }

  column = lastRow.childNodes[indexColumn].lastChild;

  while (column.src !== "https://nadiapoi.github.io/Puissance4/img/empty.png") {
    lastRow--;
  }

  /* if (column.src === "https://nadiapoi.github.io/Puissance4/img/empty.png") {
    if (
      lastRow.childNodes[indexColumn].lastChild.src ===
      "https://nadiapoi.github.io/Puissance4/img/empty.png"
    ) {
      column = lastRow.childNodes[indexColumn].lastChild;
    }
  } else {
    while (
      lastRow.childNodes[indexColumn].lastChild.src !==
      "https://nadiapoi.github.io/Puissance4/img/empty.png"
    ) {
      lastRow--;
      let currentLastRow = document.getElementById(lastRow).childNodes[
        indexColumn
      ].lastChild;
      column = currentLastRow;
    }
  } */
  column.setAttribute("src", "./img/yellow.png");
  addPawn(gameboard, indexColumn, "Y");
  checkIfYellowWinner(gameboard, indexRow, indexColumn);
}

export function addRedPawn(gameboard) {
  let randomColumn = findEmptyColumn(gameboard, randomFunction);
  let newGameboard = turnOfPlayAI(gameboard, randomColumn);

  for (let indexRow = 0; indexRow < newGameboard.length; indexRow++) {
    let row = newGameboard[indexRow];

    if (row.includes("R")) {
      let indexPlayedRow = newGameboard.indexOf(row);
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
  } else {
    addRedPawn(gameboard);
    checkIfRedWinner(gameboard, row, column);
    console.log(gameboard);
  }
}

export function checkIfRedWinner(gameboard, row, column) {
  if (isWinner(gameboard, row, column, "R") === true) {
    redWinner = true;
    console.log("Red player win ;-)");
  }
}
