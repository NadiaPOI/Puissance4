import { addPawn } from "./addPawn.js";
import { turnOfPlayAI, findEmptyColumn } from "./turnOfPlayAI.js";

let randomFunction = Math.random;

export function addEventListenerToColumn(gameboard) {
  let positions = document.querySelectorAll("img");

  for (let position = 0; position < positions.length; position++) {
    const column = positions[position];
    column.addEventListener("click", function(event) {
      let currentColumn = event.target;
      addYellowPawn(gameboard, currentColumn);
    });
  }
}

export function addYellowPawn(gameboard, column) {
  column.setAttribute("src", "../img/yellow.png");
  let indexColumn = column.className;
  addPawn(gameboard, indexColumn, "Y");
  addRedPawn(gameboard);
}

export function addRedPawn(gameboard) {
  let randomColumn = findEmptyColumn(gameboard, randomFunction);
  console.log(randomColumn);
  let newGameboard = turnOfPlayAI(gameboard, randomColumn);
  for (let indexRow = 0; indexRow < newGameboard.length; indexRow++) {
    let row = newGameboard[indexRow];
    if (row.includes("R")) {
      let indexPlayedRow = newGameboard.indexOf(row);
      let playedColumn = document.getElementById(indexPlayedRow).childNodes[
        randomColumn
      ].lastChild;
      console.log(playedColumn.src);
      if (playedColumn.src === "http://localhost:3000/img/empty.png") {
        playedColumn.setAttribute("src", "../img/red.png");
      }
    }
  }
  console.log(newGameboard);
}
