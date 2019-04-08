const addPawn = require("./addPawn");

var randomFunction = Math.random;

function turnOfPlayAI(gameboard, randomFunction) {
  return addPawn(gameboard, findEmptyColumn(gameboard, randomFunction), "R");
}

function findEmptyColumn(gameboard, randomFunction) {
  var emptiesColumns = [];
  var randomColumn = Math.floor(randomFunction() * 6);
  for (let indexRow = gameboard.length - 1; indexRow >= 0; indexRow--) {
    if (gameboard[indexRow][randomColumn] !== "") {
      for (var column = 0; column < gameboard[indexRow].length; column++) {
        if (gameboard[indexRow][column] === "") {
          emptiesColumns.push(column);
        }
      }
      randomColumn =
        emptiesColumns[Math.floor(randomFunction() * emptiesColumns.length)];
    }
  }
  return randomColumn;
}

module.exports = turnOfPlayAI;
