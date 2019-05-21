import { isWinner } from "./isWinner.js";

export function checkIfRedWinner(gameboard, row, column, redWinner) {
  if (isWinner(gameboard, row, column, "R") === true) {
    redWinner = true;
    document.getElementById("displayWinner").innerHTML =
      "<p>Great !! Red player win !</p>";
    document.getElementById("displayWinner").style.display = "block";
  }
  return redWinner;
}
