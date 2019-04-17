import { generateGameboard } from "./generateGameboard.js";
import { addEventListenerToColumn } from "./addEventListenerToColumn.js";

let boardgame = generateGameboard(6, 7);
let row = boardgame[0];

export function initGame(boardgame) {
  let selectorTable = document.querySelector("table");
  // create lines
  for (let indexRow = boardgame.length - 1; indexRow >= 0; indexRow--) {
    let line = boardgame[indexRow];
    line = document.createElement("tr");
    line.setAttribute("id", indexRow);
    selectorTable.appendChild(line);
    // create columns
    for (let indexCol = 0; indexCol < row.length; indexCol++) {
      let col = document.createElement("td");
      let emptyPosition = document.createElement("img");
      emptyPosition.setAttribute("src", "../img/empty.png");
      emptyPosition.setAttribute("class", indexCol);
      emptyPosition.onclick = function() {
        addEventListenerToColumn(this);
        console.log(emptyPosition.parentNode.parentNode);
      };
      col.appendChild(emptyPosition);
      line.appendChild(col);
    }
  }
}
