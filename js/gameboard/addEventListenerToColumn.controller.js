export function addEventListenerToColumn(gameboard, addPawns) {
  document.getElementById('gameboard').addEventListener('click', event => {
    let column = event.target;
    addPawns(column, gameboard);
  });
}
