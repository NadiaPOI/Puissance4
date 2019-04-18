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
  console.log(gameboard);
}

export function addRedPawn(gameboard, column) {
  column = findEmptyColumn(gameboard, randomFunction);
  turnOfPlayAI(gameboard, randomFunction);
  column.setAttribute("src", "../img/yellow.png");
  let indexColumn = column.className;
  console.log(gameboard);
}
