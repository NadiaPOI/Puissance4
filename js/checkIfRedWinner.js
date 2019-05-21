import { isWinner } from "./isWinner.js";

export function checkIfRedWinner(gameboard, row, column, redWinner) {
  if (isWinner(gameboard, row, column, "R") === true) {
    redWinner = true;
    console.log("Red player win ;-)");
    document.getElementById("displayWinner").innerHTML =
      "<p>Great !! Red player win !</p>";
  }
  return redWinner;
}
