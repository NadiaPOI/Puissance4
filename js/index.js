import { submitLengthGameboard } from './gameboard/submitLengthGameboard.controller.js';

let startButton = document.getElementById('start');
startButton.addEventListener('click', submitLengthGameboard);
