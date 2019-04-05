const addPawn = require("./addPawn");

function turnOfPlayAI(gameboard, randomPosition) {
  findEmptyColumn(gameboard, randomPosition);
  console.log(gameboard);
  return addPawn(gameboard, randomPosition, "R");
}

function findEmptyColumn(gameboard, randomPosition) {
  var emptiesColumns = [];
  for (let indexRow = 5; indexRow >= 0; indexRow--) {
    if (gameboard[indexRow][randomPosition] !== "") {
      for (var column = 0; column < gameboard[indexRow].length; column++) {
        if (gameboard[indexRow][column] === "") {
          emptiesColumns.push(column);
        }
      }
      randomPosition =
        emptiesColumns[Math.floor(Math.random() * emptiesColumns.length)];
    }
  }
  //console.log(emptiesColumns[Math.floor(Math.random() * emptiesColumns.length)]);
  return randomPosition;
}

module.exports = turnOfPlayAI;
