import { Gameboard } from "../Gameboard";
import { Battleship } from "../ships/Battleship";
import { Carrier } from "../ships/Carrier";
import { Destroyer } from "../ships/Destroyer";
import { Patrol } from "../ships/Patrol";
import { Submarine } from "../ships/Submarine";

import "./css/style.css";

const playerboard = document.querySelector(".player-board");

const gameBoard = new Gameboard();

let numberOrder = "<div class='axis-y'>";

for (let i = 1; i <= 10; i++) {
  numberOrder += "<div class='number-order'>" + i + "</div>";
}

numberOrder += "</div";

playerboard.innerHTML += numberOrder;

let table = "";
table += "<table>";
table += "<thead>";
table += "<tr class='axis-x'>";
for (let i = 0; i < 10; i++) {
  table += `<th>${String.fromCharCode(65 + i)}</th>`;
}
table += "</tr>";
table += "</thead>";

table += "<tbody>";

const carrier = new Carrier();
const battleship = new Battleship();
const destroyer = new Destroyer();
const destroyer2 = new Destroyer();
const patrol = new Patrol();
const patrol2 = new Patrol();
const submarine = new Submarine();

gameBoard.placeShip(carrier);
gameBoard.placeShip(battleship);
gameBoard.placeShip(destroyer);
gameBoard.placeShip(patrol);
gameBoard.placeShip(submarine);
gameBoard.placeShip(destroyer2);
gameBoard.placeShip(patrol2);

gameBoard.board.forEach((row) => {
  table += "<tr>";

  row.forEach((square) => {
    if (square.ship) table += "<td class='square square-occupied'>";
    if (!square.ship) table += "<td class='square square-unoccupied'>";
    table += "</td>";
  });

  table += "</tr>";
});

table += "</tbody>";
table += "</table>";
playerboard.innerHTML += table;
