import { isWinner } from './isWinner.js';
import { getNewBoard } from './getNewBoard.js';

export function checkIfRedWinner(gameboard, row, column, redWinner) {
  let winner = redWinner;
  if (isWinner(gameboard, row, column, 'R') === true) {
    winner = true;
    document.getElementById('displayWinner').innerHTML = '<p>Great !! Red player win !</p>';
    document.getElementById('displayWinner').style.display = 'block';
    getNewBoard();
  }
  return winner;
}
