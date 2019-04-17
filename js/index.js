import { generateGameboard } from "./generateGameboard.js";
import { initGame } from "./initGame.js";

let boardgame = generateGameboard(6, 7);
initGame(boardgame);
