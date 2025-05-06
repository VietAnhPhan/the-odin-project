// import { Cell } from "./Cell.js";

export class KnightPosition {
  constructor(x, y, prev = null) {
    this.x = x;
    this.y = y;
    this.prev = prev;
  }

  calNextMoves() {
    return [
      [this.x + 1, this.y + 2],
      [this.x + 2, this.y + 1],
      [this.x + 2, this.y - 1],
      [this.x + 1, this.y - 2],
      [this.x - 1, this.y - 2],
      [this.x - 2, this.y - 1],
      [this.x - 2, this.y + 1],
      [this.x - 1, this.y + 2],
    ];
  }
}
