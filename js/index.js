import { generateGameboard } from "./generateGameboard.js";
import { initGame } from "./initGame.js";
import {
  addEventListenerToColumn,
  addRedPawn
} from "./addEventListenerToColumn.js";
import { findEmptyColumn } from "./turnOfPlayAI.js";

let gameboard = generateGameboard(6, 7);

initGame(gameboard);
