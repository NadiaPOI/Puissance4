import { isWinner } from "./isWinner.js";

export function checkIfYellowWinner(gameboard, row, column, yellowWinner) {
  if (isWinner(gameboard, row, column, "Y") === true) {
    yellowWinner = true;
    document.getElementById("displayWinner").innerHTML =
      "<p>Great !! Yellow player win !</p>";
    document.getElementById("displayWinner").style.display = "block";
  }
  return yellowWinner;
}
