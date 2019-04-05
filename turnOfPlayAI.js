const addPawn = require("./addPawn");

function turnOfPlayAI(gameboard, randomPosition) {
  if (gameboard[0][randomPosition] !== "") {
    var emptiesColumns = findEmptyColumn(gameboard[0]);
    randomPosition =
      emptiesColumns[Math.floor(Math.random() * emptiesColumns.length)];
  }
  addPawn(gameboard, randomPosition, "R");
  console.log(gameboard);
  return gameboard;
}

function findEmptyColumn(row) {
  var emptiesColumns = [];
  for (var column = 0; column < row.length; column++) {
    if (row[column] === "") {
      emptiesColumns.push(column);
    }
  }
  return emptiesColumns;
}

module.exports = turnOfPlayAI;
