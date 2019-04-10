import { addPawn } from "./addPawn.js";

var randomFunction = Math.random;

export function turnOfPlayAI(gameboard, randomFunction) {
  return addPawn(gameboard, findEmptyColumn(gameboard, randomFunction), "R");
}

export function findEmptyColumn(gameboard, randomFunction) {
  var emptiesColumns = [];
  var row = gameboard[gameboard.length - 1];

  for (var column = 0; column < row.length; column++) {
    if (row[column] === "") {
      emptiesColumns.push(column);
    }
  }
  console.log(emptiesColumns);
  var randomColumn =
    emptiesColumns[Math.floor(randomFunction() * (emptiesColumns.length - 1))];
  console.log(randomColumn);
  return randomColumn;
}
