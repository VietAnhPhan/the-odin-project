import { Helper } from "./Helper";
import { Battleship } from "./ships/Battleship";

export class Gameboard {
  constructor(n = 10) {
    this.board = [];
    this.size = n;
  }

  initBoard() {
    for (let i = 0; i < this.size; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.size; j++)
        this.board[i][j] = {
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
          if (this.board[start.x + i][start.y].ship !== null) {
            flag = 1;
            break;
          }
        }

        if (flag === 0)
          for (let i = 0; i < ship.length; i++) {
            this.board[start.x + i][start.y].ship = ship;
            ship.location = { x: start.x + i, y: start.y };
          }
      } else if (direction === 1 && start.y + ship.length <= 10) {
        for (let i = 0; i < ship.length; i++) {
          if (this.board[start.x][start.y + i].ship !== null) {
            flag = 1;
            break;
          }
        }

        if (flag === 0) {
          for (let i = 0; i < ship.length; i++) {
            this.board[start.x][start.y + i].ship = ship;
            ship.location = { x: start.x, y: start.y + i };
          }
        }
      }
    }
  }
}
