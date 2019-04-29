import { generateGameboard } from "./generateGameboard.js";
import { initGame } from "./initGame.js";

let gameboard = generateGameboard(6, 7);

initGame(gameboard);
