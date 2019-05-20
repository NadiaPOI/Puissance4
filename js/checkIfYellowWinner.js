import { isWinner } from "./isWinner.js";

export function checkIfYellowWinner(gameboard, row, column, yellowWinner) {
  if (isWinner(gameboard, row, column, "Y") === true) {
    yellowWinner = true;
    console.log("Yellow player win ;-)");
  }
  return yellowWinner;
}
