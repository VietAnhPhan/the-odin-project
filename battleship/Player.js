import { Gameboard } from "./Gameboard";
import { Battleship } from "./ships/Battleship";
import { Carrier } from "./ships/Carrier";
import { Destroyer } from "./ships/Destroyer";
import { Patrol } from "./ships/Patrol";
import { Submarine } from "./ships/Submarine";

export class Player {
  constructor(role) {
    this.role = role;
  }

  startGame() {
    const carrier = new Carrier();
    const battleship = new Battleship();
    const destroyer = new Destroyer();
    const destroyer2 = new Destroyer();
    const patrol = new Patrol();
    const patrol2 = new Patrol();
    const submarine = new Submarine();

    const gameBoard = new Gameboard();
    gameBoard.placeShip(carrier);
    gameBoard.placeShip(battleship);
    gameBoard.placeShip(destroyer);
    gameBoard.placeShip(patrol);
    gameBoard.placeShip(submarine);
    gameBoard.placeShip(destroyer2);
    gameBoard.placeShip(patrol2);
    const playerboard = document.querySelector(`[data-role="${this.role}"]`);
    const playerBattleGround = playerboard.querySelector(
      ".player-board__battle-ground"
    );

    const carrierHealthPoints = this.healthPointView(carrier);
    playerboard.appendChild(carrierHealthPoints);

    let axisY = "<div class='axis-y'>";

    for (let i = 1; i <= 10; i++) {
      axisY += "<div class='number-order'>" + i + "</div>";
    }

    axisY += "</div";

    playerBattleGround.innerHTML += axisY;

    const boardTable = document.createElement("table");
    const boardTableHead = document.createElement("thead");
    const boardTableRow = document.createElement("tr");
    boardTableRow.classList.add("axis-x");

    for (let i = 0; i < 10; i++) {
      const boardTableHeader = document.createElement("th");
      boardTableHeader.textContent = String.fromCharCode(65 + i);

      boardTableRow.appendChild(boardTableHeader);
    }

    boardTableHead.appendChild(boardTableRow);
    boardTable.appendChild(boardTableHead);

    const boardTableBody = document.createElement("tbody");

    gameBoard.board.forEach((row) => {
      const boardTableRowBattleGround = document.createElement("tr");

      row.forEach((square) => {
        const boardTableData = document.createElement("td");
        if (square.ship) {
          boardTableData.classList.add("square", "square-occupied");
        }
        if (!square.ship) {
          boardTableData.classList.add("square", "square-unoccupied");
        }
        if (this.role === "computer")
          boardTableData.addEventListener("click", () => {
            if (square.ship) {
              square.ship.hit();
              boardTableData.classList.add("ship-get-shot");
            }
            if (!square.ship) {
              boardTableData.classList.add("square-get-shot");
            }
          });

        boardTableRowBattleGround.appendChild(boardTableData);
      });

      boardTableBody.appendChild(boardTableRowBattleGround);
    });

    boardTable.appendChild(boardTableBody);

    playerBattleGround.append(boardTable);
  }

  healthPointView(ship) {
    const shipType = ship.type;
    const lengthContainer = document.createElement("div");

    for (let i = 0; i < ship.length; i++) {
      const square = document.createElement("div");
      square.classList.add("ship-healthpoints");
      lengthContainer.appendChild(square);
    }

    const shipContainer = document.createElement("div");

    shipContainer.append(shipType, lengthContainer);

    return shipContainer;
  }
}
