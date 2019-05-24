export function addEventListenerToColumn(gameboard, addPawns) {
  let positions = document.querySelectorAll('img');

  for (let position = 0; position < positions.length; position++) {
    let column = positions[position];

    column.addEventListener('click', event => {
      column = event.target;
      addPawns(column, gameboard);
    });
  }
}
