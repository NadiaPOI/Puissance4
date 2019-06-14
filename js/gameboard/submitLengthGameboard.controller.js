import { generateGameboard } from './generateGameboard.logic.js';
import { initGame } from './initGame.controller.js';
import { addEventListenerToColumn } from './addEventListenerToColumn.controller.js';
import { addPawns } from '../playPawn/addPawns.controller.js';

export function submitLengthGameboard() {
  document.querySelector('aside').style.display = 'block';
  document.getElementById('start').style.display = 'none';
  let choiceForm = document.querySelector('form');

  choiceForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let row = parseInt(document.getElementById('row').value, 10);
    let column = parseInt(document.getElementById('col').value, 10);
    let gameboard = generateGameboard(row, column);
    document.querySelector('aside').style.display = 'none';

    initGame(gameboard);
    addEventListenerToColumn(gameboard, addPawns);
  });
}
