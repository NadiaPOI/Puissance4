export function initGame(gameboard) {
  let selectorTable = document.createElement('table');
  selectorTable.setAttribute('id', 'gameboard');
  document.body.appendChild(selectorTable);

  // create lines
  gameboard.forEach((element, indexRow) => {
    let row = document.createElement('tr');
    row.setAttribute('id', indexRow);
    selectorTable.appendChild(row);
    // create columns
    element.forEach((column, indexCol) => {
      let col = document.createElement('td');
      let emptyPosition = document.createElement('img');
      emptyPosition.setAttribute('src', './img/empty.png');
      emptyPosition.setAttribute('class', indexCol);
      col.appendChild(emptyPosition);
      row.appendChild(col);
    });
  });

  return selectorTable;
}
