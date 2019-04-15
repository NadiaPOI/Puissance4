import { generateGameboard } from "./generateGameboard.js";

export function addPawn(gameboard, column, colorPlayer) {
  let lastRow = gameboard.length - 1;

  if (!gameboard[0].includes("")) {
    throw new Error("The gameboard is full");
  }

  if (gameboard[0][column] !== "") {
    throw new Error("The column is full");
  }

  while (gameboard[lastRow][column] !== "" && lastRow > 0) {
    lastRow--;
  }
  gameboard[lastRow][column] = colorPlayer;

  return gameboard;
}
