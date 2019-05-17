export function initGame(boardgame) {
  let selectorTable = document.getElementById("gameboard");

  // create lines
  for (let indexRow = 0; indexRow < boardgame.length; indexRow++) {
    let line = boardgame[indexRow];
    line = document.createElement("tr");
    line.setAttribute("id", indexRow);
    selectorTable.appendChild(line);

    // create columns
    for (let indexCol = 0; indexCol < boardgame[indexRow].length; indexCol++) {
      let col = document.createElement("td");
      let emptyPosition = document.createElement("img");
      emptyPosition.setAttribute("src", "./img/empty.png");
      emptyPosition.setAttribute("class", indexCol);
      col.appendChild(emptyPosition);
      line.appendChild(col);
    }
  }
  return selectorTable;
}
