import { isWinner } from "./isWinner.js";

export function checkIfRedWinner(gameboard, row, column) {
  let redWinner = false;

  if (isWinner(gameboard, row, column, "R") === true) {
    redWinner = true;
    console.log("Red player win ;-)");
    return "Red player win ;-)";
  }
}
