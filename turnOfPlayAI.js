const addPawn = require("./addPawn");

function turnOfPlayAI(gameboard, randomPosition) {
  //randomPosition = Math.floor(Math.random() * gameboard[0].length);
  addPawn(gameboard, randomPosition, "R");
  console.log(gameboard);
  return gameboard;
}

module.exports = turnOfPlayAI;
