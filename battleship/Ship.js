export class Ship {
  constructor(length = 1, hitTimes = 0, sunk = false) {
    this.length = length;
    this.hitTimes = hitTimes;
    this.sunk = sunk;
  }

  hit() {
    this.hitTimes++;
  }

  isSunk() {
    return this.length === this.hitTimes ? true : false;
  }
}
