import { submitLengthGameboard } from './submitLengthGameboard.controller.js';

export function restartGame() {
  let btn = document.getElementById('restart');
  btn.addEventListener('click', () => {
    document.getElementById('gameboard').remove();
    document.getElementById('displayWinner').style.display = 'none';
    submitLengthGameboard();
  });
}
