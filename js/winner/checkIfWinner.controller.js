import { isWinner } from './isWinner.logic.js';
import { restartGame } from '../gameboard/restartGame.controller.js';

export function checkIfWinner(gameboard, row, column, colorPlayer) {
  let winner = isWinner(gameboard, row, column, colorPlayer);

  if (winner) {
    let player = colorPlayer === 'R' ? 'Red' : 'Yellow';
    document.getElementById('displayWinner').innerHTML = `<p>Great !! ${player} player win !</p><button id="restart">Start again</button>`;
    document.getElementById('displayWinner').style.display = 'block';
    restartGame();
  }

  return winner;
}
