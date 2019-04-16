import { generateGameboard } from "./generateGameboard.js";
import { addPawn } from "./addPawn.js";

let boardgame = generateGameboard(6, 7);
let row = boardgame[0];

export function initGame(boardgame) {
  // create lines
  for (let indexRow = boardgame.length - 1; indexRow >= 0; indexRow--) {
    let line = boardgame[indexRow];
    line = document.createElement("tr");
    line.setAttribute("id", indexRow);
    boardgame = document.querySelector("table");
    boardgame.appendChild(line);
    // create columns
    for (let indexCol = 0; indexCol < row.length; indexCol++) {
      let col = document.createElement("td");
      let emptyPosition = document.createElement("img");
      emptyPosition.setAttribute("src", "../img/empty.png");
      emptyPosition.setAttribute("class", indexCol);
      col.appendChild(emptyPosition);
      line.appendChild(col);
    }
  }
}

function yellowPlay() {
  let positions = document.querySelectorAll("img");
  console.log(positions);

  let lines = document.querySelectorAll("tr");
  console.log(lines);

  for (let position = 0; position < positions.length; position++) {
    const element = positions[position];
    element.addEventListener("click", function() {
      let currentRow = this.parentNode.parentNode.id;
      console.log(currentRow);
      let currentColumn = this.className;
      console.log(currentColumn);
      let row = document.getElementById(currentRow);
      console.log(row);
      row.childNodes[currentColumn].lastChild.setAttribute(
        "src",
        "../img/yellow.png"
      );
    });
  }
}
initGame(boardgame);
yellowPlay();
