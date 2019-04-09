const addPawn = require("./addPawn");

var randomFunction = Math.random;

function turnOfPlayAI(gameboard, randomFunction) {
  return addPawn(gameboard, findEmptyColumn(gameboard, randomFunction), "R");
}

function findEmptyColumn(gameboard, randomFunction) {
  var emptiesColumns = [];
  var row = gameboard[5];

  for (var column = 0; column < row.length; column++) {
    if (row[column] === "") {
      emptiesColumns.push(column);
    }
  }
  console.log(emptiesColumns);
  var randomColumn =
    emptiesColumns[Math.floor(randomFunction() * emptiesColumns.length)];
  console.log(randomColumn);
  return randomColumn;
}

module.exports = turnOfPlayAI;
