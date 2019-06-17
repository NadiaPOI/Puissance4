// import { submitLengthGameboard } from './submitLengthGameboard.controller.js';

export function restartGame() {
  let btn = document.getElementById('restart');
  btn.addEventListener('click', () => {
    window.location.reload(true);
    /* document.getElementById('displayWinner').style.display = 'none';
    document.getElementById('gameboard').style.display = 'none';
    submitLengthGameboard(); */
  });
}
