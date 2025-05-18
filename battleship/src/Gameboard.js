import { Helper } from "./Helper";
import { Battleship } from "./ships/Battleship";
import { Carrier } from "./ships/Carrier";
import { Destroyer } from "./ships/Destroyer";
import { Patrol } from "./ships/Patrol";
import { Submarine } from "./ships/Submarine";

export class Gameboard {
  constructor(player, gameController, n = 10) {
    this._board = [];
    this._size = n;
    this._ships = [];
    this._squareCoords = [];
    this.player = player;
    this.gameController = gameController;
    this._shotCoord = null;
    this._shotSquare = null;

    this.initBoard();
    this.initShips();
    this.placeShips();
  }

  initBoard() {
    for (let i = 0; i < this._size; i++) {
      this._board[i] = [];
      for (let j = 0; j < this._size; j++) {
        this._squareCoords.push({ x: i, y: j });
        this._board[i][j] = {
          ship: null,
          shot: false,
        };
      }
    }
  }

  get squareCoords() {
    return this._squareCoords;
  }

  placeShip(ship) {
    // let ship = new ship();

    while (ship.location.length !== ship.length) {
      let start = Helper.randomCoordination(this._size);
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

  get size() {
    return this._size;
  }

  get shotCoord() {
    return this._shotCoord;
  }

  get shotSquare() {
    return this._shotSquare;
  }

  receiveAttack(shotCoord) {
    this._shotCoord = shotCoord;
    this._shotSquare = this._board[shotCoord.x][shotCoord.y];

    const shotSquare = this._board[shotCoord.x][shotCoord.y];
    // const boardCoord = this._board[shotCoord.x][shotCoord.y];
    if (shotSquare.shot === true && !shotSquare.ship) return;
    if (shotSquare.ship) {
      shotSquare.ship.hit();
    }

    shotSquare.shot = true;
  }

  initShips() {
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
  }

  placeShips() {
    this._ships.map((ship) => {
      this.placeShip(ship);
    });
  }

  // renderStatusView(player) {
  //   const playerboard = document.querySelector(`[data-role="${player.role}"]`);
  //   const shipsStatus = playerboard.querySelector(".ships-status");

  //   this._ships.map((ship) => {
  //     const shipStatus = this.setShipStatus(ship);
  //     shipsStatus.appendChild(shipStatus);
  //   });
  // }

  // renderBoard(player, gameController) {
  //   // const carrier = new Carrier();
  //   // const battleship = new Battleship();
  //   // const destroyer = new Destroyer();
  //   // const destroyer2 = new Destroyer();
  //   // const patrol = new Patrol();
  //   // const patrol2 = new Patrol();
  //   // const submarine = new Submarine();

  //   // this._ships.push(carrier);
  //   // this._ships.push(battleship);
  //   // this._ships.push(destroyer);
  //   // this._ships.push(destroyer2);
  //   // this._ships.push(patrol);
  //   // this._ships.push(patrol2);
  //   // this._ships.push(submarine);

  //   // this.placeShip(carrier);
  //   // this.placeShip(battleship);
  //   // this.placeShip(destroyer);
  //   // this.placeShip(submarine);
  //   // this.placeShip(patrol);
  //   // this.placeShip(destroyer2);
  //   // this.placeShip(patrol2);

  //   this.gameboardUI.renderStatusView(this._ships, player);

  //   const playerboard = document.querySelector(`[data-role="${player.role}"]`);
  //   const playerBattleGround = playerboard.querySelector(
  //     ".player-board__battle-ground"
  //   );

  //   let axisY = "<div class='axis-y'>";

  //   for (let i = 1; i <= 10; i++) {
  //     axisY += "<div class='number-order'>" + i + "</div>";
  //   }

  //   axisY += "</div";

  //   playerBattleGround.innerHTML += axisY;

  //   const boardTable = document.createElement("table");
  //   const boardTableHead = document.createElement("thead");
  //   const boardTableRow = document.createElement("tr");
  //   boardTableRow.classList.add("axis-x");

  //   for (let i = 0; i < 10; i++) {
  //     const boardTableHeader = document.createElement("th");
  //     boardTableHeader.textContent = String.fromCharCode(65 + i);

  //     boardTableRow.appendChild(boardTableHeader);
  //   }

  //   boardTableHead.appendChild(boardTableRow);
  //   boardTable.appendChild(boardTableHead);

  //   const boardTableBody = document.createElement("tbody");
  //   boardTableBody.setAttribute("data-role", player.role);

  //   this._board.forEach((row) => {
  //     const boardTableRowBattleGround = document.createElement("tr");

  //     row.forEach((square) => {
  //       const boardTableData = document.createElement("td");
  //       if (square.ship) {
  //         boardTableData.classList.add("square", "square-occupied");
  //       }
  //       if (!square.ship) {
  //         boardTableData.classList.add("square", "square-unoccupied");
  //       }
  //       if (player.role === "computer")
  //         boardTableData.addEventListener("click", () => {
  //           if (!this.areSunk() && gameController.isHumanTurn()) {
  //             if (!this.receiveAttack(square)) return;
  //             this.updateBoard(player.role);
  //             this.updateShipStatus(square.ship, player.role);

  //             if (this.areSunk()) {
  //               gameController.endGame(player);
  //               return;
  //             }

  //             gameController.playGame();
  //           }
  //           // console.log(boardTableBody.childNodes);
  //           // if (square.ship && !square.ship.isSunk()) {
  //           //   square.ship.hit();
  //           //   this.updateShipStatus(square.ship, player.role);
  //           //   boardTableData.classList.add("ship-get-shot");
  //           // }
  //           // if (!square.ship) {
  //           //   boardTableData.classList.add("square-get-shot");
  //           // }
  //         });

  //       boardTableRowBattleGround.appendChild(boardTableData);
  //     });

  //     boardTableBody.appendChild(boardTableRowBattleGround);
  //   });

  //   boardTable.appendChild(boardTableBody);

  //   playerBattleGround.append(boardTable);
  // }

  // setShipStatus(ship) {
  //   const shipType = ship.type;
  //   const lengthContainer = document.createElement("div");
  //   lengthContainer.classList.add("ship-healthpoints-length");

  //   for (let i = 0; i < ship.length; i++) {
  //     const square = document.createElement("div");

  //     square.classList.add("ship-healthpoint");
  //     square.setAttribute("get-hit", false);
  //     //   square.setAttribute("ship-id", ship.id);
  //     lengthContainer.appendChild(square);
  //   }

  //   const shipStatus = document.createElement("div");
  //   shipStatus.setAttribute("ship-type", ship.type);
  //   shipStatus.setAttribute("ship-id", ship.id);

  //   shipStatus.append(shipType, lengthContainer);

  //   return shipStatus;
  // }

  // updateShipStatus(ship, playerRole) {
  //   if (!ship) return;
  //   const player = document.querySelector(`[data-role='${playerRole}']`);
  //   const shipID = player.querySelector(`[ship-id="${ship.id}"]`);
  //   const shipHealthPoint = shipID.querySelector("[get-hit='false']");
  //   if (shipHealthPoint) shipHealthPoint.setAttribute("get-hit", true);
  //   // shipHealthPoints.forEach((shipHealthPoint) => {

  //   // });
  // }

  // updateBoard(player) {
  //   const squareDOMs = document.querySelector(
  //     `tbody[data-role=${player}]`
  //   ).childNodes;

  //   for (let i = 0; i < this._size; i++) {
  //     for (let j = 0; j < this._size; j++)
  //       if (
  //         this._board[i][j].ship &&
  //         this._board[i][j].ship.isShot() &&
  //         this._board[i][j].shot
  //       ) {
  //         squareDOMs[i].childNodes[j].classList.add("ship-get-shot");
  //       } else if (this._board[i][j].shot) {
  //         squareDOMs[i].childNodes[j].classList.add("square-get-shot");
  //       }
  //   }
  // }

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
