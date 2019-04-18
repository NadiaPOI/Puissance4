import { addPawn } from "./addPawn.js";

let randomFunction = Math.random;

export function turnOfPlayAI(gameboard, randomFunction) {
  return addPawn(gameboard, findEmptyColumn(gameboard, randomFunction), "R");
}

export function findEmptyColumn(gameboard, randomFunction) {
  let emptiesColumns = [];
  let row = gameboard[gameboard.length - 1];

  for (let column = 0; column < row.length; column++) {
    if (row[column] === "") {
      emptiesColumns.push(column);
    }
  }
  console.log(emptiesColumns);
  let randomColumn =
    emptiesColumns[Math.floor(randomFunction() * (emptiesColumns.length - 1))];
  return randomColumn;
}
