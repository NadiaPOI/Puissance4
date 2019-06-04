import { isWinner } from './isWinner.js';
import { getNewBoard } from './getNewBoard.js';

export function checkIfYellowWinner(gameboard, row, column, yellowWinner) {
  let winner = yellowWinner;
  if (isWinner(gameboard, row, column, 'Y') === true) {
    winner = true;
    document.getElementById('displayWinner').innerHTML = '<p>Great !! Yellow player win !</p>';
    document.getElementById('displayWinner').style.display = 'block';
    getNewBoard();
  }
  return winner;
}
