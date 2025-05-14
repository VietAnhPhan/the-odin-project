import { Gameboard } from "../Gameboard";
import { Player } from "../Player";
import { Battleship } from "./ships/Battleship";
import { Carrier } from "./ships/Carrier";
import { Destroyer } from "./ships/Destroyer";
import { Patrol } from "./ships/Patrol";
import { Submarine } from "./ships/Submarine";

import "./css/style.css";

const humanPlayer = new Player("human");
const computerPlayer = new Player("computer");

humanPlayer.startGame();
computerPlayer.startGame();
