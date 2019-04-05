const addPawn = require("./addPawn");

function turnOfPlayAI(gameboard, randomPosition) {
  if (randomPosition === 0 && gameboard[0][randomPosition] !== "") {
    randomPosition = Math.floor(Math.random() * gameboard[0].length) + 1;
  }
  addPawn(gameboard, randomPosition, "R");
  console.log(gameboard);
  return gameboard;
}

module.exports = turnOfPlayAI;
