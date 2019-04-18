import { generateGameboard } from "./generateGameboard.js";
import { initGame } from "./initGame.js";
import { addEventListenerToColumn } from "./addEventListenerToColumn.js";
import { turnOfPlayAI } from "./turnOfPlayAI.js";

let gameboard = generateGameboard(6, 7);
let randomFunction = Math.random;

initGame(gameboard);
addEventListenerToColumn(gameboard);
// turnOfPlayAI(gameboard, randomFunction);
