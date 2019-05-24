import { generateGameboard } from './generateGameboard.js';
import { initGame } from './initGame.js';
import { addEventListenerToColumn } from './addEventListenerToColumn.js';
import { addPawns } from './addPawns.js';

let gameboard = generateGameboard(6, 7);

initGame(gameboard);
addEventListenerToColumn(gameboard, addPawns);
