import { isWinner } from "./isWinner.js";

export function checkIfYellowWinner(gameboard, row, column) {
  let yellowWinner = false;

  if (isWinner(gameboard, row, column, "Y") === true) {
    yellowWinner = true;
    console.log("Yellow player win ;-)");
    return "Yellow player win ;-)";
  }
}
