import { generateGameboard } from "./generateGameboard.js";

let boardgame = generateGameboard(6, 7);
let row = boardgame[0];

export function initGame(boardgame) {
  // create lines
  for (let indexRow = boardgame.length - 1; indexRow >= 0; indexRow--) {
    let line = boardgame[indexRow];
    line = document.createElement("tr");
    boardgame = document.querySelector("table");
    boardgame.appendChild(line);
    // create columns
    for (let indexCol = 0; indexCol < row.length; indexCol++) {
      let col = document.createElement("td");
      let emptyPosition = document.createElement("img");
      emptyPosition.setAttribute("src", "../img/empty.png");
      col.appendChild(emptyPosition);
      line.appendChild(col);
    }
  }
}

initGame(boardgame);
