export class Gameboard {
  constructor(n = 10) {
    this.board = [];
  }

  initBoard() {
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++) this.board[i][j] = null;
  }

  placeShips(player) {}
}
