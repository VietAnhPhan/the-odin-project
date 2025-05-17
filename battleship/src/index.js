import { Gameboard } from "./Gameboard";
import { Player } from "./Player";
import { Battleship } from "./ships/Battleship";
import { Carrier } from "./ships/Carrier";
import { Destroyer } from "./ships/Destroyer";
import { Patrol } from "./ships/Patrol";
import { Submarine } from "./ships/Submarine";
import { GameController } from "./gameController";

import "./css/style.css";

const humanPlayer = new Player("human");
const computerPlayer = new Player("computer");

const humanGameBoard = new Gameboard();
const computerGameBoard = new Gameboard();

humanPlayer.assignedBoard(humanGameBoard);
computerPlayer.assignedBoard(computerGameBoard);

const gameController = new GameController(humanPlayer, computerPlayer);

humanGameBoard.renderBoard(humanPlayer, gameController);
computerGameBoard.renderBoard(computerPlayer, gameController);

gameController.playGame();
