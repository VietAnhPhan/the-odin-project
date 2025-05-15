import { Helper } from "./Helper";
import { Battleship } from "./src/ships/Battleship";
import { Carrier } from "./src/ships/Carrier";
import { Destroyer } from "./src/ships/Destroyer";
import { Patrol } from "./src/ships/Patrol";
import { Submarine } from "./src/ships/Submarine";

export class Gameboard {
  constructor(n = 10) {
    this._board = [];
    this.size = n;
    this._ships = [];
    this.initBoard();
  }

  initBoard() {
    for (let i = 0; i < this.size; i++) {
      this._board[i] = [];
      for (let j = 0; j < this.size; j++)
        this._board[i][j] = {
          ship: null,
          shot: false,
        };
    }
  }

  placeShip(ship) {
    // let ship = new ship();

    while (ship.location.length !== ship.length) {
      let start = Helper.randomCoordination(this.size);
      let direction = Helper.randomDirection();
      let flag = 0;

      if (direction === 0 && start.x + ship.length <= 10) {
        for (let i = 0; i < ship.length; i++) {
          if (this._board[start.x + i][start.y].ship !== null) {
            flag = 1;
            break;
          }
        }

        if (flag === 0)
          for (let i = 0; i < ship.length; i++) {
            this._board[start.x + i][start.y].ship = ship;
            ship.location = { x: start.x + i, y: start.y };
          }
      } else if (direction === 1 && start.y + ship.length <= 10) {
        for (let i = 0; i < ship.length; i++) {
          if (this._board[start.x][start.y + i].ship !== null) {
            flag = 1;
            break;
          }
        }

        if (flag === 0) {
          for (let i = 0; i < ship.length; i++) {
            this._board[start.x][start.y + i].ship = ship;
            ship.location = { x: start.x, y: start.y + i };
          }
        }
      }
    }
  }

  get board() {
    return this._board;
  }

  receiveAttack(shotCoord) {
    // const boardCoord = this._board[shotCoord.x][shotCoord.y];

    if (shotCoord.ship !== null) {
      shotCoord.ship.hit();
    }
    shotCoord.shot = true;
  }

  renderBoard(player, gameController) {
    const carrier = new Carrier();
    const battleship = new Battleship();
    const destroyer = new Destroyer();
    const destroyer2 = new Destroyer();
    const patrol = new Patrol();
    const patrol2 = new Patrol();
    const submarine = new Submarine();

    this._ships.push(carrier);
    this._ships.push(battleship);
    this._ships.push(destroyer);
    this._ships.push(destroyer2);
    this._ships.push(patrol);
    this._ships.push(patrol2);
    this._ships.push(submarine);

    this.placeShip(carrier);
    this.placeShip(battleship);
    this.placeShip(destroyer);
    this.placeShip(submarine);
    this.placeShip(patrol);
    this.placeShip(destroyer2);
    this.placeShip(patrol2);

    const playerboard = document.querySelector(`[data-role="${player.role}"]`);
    const playerBattleGround = playerboard.querySelector(
      ".player-board__battle-ground"
    );
    const shipsStatus = playerboard.querySelector(".ships-status");

    const carrierStatus = this.setShipStatus(carrier);
    const battleshipStatus = this.setShipStatus(battleship);
    const destroyerStatus = this.setShipStatus(destroyer);
    const patrolStatus = this.setShipStatus(patrol);
    const submarineStatus = this.setShipStatus(submarine);
    const destroyer2Status = this.setShipStatus(destroyer2);
    const patrol2Status = this.setShipStatus(patrol2);

    shipsStatus.append(
      carrierStatus,
      battleshipStatus,
      destroyerStatus,
      submarineStatus,
      patrolStatus,
      destroyer2Status,
      patrol2Status
    );

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

    this._board.forEach((row) => {
      const boardTableRowBattleGround = document.createElement("tr");

      row.forEach((square) => {
        const boardTableData = document.createElement("td");
        if (square.ship) {
          boardTableData.classList.add("square", "square-occupied");
        }
        if (!square.ship) {
          boardTableData.classList.add("square", "square-unoccupied");
        }
        // if (this.role === "computer")

        boardTableData.addEventListener("click", () => {
          if (!this.areSunk()) {
            this.receiveAttack(square);
            this.updateBoard(boardTableBody.childNodes);
            this.updateShipStatus(square.ship, player.role);

            if (this.areSunk()) {
              gameController.endGame(player);
            }
          }
          // console.log(boardTableBody.childNodes);
          // if (square.ship && !square.ship.isSunk()) {
          //   square.ship.hit();
          //   this.updateShipStatus(square.ship, player.role);
          //   boardTableData.classList.add("ship-get-shot");
          // }
          // if (!square.ship) {
          //   boardTableData.classList.add("square-get-shot");
          // }
        });

        boardTableRowBattleGround.appendChild(boardTableData);
      });

      boardTableBody.appendChild(boardTableRowBattleGround);
    });

    boardTable.appendChild(boardTableBody);

    playerBattleGround.append(boardTable);
  }

  setShipStatus(ship) {
    const shipType = ship.type;
    const lengthContainer = document.createElement("div");
    lengthContainer.classList.add("ship-healthpoints-length");

    for (let i = 0; i < ship.length; i++) {
      const square = document.createElement("div");

      square.classList.add("ship-healthpoint");
      square.setAttribute("get-hit", false);
      //   square.setAttribute("ship-id", ship.id);
      lengthContainer.appendChild(square);
    }

    const shipContainer = document.createElement("div");
    shipContainer.setAttribute("ship-type", ship.type);
    shipContainer.setAttribute("ship-id", ship.id);

    shipContainer.append(shipType, lengthContainer);

    return shipContainer;
  }

  updateShipStatus(ship, playerRole) {
    if (!ship) return;
    const player = document.querySelector(`[data-role='${playerRole}']`);
    const shipID = player.querySelector(`[ship-id="${ship.id}"]`);
    const shipHealthPoint = shipID.querySelector("[get-hit='false']");
    if (shipHealthPoint) shipHealthPoint.setAttribute("get-hit", true);
    // shipHealthPoints.forEach((shipHealthPoint) => {

    // });
  }

  updateBoard(squareDOMs) {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++)
        if (
          this._board[i][j].ship &&
          this._board[i][j].ship.isShot() &&
          this._board[i][j].shot
        ) {
          squareDOMs[i].childNodes[j].classList.add("ship-get-shot");
        } else if (this._board[i][j].shot) {
          squareDOMs[i].childNodes[j].classList.add("square-get-shot");
        }
    }
  }

  get ships() {
    return this._ships;
  }

  set ships(ship) {
    this._ships.push(ship);
  }

  areSunk() {
    const ships = this._ships.filter((ship) => !ship.isSunk());
    return ships.length > 0 ? false : true;
  }
}
